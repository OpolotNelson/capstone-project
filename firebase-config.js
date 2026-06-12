// Firebase configuration for KHAS Healthcare System
// Replace the values below with YOUR actual Firebase project configuration

const firebaseConfig = {
    // Get these values from your Firebase Console:
    // Go to Project Settings → General → Your apps → Firebase SDK snippet → Config
    
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    projectId: "YOUR_PROJECT_ID_HERE",
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_APP_ID_HERE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Configure Email Link (Passwordless) Authentication
auth.useDeviceLanguage();

// Action code settings for email links
window.actionCodeSettings = {
    // URL you want to redirect back to after email verification
    url: window.location.href,
    // This must be true for email link sign-in
    handleCodeInApp: true
};

// Enable email link sign-in
firebase.auth().settings.appVerificationDisabledForTesting = false;

console.log("Firebase initialized successfully");