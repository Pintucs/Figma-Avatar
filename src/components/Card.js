import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logout from "../image/photos/4.png"
import Rating from '@mui/material/Rating';
import Wishlist from "./Wishlist"
import IosShareIcon from '@mui/icons-material/IosShare';
import data from "./Data"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Card = () => {

    const [value, setValue] = useState(4.7);
    const [view] = useState(1000);
    const [items, setItems] = useState(data)
    const a={
        float:"left",position:"absolute",backgroundColor: "#254BC9",borderRadius: "10%",right: "5px",top:"5px"
    }
  
    return (
        <>
            {items.slice(0, 12).map((element, index) => {
                const { title, image, prize } = element
                return (
                    <div className="float-md-start col-3 p-1" key={index} >
                        <div className='row'>
                            < div className='col-sm'>

                                <div className='card border border-white p-0 m-0' >
                                    <div className='p-0 m-0'>

                                        <div style={{float:"left"}} >
                                            <img src={image} className="card-img-top" alt="..." />
                                        </div>

                                        <div style={a}>
                                            <Link to="/" className='btn' style={{padding: " 1px 4px",color:"white"}}>
                                                <AddShoppingCartIcon /><b>ADD</b>
                                            </Link>
                                        </div>

                                    </div>


                                    <div className="text-left ms-1 ">
                                        <h5 className='m-0'>{title}</h5>

                                        <p className='row m-0 p-0' style={{ color: "#6A6A6A", fontSize: "small" }} >
                                            <p className='col-3 m-0 p-0'><Rating value={value} onChange={(event, newValue) => { setValue(newValue) }} style={{ fontSize: "small" }} /></p>
                                            <p className='col-7 m-0 p-0'>{value} & {view}Likes </p>
                                            <p className='col-2 m-0 p-0'><Wishlist /></p>
                                        </p>

                                        <p className='row m-0' style={{ color: "#6A6A6A", fontSize: "small" }}>
                                            <span className='col-1 p-0 m-0'><img src={logout} height="22" alt="logout" style={{ borderRadius: "50%" }} /></span>
                                            <span className='col'>Avatar Jie</span>
                                        </p>

                                        <h4 className='m-0 p-0'><span style={{ fontSize: "small" }}>$</span>{prize}</h4>
                                        <p className='row m-0 p-0' >
                                            <p className='col-3 m-0 p-0 ' style={{ backgroundColor: "#3CD4F5", width: "20px", height: "20px", borderRadius: "50%" }}></p>
                                            <p className='col-8 m-0' style={{ fontSize: "small" }}><b>PC Only</b></p>
                                        </p>
                                        <p className='row m-0'>
                                            <p className='col-9 m-0 p-0' style={{ fontSize: "small", fontFamily: 'Inter' }}> <b>Auto upload service ready, you can use this avatar within 24 hours.</b></p>
                                            <p className='col-3 m-0'><Link to="/" style={{ color: "#6A6A6A", marginLeft: "12px" }}><IosShareIcon /></Link></p>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div >

                    </div >

                )
            }
            )
            }
        </>
    )
}

export default Card