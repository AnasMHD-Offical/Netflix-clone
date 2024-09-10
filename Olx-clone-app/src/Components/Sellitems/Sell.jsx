import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage, db } from "../../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import Navbar from "../Navbar/Navbar";
import "./Sell.css";
function Sell() {
  const navigate = useNavigate()
  const [productName, setProductname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [location,setLocation] =useState("")
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [msg,setMsg] = useState("")

  const handleImageChange = (e) =>{
    setImage(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // used to upload images to the firebase
      const storageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(snapshot.ref);
      // Used to store the image url
      setImageUrl(downloadURL);

      //add listing details along with image URL to firestore
      //add listing details along with image URL to firestore
        await addDoc(collection(db, "sell_items"), {
            productName: productName,
            category: category,
            price: price,
            location: location,
            imageUrl: downloadURL, // Use downloadURL directly here
          });
  

      console.log("Sell-item added successfully");
      setMsg("Item added successfully")
    } catch (error) {
      console.log("Error found unable to add sell item", error.messaage);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="Sell-body">
        <div className="Sell-container">
          <div className="Sell-olx-logo">
            <img
              src="https://static.olx.ua/static/olxua/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg"
              alt=""
            />
          </div>
          <h1 className="Sell-Header">Sell Items</h1>
          <form className="Sell-form" onSubmit={handleSubmit}>
            <input
              className="Sell-name"
              type="text"
              placeholder="Product name"
              name="Product_name"
              value={productName}
              onChange={(e)=>setProductname(e.target.value)}
            />
            <input
              className="Sell-category"
              type="text"
              placeholder="Category"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <input
             className="Sell-price"
             type="text" 
             placeholder="Price"
             name="price"
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
             />
            <input
             className="Sell-price"
             type="text" 
             placeholder="Location"
             name="location"
             value={location}
             onChange={(e)=>setLocation(e.target.value)}
             />
            <label htmlFor="sell-img">Product Image</label>
            <label class="file">
              <input type="file" id="file" aria-label="File browser example" onChange={handleImageChange} />
              <span class="file-custom"></span>
            </label>
            <button className="Sell-submit">Sell Item</button>
            <p className='Go-Sumbit'>{msg}</p>
          </form>
        </div>
      </div>
      <button className='backtohome' onClick={()=>navigate("/")}>Back to Home</button>
    </div>
  );
}

export default Sell;
