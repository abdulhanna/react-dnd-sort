 import React,{useState} from "react";
 const  ListComponent = ({item})=>{
    // console.log(text)
 const border =  "2px dashed gray" ;
    return <>
     <div style={{padding:'4px',border}}>
     <p style={{color:"#4f4e4a"}}>{JSON.stringify(item)}</p>
    
     </div>
    </>
 }

 export default ListComponent