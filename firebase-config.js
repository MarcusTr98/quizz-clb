import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgocHQ9uZ2bZ0iIknd3jEkM1Kg5j9TKCU",
  authDomain: "quizz-sql-clb.firebaseapp.com",
  databaseURL:
    "https://quizz-sql-clb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quizz-sql-clb",
  storageBucket: "quizz-sql-clb.firebasestorage.app",
  messagingSenderId: "853350883395",
  appId: "1:853350883395:web:89a5cdfed21b762e8574f6",
};

// Khởi tạo Firebase App và Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
