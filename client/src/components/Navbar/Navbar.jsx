import React, {useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import Avatar from "../../components/Avatar/Avatar"
import "./Navbar.css";
import {useSelector, useDispatch} from 'react-redux'
import {setCurrentUser} from '../../actions/currentUser'
import decode from "jwt-decode";
import logo from "../../assets/logo.png"


const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

    useEffect(() => {
      const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    }, [dispatch]);
  return (
    <nav className='main-nav mhs'>
    <div className='Navbar'>
    <Link to="/" className="nav-item nav-logo mhs">
        <img src={logo} alt="This is logo"  width={50}/>
        <h1 className=''>StockZilla</h1>
      </Link>
      {/* <Link to="/" className="nav-item nav-btn">Home</Link> */}
      {User === null ?
        <Link to="/Auth" className='nav-item nav-links mhs'>Log in</Link>:
        <div style={{marginLeft: "auto",display: "flex"}}>
            <Avatar backgroundColor="Blue" px="13px" py="7px" color="white" borderRadius="50%"><Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
        </div>
        
      }
      </div>
    </nav>
  )
}

export default Navbar
