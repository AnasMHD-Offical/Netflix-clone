import React , {useState , useEffect} from "react";
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css";
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../../Firebase"

// import sellBg from "./assets/SellBg.jsx"
function Navbar() {
  // const [Login,setLogin] = useState("Login")
  const [logedIn,setLogedIn] = useState(null)
  const [user,setUser] = useState(null)
  const navigate = useNavigate()
  // const [sell,setSell] = useState(true)
    const nav = [
        {id:0, label : "Cars"},
        {id:1, label : "Motorcycles"},
        {id:2, label : "Mobile Phones"},
        {id:3, label : "For Sale: House & Apartments"},
        {id:4, label : "Scooter"},
        {id:5, label : "Commercial & other Vehicles"},
        {id:6, label : "For Rent: Houses & Apartments"},
    ]
    // function handleSell(){
    //   setSell(false)
    // } 
   
    useEffect(()=>{
        const CheckLogedin = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setLogedIn(currentUser)
                setUser(currentUser.email)
            }else{
                setLogedIn(null)
            }
        })

        if(!CheckLogedin){
            navigate('/login')
        }

        return () => CheckLogedin()
    })
    function handleSell(){
       if(user){
        navigate("/sellitems")
       }else{
        navigate("/login")
       }
    }

    const handleLogout = async () =>{
        try {
          await signOut(auth)
          navigate("/login")
        } catch (error) {
          console.log(error.message);
        }
    }
    // console.log(user);
    
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img
            src="https://static.olx.ua/static/olxua/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg"
            alt="OLX logo"
          />
        </div>
        <div className="location">
          <div className="location-search">
            <i className="bx bx-search"></i>
          </div>
          <input
            className="location-input"
            type="search"
            name=""
            placeholder="Search city, area ot loca..."
            id=""
          />
          <button className="location-btn">
            <i className="bx bx-chevron-down"></i>
          </button>
        </div>
        <div className="Product">
          <input
            className="product-input"
            type="search"
            name=""
            id=""
            placeholder="Find Cars,Mobile Phones and more.."
          />
          <button className="product-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>

        <div className="action">
            <select className="Lang" name="" id="">
                <option value="English">ENG</option>
                <option value="Hindi">HIN</option>
                <option value="Malayalam">MAL</option>
            </select>
          { logedIn ? <button className="logout-btn" onClick={handleLogout}>Logout</button> : <Link to="/login" className="login">Login</Link>  }
          <div className="Sell">
            <button className="Sell-btn" onClick={handleSell}>
                <i class="bx bx-plus"></i> 
                <h2 className="Sell-btn-text">SELL</h2>
            </button>
          </div>
        </div>
      </div>
      <div className="category">
            <div className="All-categery">
                <Link to="/" className="all-link">All category</Link>
                <button className="all-btn"><i class='bx bx-chevron-down'></i></button>
            </div>
            <ul className="Nav-list">
                {nav.map((list)=>(
                    <li  key={list.id}><Link to={`/`} className="Nav-link">{list.label}</Link></li>
                ))}
            </ul>
            <p className="user-display">Hello {user}</p>
      </div>

    </>
  );
}

export default Navbar;
