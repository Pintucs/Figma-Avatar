import React from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import logo from "../image/Logo/logo.png"
import logout from "../image/photos/4.png"


const Header = () => {
    const AddAlert = 3
    const AddShopping = 5
    const counter =
    {
        position: "relative", top: "-50px", padding: " 1px 6px", borderRadius: "50%",
        backgroundColor: "red", color: "white", fontSize: "15px", left: "25px"
    }
    return (
        <>
            <nav className='row text-white fixed-top p-0' style={{ backgroundColor: "#3C1773" }}>
                <div className='p-0 m-2'></div>
                <div className='col-3'>
                    <Link to="/" className="navbar-brand"><img src={logo} height="60px" alt="Logo" loading="lazy" /></Link>
                    </div>

                <div className='col-3 h3 p-0'>
                    <Link to="/" className='m-0 p-3' style={{ color: "white"}}>Go To Marketpage</Link>
                    </div>

                <div className='col-4'>
                    <div style={{ width: "1%", position: "absolute", marginLeft: "29%" }}>
                        <span className="fa fa-search form-control-feedback p-2 " style={{ color: "#6A6A6A", fontSize: "20px" }}></span>
                    </div>

                    <div style={{ float: "left", width: "100%" }} >
                        <input type="text" className="form-control" />
                    </div>

                </div>

                <div className='col-2'>
                    <span className='row'>
                        <span className='col-2'>
                            <Link to="/" className='nav-link'>
                                <AddAlertIcon style={{ borderRadius: "20%", backgroundColor: "black", float: "left", fontSize: "230%" }} />
                                <i style={counter}>{AddAlert}</i>

                            </Link>
                        </span>
                        <span className='col-1 p-0 m-1'></span>
                        <span className='col-2'>
                            <Link to="/" className='nav-link'>
                                <AddShoppingCartIcon style={{ borderRadius: "20%", backgroundColor: "black", fontSize: "230%" }} />
                                <i style={counter}>{AddShopping}</i>
                            </Link>
                        </span>
                        <span className='col-1 p-0 m-1'></span>
                        <span className='col-2'>
                            <Link to="https://onlineresto.netlify.app" className='nav-link '>
                                <img src={logout} alt="logout" loading="lazy" style={{ borderRadius: "20%", height: "38px" }} />
                            </Link>
                        </span>
                    </span>
                </div>
            </nav>

        </>

    )
}

export default Header