import React from 'react'
import './Sidebar.css'
import drone from './drone.jpeg'
import drtwo from './drtwo.jpg'

function Sidebar() {
    return (
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto sidebar col-md-3  ">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-black min-vh-100">
                   
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drone} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Rajesh M <span className="time">1:40 PM</span></h5>
            <p className="message">What time you get Free ?<span className="badge messageCount rounded-pill bg-success">1</span></p>
        </div>
    </div>
        
                               </div>
                        </li>
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drtwo} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Shilpa M <span className="time">1:40 PM</span></h5>
            <p className="message">Did You mean this medi...<span className="badge messageCount rounded-pill bg-success">1</span></p>
        </div>
    </div>
        
                               </div>
                        </li>
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drone} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Rajesh M <span className="time timeYesterday text-secondary">Yesterday</span></h5>
            <p className="message ">What time you get Free ? </p>
        </div>
    </div>
        
                               </div>
                        </li>
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drone} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Rajesh M <span className="time timeYesterday ">Yesterday</span></h5>
            <p className="message">What time you get Free ?<span className="badge messageCount rounded-pill bg-success">1</span></p>
        </div>
    </div>
        
                               </div>
                        </li>
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drone} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Rajesh M <span className="time timeDate text-secondary">17/07/2021</span></h5>
            <p className="message">What time you get Free ?</p>
        </div>
    </div>
        
                               </div>
                        </li>
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drone} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Rajesh M <span className="time timeDate text-secondary">15/07/2021</span></h5>
            <p className="message">What time you get Free ?</p>
        </div>
    </div>
        
                               </div>
                        </li>
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drone} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Rajesh M <span className="time timeDate text-secondary">16/07/2021</span></h5>
            <p className="message">What time you get Free ?</p>
        </div>
    </div>
        
                               </div>
                        </li>
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drone} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Rajesh M <span className="time timeDate text-secondary">16/07/2021</span></h5>
            <p className="message">What time you get Free ?</p>
        </div>
    </div>
        
                               </div>
                        </li>
                        <li>
                            <div  className=" px-0 align-middle">
                           
    <div className="d-flex contact">
    <div className="col-8 col-md-8 mx-auto logo">
          <img src={drone} className="pp"/> 
          
        </div> 
        <div><h5 className="name">Dr. Rajesh M <span className="time timeDate text-secondary">16/07/2021</span></h5>
            <p className="message">What time you get Free ?</p>
        </div>
    </div>
        
                               </div>
                        </li>
                    </ul>
                    <hr />
                 
                </div>
            </div>
            <section className="rightSide">
            <nav class="navbar chatNameProfile navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand chatprofilename" href="#">Dr. Shilpa M</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><i class="far fa-video"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"><i class="far fa-phone-alt"></i></a>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>
<p className="hellouser rounded">Hello <span className="messageTime">1:41 PM</span></p>
<p className="helloclient rounded">Hello <span className="messageTime">1:41 PM</span></p>

<p className="audiomissed rounded ">Audio call invite <i class="far miss fa-phone-alt"></i><span className="messageTime">1:41 PM</span><p className="end bg-secondary">You Missed</p></p>
<p className="videomissed rounded ">Video call invite <i class="far miss fa-video"></i><span className="messageTime">1:52 PM</span><p className="end bg-secondary">Ended in 4h 52mins 03secs</p></p>
<p className="drmissed rounded ">Audio call invite <i class="far miss fa-phone-alt"></i><span className="messageTime">8:45 PM</span><p className="end bg-secondary">Missed by Dr.</p></p>
{/*  */}

<div className="d-block">
<div className="text-center mediaIcon">
<ul className="list-unstyled camera">
    <li className="my-text text-center cameraicon p-4"><i class="d-block  media  fas fa-camera"></i></li>
    <li className="my-text text-center pIcon p-4"><i class="d-block  media fas fa-prescription"></i></li>
    <li className="my-text text-center fileIcon p-4"><i class="d-block  media fas fa-file"></i></li>
    <li className="my-text text-center folderIcon p-4"><i class="d-block media  fas fa-folder"></i></li>
    
</ul>
<ul className="list-unstyled mediaName text-center d-flex">
<li className="p-2">Camera</li>
    <li className=" text-center p-2">Prescription</li>
    <li className="  p-2">Lab Report</li>
    <li className=" text-center p-2">Gallery</li>
</ul>
</div>
</div>
{/*  */}
<nav class="navbar msgbox  navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      
    <a class="navbar-brand input" href="#"><input className="inutTag rounded" type="text" placeholder="Type a Message..." /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><i class="fas fa-paperclip"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"><i class="fas fa-paper-plane"></i></a>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>
            </section>      
               
            
        </div>
    </div>
    )
}

export default Sidebar
