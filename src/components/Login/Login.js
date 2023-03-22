import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const signupObj = {
        email: '',
        password: '',
    };
    const [signupstate, setSignupState] = useState(signupObj)
    const [signuperror, setSignuperror] = useState(signupObj)
    const [status, setStatus] = useState(false)

    function handleInput(e) {
        const tempObj = {}
        tempObj[e.target.id] = e.target.value
        setSignupState({
            ...signupstate, ...tempObj
        })
    }
    function handleSubmit(e) {
        e.preventDefault(e)
        const st = validation();
        if(st) {
            setStatus(true);
            const loggedUser = JSON.parse(localStorage.getItem("users"))
            for(let i = 0; i < loggedUser.length; i++) {
                if(loggedUser[i].email === signupstate.email && loggedUser[i].password === signupstate.password) {
                    navigate('/')
                }
            }
        }
    }

    function validation() {
        const errorObj = {}
        var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(!emailPattern.test(signupstate.email)) {
            errorObj.email = "Email Format is incorrect"
        }
        if(signupstate.password === "") {
            errorObj.password = 'Password is empty'
        }

        setSignuperror(errorObj)

        if(Object.keys(errorObj).length > 0) {
            return false
        } else {
            return true
        }
    }

    useEffect(() => {
        console.log(signupstate.email + ' ' + signupstate.password)
    }, [signupstate])
    return (
        <>
            <Container>
                <Row className='w-50 m-auto p-3'>
                    <Col className='border rounded p-3 d-flex align-items-center justify-content-center ' style={{background: "rgb(253, 236, 238)"}}>
                        <div className='signup-container'>
                            <div className='signup-main'>
                                <h1 className='text-center py-5'>Login form</h1>
                                <h3 className='signup-div'>Don't Have Account <Link to='/signup'>Signup</Link></h3>
                                <input className=' w-100 py-2' type='text' placeholder='Enter your email' id='email' onChange={handleInput} />
                                <div>{signuperror.email}</div>
                                <input className=' w-100 my-2 py-2' type='password' placeholder='Enter password' id='password' onChange={handleInput} />
                                <div>{signuperror.password}</div>
                                <button className=' w-100 bg-pink btn' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>

        </>

    )
}

export default Login