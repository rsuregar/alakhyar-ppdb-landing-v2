// hooks/useFirebase.ts

'use client';

import { remoteConfig } from '@/configs/firebaseConfig';
import { getValue, fetchAndActivate } from 'firebase/remote-config';
import { useState, useEffect } from 'react';
import { defaultRemoteConfigValues } from '@/types/firebase'; // Adjust the import path

type FirebaseValue = string | number | boolean | object | null;

interface UseFirebaseResult {
  value: FirebaseValue;
  loading: boolean;
}

export const useFirebase = (key: any): UseFirebaseResult => {
  const [configValue, setConfigValue] = useState<FirebaseValue>(defaultRemoteConfigValues[key]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getConfigValue = async () => {
      const firebaseRemoteConfig = remoteConfig;
      if (firebaseRemoteConfig) {
        try {
          setLoading(true);
          await fetchAndActivate(firebaseRemoteConfig);
          const value = getValue(firebaseRemoteConfig, key);
          
          // If there's a valid fetched value, replace the default
          const rawValue = value.asString();
          let parsedValue: FirebaseValue = defaultRemoteConfigValues[key]; // Start with default

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

          setConfigValue(parsedValue); // Update state with fetched value
        } catch (error) {
          console.error('Error fetching remote config:', error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error('Firebase remote config not initialized');
        setLoading(false);
      }
    };

    getConfigValue();
  }, [key]);

  return { value: configValue, loading };
};
