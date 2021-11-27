import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAl7ZgbhX_w1s98BskNjGd21UjbivlJG-s',
    authDomain: 'tripcom-56468.firebaseapp.com',
    projectId: 'tripcom-56468',
    storageBucket: 'tripcom-56468.appspot.com',
    messagingSenderId: '165779022282',
    appId: '1:165779022282:web:d083ece2bd1748f6aaaf33',
};

// Initialize Firebase
export const initalizeAuth = () => initializeApp(firebaseConfig);
