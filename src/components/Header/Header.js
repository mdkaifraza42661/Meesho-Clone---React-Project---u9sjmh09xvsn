import React, {useState} from 'react'
import img from './Images/k_Meeso_Logo.png';
import gpy from './Images/kgpay.png'
import {AiOutlineUser} from "react-icons/ai";
import './Header.css'
import {BiCart} from "react-icons/bi";
import MainHeader from '../MainHeader/MainHeader';
import {ImMobile, ImSearch} from "react-icons/im";

function Header() {
    const [isDownloadHover, DownloadHovering] = useState("false")
    function DownloadMouseOver() {
        DownloadHovering(true)
    }
    function DownloadMouseLeave() {
        DownloadHovering(false)
    }
    return (
        <>
            <div className="container-fluid border2 ">
                <div className="container pt-md-2 ">
                    <div className="row align-items-center">
                        <div className="col-6 ps-0 ">
                            <div className="row">
                                <div className="col-4 ">
                                    <a href="#"> <img className='img-fluid Size-Logo' src={img} alt="Meesho logo" /></a>
                                </div>
                                <div className="col-7 search-header-icon border rounded border-secondary">
                                    <ImSearch />
                                    <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' className="headerInputStyle py-2 ps-2 w-751 h-100" />
                                </div>
                            </div>


                        </div>
                        <div className="col-6 ">
                            <div className="row">
                                <div className="col-4 d-flex align-items-center justify-content-end borderHeadr position-relative1" onMouseEnter={DownloadMouseOver} onMouseLeave={DownloadMouseLeave}>
                                    <div className="Download-App pe-2 d-flex align-items-center ">  <ImMobile /><a href="#" className=' Download-App Download-Appboder text-decoration-none    ps-2 font-weightNormal'>Download App</a>
                                    </div>
                                    <div>

                                    </div>
                                    {
                                        isDownloadHover && (
                                            <>
                                                <div className='position-abolute1'>
                                                    Download From a
                                                    <img className='img-fluid' src={gpy} alt="" />
                                                    <img className='img-fluid' src={gpy} alt="" />
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="col-4 d-flex align-items-center justify-content-center borderHeadr">
                                    <div className="BecomeSuplier ">

                                        <a href="#" className='font-weightNormal text-decoration-none'>Become a Supplier</a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-6 ">
                                            <a href="#" className='d-flex justify-content-center align-items-center flex-column font-weightNormal text-decoration-none Download-App ' >

                                                <div><AiOutlineUser />

                                                </div>
                                                <div className='font-weightNormal Download-App Download-Appboder' >Profile</div></a>

                                        </div>
                                        <div className="col-6 ">
                                            <a href="#" className='d-flex justify-content-center align-items-center flex-column font-weightNormal text-decoration-none'><div><BiCart /></div>
                                                <div>Cart</div></a>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <MainHeader />
        </>

    )
}

export default Header