import React from "react";

function label(props){

  const minPixcel = 150/(props.quentity);//for gap between each lable
  const labelHeight = (props.quentity/4)* minPixcel;
  
return <div>

  <p style={{height :labelHeight}}>{(props.quentity/4)*((props.i)-2)}</p>
  <p style={{height :labelHeight}}>{(props.quentity/4)*((props.i)-3)}</p>
  <p style={{height :labelHeight}}>{(props.quentity/4)*((props.i)-4)}</p>
  <p style={{height :labelHeight}}>{(props.quentity/4)*((props.i)-5)}</p>
  <p >0</p>

</div>;

}

export default label;