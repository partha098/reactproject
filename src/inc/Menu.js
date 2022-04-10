import {Link} from 'react-router-dom';
function Menu(){
    return(
        <>
       
               <nav className="sidenav shadow-right sidenav-light">
                   <div className="sidenav-menu">
                       
                         
                           
                          
                           <Link className="nav-link" to="/">
                               <div className="nav-link-icon"><i data-feather="filter"></i></div>
                               Dashboard
                           </Link>

                           <Link className="nav-link" to="/add-category">
                               <div className="nav-link-icon"><i data-feather="filter"></i></div>
                               Add Category
                           </Link>
                           
                           <Link className="nav-link" to="/list-category">
                               <div className="nav-link-icon"><i data-feather="filter"></i></div>
                               List Category
                           </Link>
                       </div>
                   
                   
                   
               </nav>
           
           </>
    )
}

export default Menu;