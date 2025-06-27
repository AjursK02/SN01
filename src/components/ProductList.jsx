import { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig.js';
import { getDocs, collection } from 'firebase/firestore';
import OutfitCard from "./OutfitCard"

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
        const colRef = collection(db, "products");
        const snapshot = await getDocs(colRef);
        const productData = snapshot.docs.map(doc => doc.data());
        console.log("Fetched Data:", productData); 
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  };

  fetchData();
}, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((item, index) => (
          <OutfitCard
          key = {index}
          image={item.imageUrl}
          title={item.product_name}
          price={item.price}
          productLink={item.productLink}
          />
          ))}
        </div>
          
          // {/* // <div key={index}>
          // //   <img src={item.imageUrl} width="200" alt={item.product_name} />
          // //   <br />
          // //   <h3>{item.product_name}</h3>
          // //   <p>Price: ₹{item.price}</p>
          // //   <a href={item.productLink} target="_blank" rel="noopener noreferrer">
          // //     View Product
          // //   </a>
            
            
          // // </div> */}
        
      )}
    </div>
  );
}

export default ProductList;
