import React ,{useEffect, useState} from 'react'
import "./AddItems.css"
function AddItems({productName,category,imageUrl,price,placeholder,location}){
    const [loding,setloding] =useState(false)
    const [classdefine,setClassdefine] =useState("")
    useEffect(()=>{
        if(placeholder){
            setClassdefine("placeholder")
        }else{
            setClassdefine(null)
        }
    },[placeholder])
    if("placeholder"){
        return (
            <>
              <div className="add-items">
                  <div className={`poster-placeholder ${classdefine}`}>
                    <img src={imageUrl} alt="" />
                  </div>
                  <div className={`price-placeholder ${classdefine}`}>₹ {price}</div>
                  <div className={`product-placeholder ${classdefine}`}>{productName}</div>
                  <div className='footr '>
                      <div className={`location-placeholder ${classdefine}`}>{location}</div>
                      <div className={`category-placeholder ${classdefine}`}>{category}</div>
                  </div>
              </div>
            </>
          )
    }
}

export default AddItems