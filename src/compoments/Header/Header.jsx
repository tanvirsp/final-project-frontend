import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import avater from "../../assets/images/avater.jpg"
import UserStore from '../../store/UserStore';
import { useState } from 'react';
import logo from "../../assets/images/logo.png"
import toast from 'react-hot-toast';

const Header = () => {
    const {Profile, isLogin, ProfileRequest, LogoutRequest} = UserStore();
  
    const navigate = useNavigate();

    useState( ()=>{
      (async()=>{
        isLogin() && await ProfileRequest() ;
      })()

  } ,[isLogin()]);

  const handleLogout = async()=>{
      const result = await LogoutRequest();
      if(result.status ==="success"){
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
        toast.success("Logout Successfully");
      }
  }



    return (
        <Navbar collapseOnSelect expand="lg" className='sticky-top bg-white' >
        <Container>
          <Link to="/"> <img className='logo' src={logo} alt="" /> </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavLink className="nav-link" to={"/"}>Home</NavLink>
              <NavLink className="nav-link"  to={"/products"}>Products</NavLink>
              
              {
                isLogin() ? <> 
                  <button onClick={handleLogout} className='btn btn-success'>Log Out</button>
                  <Link to={"/profile"} > <img className='avater' src= { Profile?.picture ? Profile["picture"]  : avater}  alt="Avater" /> </Link> 
                </>  :
                <button onClick={() =>navigate("/login")} className='btn btn-success'>Log In</button>
              }
          

          
              
            </Nav>
        
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
    );
};

export default Header;