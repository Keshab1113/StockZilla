import React,{useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import search from "../../assets/search-solid.svg";
import axios from 'axios';
import "./HomeMainbar.css";

const HomeMainbar = () => {

  const [myData, setMyData]= useState([]);


// let API = "https://api.twelvedata.com/time_series?symbol=INFY:NSE&interval=1min&apikey=3b8d7fdb2ea64e07b2994e6e12a73eff";
//   const fetchApiData = async(url)=>{
//     try {
//         const res = await axios.get(url);
//         setMyData( res.data);
//         console.log(myData);
      
//     } catch (error) {
//         console.log(error);
//     }
//   }
//   useEffect(()=>{
//     fetchApiData(API);
//   },[]);

  const user = 1;
  const navigate = useNavigate();
  const redirect = () => {
    if (user == null) {
      alert("Login or Signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  const location = useLocation();
  return (
    <>
      <div className="main-bar">
        <h1>StockZilla</h1>
        <h3>The Modern Stock Screener that helps you pick better stocks.</h3>
        <div className="main-bar-header">
          <form>
            <input type="text" placeholder="Search Stocks & Company here..." />
            <img
              src={search}
              alt="search"
              srcSet=""
              width="18"
              className="search-icon"
            />
          </form>
        </div>
      </div>
      <div className="dashboard">
        <h1>Market Dashboard</h1>
        <h3>Track stock market indices and it's companies</h3>
        <div className="allniftydata">
      <div className="boxes">
        <div className="box">
          <h3>NIFTY</h3>
          <h3>19768.76</h3>
          <h3>56.87(23.87%)</h3>
        </div>
        <div className="box">
          <h3>SENSEX</h3>
          <h3>19768.76</h3>
          <h3>56.87(23.87%)</h3>
        </div>
        <div className="box">
        <h3>Gold</h3>
          <h3>19768.76</h3>
          <h3>56.87(23.87%)</h3>
        </div>
        <div className="box">
        <h3>Silver</h3>
          <h3>19768.76</h3>
          <h3>56.87(23.87%)</h3>
        </div>
        <div className="box">
        <h3>USD/INR</h3>
          <h3>19768.76</h3>
          <h3>56.87(23.87%)</h3>
        </div>
      </div>
        </div>
      </div>
      <div className="watchlist">
        <h1>WatchList</h1>
        <h3>Learn about Stock market updates today - Peek into Gainers, Losers, 52 Week Highs, 52 week Lows and more.</h3>
        <div className="watchlistdata">
          <div className="namewatch">
            <h3>Market Movers</h3>
            <select name="values" id="sortvalues">
            <option value="Low to high">Select for sort</option>
            <option value="Low to high">Low to high</option>
            <option value="Low to high">High to low</option>
            <option value="Low to high">52 Weeks low</option>
            <option value="Low to high">52 Weeks high</option>
            </select>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>Company</h3></div>
            <div className="price subhedmini"><h3>Price</h3></div>
            <div className="low_price subhedmini"><h3>Today Low Price</h3></div>
            <div className="high_price subhedmini"><h3>Today Hign Price</h3></div>
            <div className="52weeklow subhedmini"><h3>52 Week Low Price</h3></div>
            <div className="52weekhigh subhedmini"><h3>52days Hign Price</h3></div>
          </div>
          
          {/* <div className="subhed">
          <div className="campany subhedmini"><h3>{myData?myData.meta:<><p>Loading...</p></>}</h3></div>
            <div className="price subhedmini">{myData?<h3>{myData.values[0].open}</h3>:<></>}</div>
            <div className="low_price subhedmini"><h3>{myData?<h3>{myData.values[0].low}</h3>:<></>}</h3></div>
            <div className="high_price subhedmini"><h3>{myData?<h3>{myData.values[0].high}</h3>:<></>}</h3></div> 
            <div className="52weeklow subhedmini"><h3>400</h3></div>
            <div className="52weekhigh subhedmini"><h3>500</h3></div>
          </div> */}
          
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>Zoomato</h3></div>
            <div className="price subhedmini"><h3>785</h3></div>
            <div className="low_price subhedmini"><h3>620.85</h3></div>
            <div className="high_price subhedmini"><h3>790.56</h3></div>
            <div className="52weeklow subhedmini"><h3>500.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>80.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          <div className="subhed">
            <div className="campany subhedmini"><h3>ITC</h3></div>
            <div className="price subhedmini"><h3>256</h3></div>
            <div className="low_price subhedmini"><h3>200</h3></div>
            <div className="high_price subhedmini"><h3>300</h3></div>
            <div className="52weeklow subhedmini"><h3>150.65</h3></div>
            <div className="52weekhigh subhedmini"><h3>300.45</h3></div>
          </div>
          
        </div>
      </div>
      <section className="footer">
    <div className="box-container">
        <div className="boxe">
            <h3>quick links</h3>
            <Link to="/about"className="an">Home</Link>
            <Link to="/about"className="an">About</Link>
      <Link to="/contact"className="an">Contact</Link>
        </div>
        <div className="boxe">
            <h3>follow me</h3>
            <Link to="#" className="an">facebook</Link>
            <Link to="#" className="an">instagram</Link>
            <Link to="#" className="an">twitter</Link>
            <Link to="#" className="an">linkedin</Link>
        </div>
        <div className="boxe">
            <h3>about this page</h3>
            <p>this is a web page of stock market analysis, where you can see all the BSE & NSE stocks price.</p>
        </div>
    </div>
    <h1 className="credit"> created by <span> mr. keshab das </span>@2023 || a MERN-stack web developer </h1>
</section>
    </>
  );
};

export default HomeMainbar;
