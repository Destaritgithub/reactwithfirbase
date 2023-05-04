import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyByIcXULAFtNG1dNUakVOEYs_7Q_BNLkLU',
  authDomain: 'house-marketplace-app-9faca.firebaseapp.com',
  projectId: 'house-marketplace-app-9faca',
  storageBucket: 'house-marketplace-app-9faca.appspot.com',
  messagingSenderId: '868332425964',
  appId: '1:868332425964:web:833dfa2258c0cffc7b0bc9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
