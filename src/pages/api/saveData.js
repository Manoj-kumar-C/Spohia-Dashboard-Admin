import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyAj2ZbPsNaFY0fV_BvG8FXI20WOSj1HAec",
  authDomain: "video-ap-3e5fe.firebaseapp.com",
  projectId: "video-ap-3e5fe",
  storageBucket: "video-ap-3e5fe.appspot.com",
  messagingSenderId: "9675704832",
  appId: "1:9675704832:web:ffc7a76d944fc78584e6e5",
  measurementId: "G-WNDPESZV29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { formData } = req.body;
    try {
      // Add document to Firestore collection
      await addDoc(collection(db, 'sophia'), formData);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  } else if (req.method === 'PUT') {
    const { id, formData } = req.body;
    try {
      // Update document in Firestore collection
      const sophiaRef = doc(db, 'sophia', id);
      await updateDoc(sophiaRef, formData);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).json({ error: 'Error updating data' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    try {
      // Delete document from Firestore collection
      const sophiaRef = doc(db, 'sophia', id);
      await deleteDoc(sophiaRef);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error deleting data:', error);
      res.status(500).json({ error: 'Error deleting data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
