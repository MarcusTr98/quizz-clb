import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// CẬP NHẬT: Import Realtime Database thay vì Firestore
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
// CẬP NHẬT: Export getDatabase
export const db = getDatabase(app);
