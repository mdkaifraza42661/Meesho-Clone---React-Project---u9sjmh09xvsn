import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import adv from './Images/1678691617864.png';
import cod from './Images/cod.svg';
import evn from './Images/freeDelivery.svg';
import esyt from './Images/easyReturns.svg';
import plst from './Images/playstoreSmallIcon.svg';
import './Home.css'


const Home = () => {
    return (
        <Container fluid>
            <Container className='w-75'>
                <Row className='mt-5 bgcolor'>
                    <Col>
                        <h1 className='pt-5 ps-5 fw-bolder1'>Lowest Prices Best Quality Shopping</h1>
                        <Row className='ps-5 pt-3'>
                            <Col className='d-flex align-items-center border-end border-2 '>
                                <div>
                                    <img className='img-fluid1 ' src={evn} alt="" />
                                </div>
                                <div className='ps-3 fw-bold'>
                                    <p className='m-0'>Free</p>
                                    <p className='m-0'>Delivery</p>
                                </div>
                            </Col>
                            <Col className='d-flex align-items-center border-end border-2 '>
                                <div>
                                    <img className='img-fluid1 ' src={cod} alt="" />
                                </div>
                                <div className='ps-3 fw-bold'>
                                    <p className='m-0'>Free</p>
                                    <p className='m-0'>Delivery</p>
                                </div>
                            </Col>
                            <Col className='d-flex align-items-center  '>
                                <div>
                                    <img className='img-fluid1 ' src={esyt} alt="" />
                                </div>
                                <div className='ps-3 fw-bold'>
                                    <p className='m-0'>Cash on</p>
                                    <p className='m-0'>Delivery</p>
                                </div>
                            </Col>

                        </Row>
                        <div className='ps-5 pt-3'>
                            <button className='bgcolorbtn text-white btn w-50'> Dowload The Meesho App</button>
                        </div>
                    </Col>
                    <Col>
                        <img src={adv} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </Container>


    )
}

export default Home