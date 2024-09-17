// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDy8vj4uZf96TkJQstbGLBXCLvrvmVvHv8",
    authDomain: "acb-saude-form.firebaseapp.com",
    projectId: "acb-saude-form",
    storageBucket: "acb-saude-form.appspot.com",
    messagingSenderId: "1001356480871",
    appId: "1:1001356480871:web:9da0df14f0eb10a32f1fc2"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
