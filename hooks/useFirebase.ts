'use client';

import { remoteConfig } from '@/configs/firebaseConfig';
import { getValue, fetchAndActivate } from 'firebase/remote-config';
import { useState, useEffect } from 'react';

export const useFirebase = (key: string): string | number | boolean | object | null => {
  const [configValue, setConfigValue] = useState<string | number | boolean | object | null>(null);

  useEffect(() => {
    const getConfigValue = async () => {
      const firebaseRemoteConfig = remoteConfig;
      if (firebaseRemoteConfig) {
        try {
          await fetchAndActivate(firebaseRemoteConfig);
          const value = getValue(firebaseRemoteConfig, key);
        //   console.log('Remote config value', value.asString());
          
          // Set the value based on its type
          let parsedValue: string | number | boolean | object | null = null;

          // Get the raw string value
          const rawValue = value.asString();

          // Try to parse as JSON first
          try {
            parsedValue = JSON.parse(rawValue);
          } catch {
            // If JSON parsing fails, check if it's a number or boolean
            if (!isNaN(Number(rawValue))) {
              parsedValue = Number(rawValue);
            } else if (rawValue.toLowerCase() === 'true') {
              parsedValue = true;
            } else if (rawValue.toLowerCase() === 'false') {
              parsedValue = false;
            } else {
              parsedValue = rawValue; // Default to string if no other type matches
            }
          }

          setConfigValue(parsedValue);
        } catch (error) {
          console.error('Error fetching remote config:', error);
        }
      } else {
        console.error('Firebase remote config not initialized');
      }
    };

    getConfigValue();
  }, [key]); // Depend on the key to refetch if it changes

  return configValue;
};
