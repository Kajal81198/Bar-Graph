import React from "react";
import Bar from "./bar";
import Label from "./label";


const data = [ {
  id: "1",
  name: "Pencil",
  quentity: 100
  
  
}, {
  id: "2",
  name: "Scale",
  quentity: 400
   
},
{
  id:"3",
  name:"Eraser",
  quentity: 50
  
  
},
{
  id:"4",
  name:"Pen",
  quentity: 175
   
},
{
  id:"5",
  name:"Sharpner",
  quentity: 100
    
},
{
  id:"6",
  name:"Sharpner",
  quentity: 300
}  
];


function App() {
  
  const count= data.length;
  const max = Math.max.apply(Math, data.map(Data=> { 
    return Data.quentity;  
  }))
  //for name 

  const percentValue = 50 * data.length;
  const spaceBetweenBars = 25 * data.length;
  const spaceBetweenBars1 = 400- spaceBetweenBars;
  const finalValue1 = spaceBetweenBars1/percentValue;
  const finalValue2 = (finalValue1 * 5 /*15% into pixcel...convert*/) + 25;

return (
<div>
  <h1 className="heading">School supplies student use</h1>
  <div className="name">
    {data.map(data=>{
      return (<div style={{marginLeft: finalValue2 + 'px'}}>{data.name}</div>);
    })}
  </div>

  <div className="chart">
    <div className="label">
        <Label quentity={max} i={count} />
    </div>
    
    {data.map(data => { 
      return (<Bar key={data.id} name={data.name} quentity={data.quentity} maxData={max} />);
    })}

  </div>

</div>
);
}

export default App;
