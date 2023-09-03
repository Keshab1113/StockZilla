import React,{useEffect, useState} from "react";
import axios from 'axios';
import "./About.css";

const About = () => {
  const [myData, setMyData]= useState([]);


let API = "https://api.twelvedata.com/time_series?symbol=INFY:NSE&interval=1min&apikey=3b8d7fdb2ea64e07b2994e6e12a73eff";
  const fetchApiData = async(url)=>{
    try {
        const res = await axios.get(url);
        setMyData( res.data);
        console.log(myData);
      
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    fetchApiData(API);
  },[]);
  return(
    <>
        <h1>Open Your Console</h1>
        <h1>Company Name : {myData?myData.meta.symbol:<><p>Loading...</p></>}</h1>
        <p>{myData?<h1>{myData.values[0].open}</h1>:<></>}</p>
    </>
  );
};

export default About;