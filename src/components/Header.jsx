import React from "react";
import { Link } from "react-router-dom";

export default (props)=>{

    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">MyCommerce</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}