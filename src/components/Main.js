import React, { useState } from 'react'
import Header from './Header'
import Card from './Card'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { Link } from 'react-router-dom'
import AllCard from './AllCard'

const Main = () => {
    const [fs, setFs] = useState(true)
    const s1 = "<"
    const s2 = ">"


    return (
        <>

            <Header />
            <div className="row m-0 position-relative " style={{ top: "80px" }}  >

                <div style={{ float: "left", width: "20%" }}>
                    <div className='row'>
                        <b>Caterory</b>
                        <b style={{ fontSize: "smaller", marginLeft: "10px" }} >Full Avatar</b>
                        <b style={{ fontSize: "smaller", marginLeft: "10px" }}>Others</b>
                    </div>
                    <div className='row'>
                        <b>Contents</b>
                        <div style={{ fontSize: "smaller", marginLeft: "10px" }}>
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> VRChat(Quest)</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> VRChat(PCVR)</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> Others</b>
                        </div>
                    </div>
                    <b>Prize</b>
                    <div className='row'>
                        <div style={{ fontSize: "smaller", marginLeft: "10px" }}>
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> Under $10</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> $10 to $20</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> $20 to $30</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> $30 to $40</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> $40 to $50</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> $50 to $60</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> $60 to $70</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> $70 & Above</b>
                        </div>
                    </div>
                    <div className='row'>
                        <b>Polygon Amount</b>
                        <div style={{ fontSize: "smaller", marginLeft: "10px" }}>
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> Under Δ7,500</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}>Δ7,500 to Δ10,000</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}>Δ10,000 to Δ15,000</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> Δ15,000 to Δ20,000</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> Δ20,000 to Δ32,000</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> Δ32,000 to Δ70,000</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> Δ70,000 & Above</b>
                        </div>
                    </div>

                    <div className='row'>
                        <b>Auto Upload Support</b>
                        <div style={{ fontSize: "smaller", marginLeft: "10px" }}>
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}>Supported</b>
                            <br />
                            <input type="checkbox" />
                            <b style={{ marginLeft: "5px" }}> Unsupported</b>
                        </div>

                    </div>
                </div>

                <div style={{ float: "left", width: "80%" }}  >
                    <div className="row p-1">
                        <div className='col-2'><h4>All Item</h4></div>
                        <div className='col-8'></div>
                        <div className='col-2'>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Sort by feature</option>
                                    <option>Prize: Low to High</option>
                                    <option>Prize: High to Low</option>
                                    <option>costomer Review</option>
                                    <option>new</option>
                                    <option>Polygon: Low to High</option>
                                    <option>Polygon: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Scrollbars>
                        {fs ? <Card /> : <AllCard />}
                        <div className="text-center p-3">
                            <h2 style={{ width: "42%", float: "left" }}></h2>
                            <h2 style={{ width: "5%", float: "left", fontSize: "30px" }}>{s1}</h2>
                            <Link to="/" className=" h2 btn btn-light active m-2 p-0" style={{ width: "2%", float: "left" }} onClick={(() => setFs(true))}><b>1</b></Link>
                            <Link to="" className=" h2 btn btn-light m-2 p-0" style={{ width: "2%", float: "left" }} onClick={(() => setFs(false))}><b>2</b></Link>
                            <h2 style={{ width: "3%", float: "left", fontSize: "30px" }}>{s2}</h2>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </>

    )
}

export default Main