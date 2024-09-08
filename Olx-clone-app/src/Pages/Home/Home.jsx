import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import AddItems from "../../Components/Add item/AddItems";
function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      let _list = [];
      for (let i = 0; i < 12; i++) {
        _list.push(<AddItems placeholder={true} />);
      }
      setList(_list)
    }
  }, []);
  return (
    <>
      <div className="home-page">
        <Navbar />
        <div className="products-display-container">
           <p className="Add-items-container">{list}</p>
            <div className="More">
                <button className="More-btn">Load more</button>
            </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
