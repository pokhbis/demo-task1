import React, { Profiler } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div className=' main-body d-flex justify-content-between'>
           <div className='right-manu col-lg-2 col-md-2 col-2 '>
<p className='side-manu'>Profile</p>
<p className='side-manu'>OverView</p>
<p className='side-manu'>Calender</p>
<p className='side-manu'>Team</p>
<p className='side-manu'>Chat</p>
<p className='side-manu'>Setting</p>


           </div>
           <div className='body'>
<h3>body</h3>
           </div>
           <div className='left-manu' >
<h3>left</h3>
           </div>
           
        </div>
    );
};

export default Home;