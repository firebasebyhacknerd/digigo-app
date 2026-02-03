import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

export function getFirebaseApp() {
  if (!firebaseConfig.projectId) {
    throw new Error("Firebase env vars missing");
  }
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getDb() {
  const app = getFirebaseApp();
  return getFirestore(app);
}
