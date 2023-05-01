import React from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import logo from "../image/Logo/logo.png"
import logout from "../image/photos/4.png"


const Header = () => {
    const AddAlert = 3
    const AddShopping = 1
    const mystyle =
    {
        position: "absolute", top: "1px", right: "160px", padding: " 1px 6px", borderRadius: "50%", backgroundColor: "red", color: "white", fontSize: "10px"
    }
    const mystyle1 =
    {
        position: "absolute", top: "1px", right: "100px", padding: " 1px 6px", borderRadius: "50%", backgroundColor: "red", color: "white", fontSize: "10px"
    }
    const ss = {
        color: "white", height: "50px", width: "29%"
    }
    const sss = {
        width: "45px", paddingLeft: "10px", height: "38px", backgroundColor: "#292727", borderRadius: "20%", marginRight: "10px"
    }
    const ssss = {
        width: "3%", height: "38px", borderRadius: "20%", marginLeft: "10px"
    }

    return (
        <>
            <nav className='row text-white fixed-top p-2' style={{ backgroundColor: "#3C1773" }}>

                <Link to="/" className="navbar-brand" style={{ width: "21%" }}><img src={logo} height="50" alt="Logo" loading="lazy" /></Link>

                <Link to="/" className=' h4 m-0 p-3' style={ss}>Go To Marketpage</Link>

                <Link to="/" className="form-group has-search" style={{ width: "30%" }} ><input type="text" className="form-control" /></Link>

                <Link to="/" style={{ width: "7%" }}><button type="submit" className='btn btn-dark'>Search</button></Link>

                <Link to="/" className='nav-link' style={sss}>
                    <AddAlertIcon />
                    <p style={mystyle} >{AddAlert}</p>
                </Link>

                <Link to="/" className='nav-link' style={sss}>
                    <AddShoppingCartIcon />
                    <p style={mystyle1} >{AddShopping}</p>
                </Link>

                <Link to="/" className='nav-link ' style={ssss}><img src={logout} alt="logout" loading="lazy" style={{ borderRadius: "20%", height: "38px" }} /></Link>

            </nav>

        </>

    )
}

export default Header