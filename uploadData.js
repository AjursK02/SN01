import { db } from './firebaseConfig.js';
import products from './products.json' assert { type: 'json' }; // the JSON file
import { collection, addDoc } from 'firebase/firestore';

const uploadData = async () => {
  const colRef = collection(db, 'products');

  for (const product of products) {
    try {
      await addDoc(colRef, product);
      console.log('Uploaded:', product.Brand);
    } catch (error) {
      console.error('Error uploading:', error);
    }
  }
};

uploadData();
