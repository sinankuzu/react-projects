import React from 'react'

const Cards = ({myData}) => {
  return (

    
    <div className="container">
    
      <div className="grid-container">
        
          {myData.map((eleman) => {
            return (
              <div className="my-card">
                <div className="city">{eleman.title}</div>
                <div className="image">
                  <img src={eleman.image} alt="" />
                </div>
                <div className="text">{eleman.desc}</div>
              </div>
            );
          })}
        
      </div>
    </div>
  );
}

export default Cards