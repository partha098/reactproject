import { useState,useEffect } from 'react';
import Menu from '../inc/Menu';

import axios from 'axios';

function Addproduct(){

    let [cats,setCats]=useState([]);
async function getcat(){
    var resp=await axios.get("http://localhost/react_p/getcat.php");
   setCats(resp.data);
}
  useEffect(()=>{
getcat();
  },[]);

    let [cid,setCid]=useState("");
    let [pname,setPname]=useState("");
    let [pimg,setPimg]=useState("");
    let [pprice,setPprice]=useState("");
    let [msg,setMsg]=useState("");
    return(
<>
<nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
           
           <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle"><i data-feather="menu"></i></button>
       
           <a className="navbar-brand pe-3 ps-4 ps-lg-2" href="index.html">SB Admin Pro</a>
          
           <form className="form-inline me-auto d-none d-lg-block me-3">
               <div className="input-group input-group-joined input-group-solid">
                   <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
                   <div className="input-group-text"><i data-feather="search"></i></div>
               </div>
           </form>
          
           <ul className="navbar-nav align-items-center ms-auto">
             
               <li className="nav-item dropdown no-caret d-none d-md-block me-3">
                   <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <div className="fw-500">Documentation</div>
                       <i className="fas fa-chevron-right dropdown-arrow"></i>
                   </a>
                   <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                       <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro" target="_blank">
                           <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="book"></i></div>
                           <div>
                               <div className="small text-gray-500">Documentation</div>
                               Usage instructions and reference
                           </div>
                       </a>
                       <div className="dropdown-divider m-0"></div>
                       <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/components" target="_blank">
                           <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="code"></i></div>
                           <div>
                               <div className="small text-gray-500">Components</div>
                               Code snippets and reference
                           </div>
                       </a>
                       <div className="dropdown-divider m-0"></div>
                       <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/changelog" target="_blank">
                           <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="file-text"></i></div>
                           <div>
                               <div className="small text-gray-500">Changelog</div>
                               Updates and changes
                           </div>
                       </a>
                   </div>
               </li>
              
               <li className="nav-item dropdown no-caret me-3 d-lg-none">
                   <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="search"></i></a>
                   
                   <div className="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
                       <form className="form-inline me-auto w-100">
                           <div className="input-group input-group-joined input-group-solid">
                               <input className="form-control pe-0" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                               <div className="input-group-text"><i data-feather="search"></i></div>
                           </div>
                       </form>
                   </div>
               </li>
              
               <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                   <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="bell"></i></a>
                   <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                       <h6 className="dropdown-header dropdown-notifications-header">
                           <i className="me-2" data-feather="bell"></i>
                           Alerts Center
                       </h6>
                       
                       <a className="dropdown-item dropdown-notifications-item" href="#!">
                           <div className="dropdown-notifications-item-icon bg-warning"><i data-feather="activity"></i></div>
                           <div className="dropdown-notifications-item-content">
                               <div className="dropdown-notifications-item-content-details">December 29, 2021</div>
                               <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                           </div>
                       </a>
                      
                       <a className="dropdown-item dropdown-notifications-item" href="#!">
                           <div className="dropdown-notifications-item-icon bg-info"><i data-feather="bar-chart"></i></div>
                           <div className="dropdown-notifications-item-content">
                               <div className="dropdown-notifications-item-content-details">December 22, 2021</div>
                               <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                           </div>
                       </a>
                    
                       <a className="dropdown-item dropdown-notifications-item" href="#!">
                           <div className="dropdown-notifications-item-icon bg-danger"><i className="fas fa-exclamation-triangle"></i></div>
                           <div className="dropdown-notifications-item-content">
                               <div className="dropdown-notifications-item-content-details">December 8, 2021</div>
                               <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                           </div>
                       </a>
                       
                       <a className="dropdown-item dropdown-notifications-item" href="#!">
                           <div className="dropdown-notifications-item-icon bg-success"><i data-feather="user-plus"></i></div>
                           <div className="dropdown-notifications-item-content">
                               <div className="dropdown-notifications-item-content-details">December 2, 2021</div>
                               <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                           </div>
                       </a>
                       <a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                   </div>
               </li>
               
               <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                   <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="mail"></i></a>
                   <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                       <h6 className="dropdown-header dropdown-notifications-header">
                           <i className="me-2" data-feather="mail"></i>
                           Message Center
                       </h6>
                       
                       <a className="dropdown-item dropdown-notifications-item" href="#!">
                           <img className="dropdown-notifications-item-img" src="assets/img/illustrations/profiles/profile-2.png" />
                           <div className="dropdown-notifications-item-content">
                               <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                               <div className="dropdown-notifications-item-content-details">Thomas Wilcox · 58m</div>
                           </div>
                       </a>
                       
                       <a className="dropdown-item dropdown-notifications-item" href="#!">
                           <img className="dropdown-notifications-item-img" src="assets/img/illustrations/profiles/profile-3.png" />
                           <div className="dropdown-notifications-item-content">
                               <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                               <div className="dropdown-notifications-item-content-details">Emily Fowler · 2d</div>
                           </div>
                       </a>
                      
                       <a className="dropdown-item dropdown-notifications-item" href="#!">
                           <img className="dropdown-notifications-item-img" src="assets/img/illustrations/profiles/profile-4.png" />
                           <div className="dropdown-notifications-item-content">
                               <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                               <div className="dropdown-notifications-item-content-details">Marshall Rosencrantz · 3d</div>
                           </div>
                       </a>
                    
                       <a className="dropdown-item dropdown-notifications-item" href="#!">
                           <img className="dropdown-notifications-item-img" src="assets/img/illustrations/profiles/profile-5.png" />
                           <div className="dropdown-notifications-item-content">
                               <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                               <div className="dropdown-notifications-item-content-details">Colby Newton · 3d</div>
                           </div>
                       </a>
                       
                       <a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
                   </div>
               </li>
              
               <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                   <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></a>
                   <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                       <h6 className="dropdown-header d-flex align-items-center">
                           <img className="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png" />
                           <div className="dropdown-user-details">
                               <div className="dropdown-user-details-name">Valerie Luna</div>
                               <div className="dropdown-user-details-email">vluna@aol.com</div>
                           </div>
                       </h6>
                       <div className="dropdown-divider"></div>
                       <a className="dropdown-item" href="#!">
                           <div className="dropdown-item-icon"><i data-feather="settings"></i></div>
                           Account
                       </a>
                       <a className="dropdown-item" href="#!">
                           <div className="dropdown-item-icon"><i data-feather="log-out"></i></div>
                           Logout
                       </a>
                   </div>
               </li>
           </ul>
       </nav>
       <div id="layoutSidenav">
           <div id="layoutSidenav_nav">



       <Menu/>
       </div>
           <div id="layoutSidenav_content">
               <main>
                   <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                       <div className="container-xl px-4">
                           <div className="page-header-content pt-4">
                               <div className="row align-items-center justify-content-between">
                                   <div className="col-auto mt-4">
                                       <h1 className="page-header-title">
                                           <div className="page-header-icon"><i data-feather="filter"></i></div>
                                           Add Category
                                       </h1>
                                       
                                   </div>
                               </div>
                           </div>
                       </div>
                   </header>
                   
                   <div className="container-xl px-4 mt-n10">
                       <div className="card mb-4">
                           <div className="card-header">Extended DataTables</div>
                           <div className="card-body">

{msg?
  <div className="alert alert-success">
  <strong>Success!</strong> {msg}
</div>:''}


<p>Category</p>
<p><select onChange={(ev)=>{
    setCid(ev.target.value);
}}>
    <option>-Select Category-</option>
    {cats.map((c)=>
    <option key={c.cat_id} value={c.cat_id}>{c.cname}</option>
    )}
    </select></p>


 <p>Product name</p>
<p><input type="text" onChange={(ev)=>{
setPname(ev.target.value);
}} /></p>

<p>Product Price</p>
<p><input type="text" onChange={(ev)=>{
setPprice(ev.target.value);
}} /></p>


<p>Product Image</p>
<p><input type="file" onChange={(ev)=>{
setPimg(ev.target.files[0]);
}} /></p>

<p><input type="button" value="Add Product" className="btn btn-primary"
onClick={async ()=>{
    var fd=new FormData();
    fd.append("cid",cid);
    fd.append("pname",pname);
    fd.append("pprice",pprice);
    fd.append("pimg",pimg);


    var resp=await axios.post("http://localhost/react_p/addproduct.php",fd);
    console.log(resp.data);
    if(resp.data.msg){
        setMsg(resp.data.msg);
    }

}}
/></p>



                              
                           </div>
                       </div>
                      
                   </div>
               </main>
               <footer className="footer-admin mt-auto footer-light">
                   <div className="container-xl px-4">
                       <div className="row">
                           <div className="col-md-6 small">Copyright &copy; Your Website 2021</div>
                           <div className="col-md-6 text-md-end small">
                               <a href="#!">Privacy Policy</a>
                               &middot;
                               <a href="#!">Terms &amp; Conditions</a>
                           </div>
                       </div>
                   </div>
               </footer>
           </div>
       </div>
</>

    );
}
export default Addproduct;