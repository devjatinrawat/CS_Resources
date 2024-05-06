import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase app
const firebaseConfig = { /* your Firebase config */ };
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

// Define the collection
const coursesRef = collection(db, "courses");

// Define the document data
const courseData = {
  img: "https://i.ytimg.com/vi/uGRZ2CzkFUo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDceTzhymRdtnNsxXSAyzisIl-50w",
  name: "JavaScript Tutorials for beginners in Hindi 2022",
  By: "Thapa Technical",
  Rating: "XXXXX",
  Tag: "Javascript"
};

// Add the document to the collection
try {
  const docRef = await addDoc(coursesRef, courseData);
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
