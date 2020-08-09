import React from "react";

function bar(props) {
   
  const barHeight = ((props.quentity)/(props.maxData))* 200;

  return (
    <div className="bar" style={{height: barHeight + 'px'}}>
    
      <p>{props.quentity}%</p>
      
    </div> 
  );
}

export default bar;
