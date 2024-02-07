import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useNavigation

  const goToSearchPage = () => {
    navigate('/SearchPage'); // Use navigate instead of navigation.navigate
  };

  return (
    <div className='container-fluid bg-dark text-white d-flex flex-column justify-content-center align-items-center' style={{height:"50vh"}}> 
      <h1 style={{fontSize:"40px"}}>Sama <span style={{color:"orange", textDecoration:"underline", fontSize:"50px"}}>Char</span></h1>
      <h6>WELCOME TO NEWS API , Always ready for you</h6>
      <div style={{width:"300px" }}>
        <button style={{borderRadius:"7px" , border:"2px solid gray" , width:"300px"}} onClick={goToSearchPage}> Search ....</button>
      </div>
    </div>
  );
}

export default Hero;
