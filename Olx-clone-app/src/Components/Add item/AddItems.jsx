import React ,{useState} from 'react'
import "./AddItems.css"
function AddItems(props){
    
    if("placeholder" in props){
        return (
            <>
              <div className="add-items">
                  <div className='poster-placeholder placeholder'></div>
                  <div className='title-placeholder placeholder'></div>
                  <div className='tagline-placeholder placeholder'></div>
                  <div className='footr '>
                      <div className="location-placeholder placeholder"></div>
                      <div className="stamp-placeholder placeholder"></div>
                  </div>
              </div>
            </>
          )
    }
}

export default AddItems