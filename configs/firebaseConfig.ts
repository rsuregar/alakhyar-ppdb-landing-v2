// configs/firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getRemoteConfig, RemoteConfig } from 'firebase/remote-config';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string,
};

const app = initializeApp(firebaseConfig);
// Initialize Remote Config
// Initialize Remote Config
let remoteConfig: RemoteConfig | null = null;
if (typeof window !== 'undefined') {
  remoteConfig = getRemoteConfig(app);
  // Set fetch interval based on environment
  remoteConfig.settings.minimumFetchIntervalMillis = process.env.NODE_ENV === 'production' 
    ? 300000 // 10 minutes
    : 0;     // 0 for development
}

export { remoteConfig };
