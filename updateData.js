// updateProducts.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import products from './products.json' assert { type: "json" };

// 1. Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAlg4KuulXQhDILGzZw6_V1Zj3IeytoDGs",
  authDomain: "test-project-01-e4ffc.firebaseapp.com",
  projectId: "test-project-01-e4ffc",
  storageBucket: "test-project-01-e4ffc.firebasestorage.app",
  messagingSenderId: "781434867992",
  appId: "1:781434867992:web:cf490f8286ebb73fa70e6d",
  measurementId: "G-F9CCB4Q3CE"
};

// 2. Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 3. Update function
async function updateAllProducts() {
  const productsCol = collection(db, "products");
  const snapshot = await getDocs(productsCol);
  const firestoreDocs = snapshot.docs;

  for (let i = 0; i < firestoreDocs.length && i < products.length; i++) {
    const docRef = doc(db, "products", firestoreDocs[i].id);
    const updatedData = products[i];

    await updateDoc(docRef, {
      product_name: updatedData.product_name,
  price: updatedData.price,
  imageUrl: updatedData.image_url,
  productLink: updatedData.product_link,
    });

    console.log(`✅ Updated document: ${firestoreDocs[i].id}`);
  }

  console.log("🎉 All product documents updated!");
}

updateAllProducts().catch(console.error);
