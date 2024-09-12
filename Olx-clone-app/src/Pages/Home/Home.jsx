import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { collection, getDocs } from "firebase/firestore"; // Use getDocs for fetching multiple documents
import { db } from "../../Firebase";
import "./Home.css";
import AddItems from "../../Components/Add item/AddItems";
import Ads from "../../Components/OLX ads/ads";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const [list, setList] = useState([]); // Placeholder list
  const [sellItems, setSellItems] = useState([]); // Sell items fetched from Firestore
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Set placeholders only once when the component mounts
    let _list = [];
    for (let i = 0; i < 16; i++) {
      _list.push(<AddItems key={i} placeholder={true} />);
    }
    setList(_list);

    // Fetch sell items from Firestore
    const fetchSellItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sell_items"));
        const sellItemsData = querySnapshot.docs.map((doc) => doc.data());
        setSellItems(sellItemsData);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching sell items: ", error);
        setLoading(false); 
      }
    };

    fetchSellItems();
  }, []); 

  console.log(sellItems); 

  return (
    <>
      <div className="home-page">
        <Navbar />
        <div className="products-display-container">
          
          <div className="Add-items-container">
            {loading
              ? list 
              : sellItems.map((item, index) => (
                  <AddItems
                    key={index}
                    productName={item.productName}
                    category={item.category}
                    price={item.price}
                    location={item.location}
                    imageUrl={item.imageUrl}
                    placeholder={loading}
                  />
                ))}
          </div>
          <div className="More">
            <button className="More-btn">Load more</button>
          </div>
        </div>
        <Ads />
        <Footer />
      </div>
    </>
  );
}

export default Home;
