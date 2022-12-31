

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register(props) {
    console.log(props)
    //  (Navigate : Forward to next page)
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function handleSubmitDetails(e) {
        e.preDefault()
    }

//  (Check function : for validation without enter 5 character it can't be registered  )
    function Check(){
        if(email.length>5 && password.length>5){
            SignUp() 
        }
        else{
            alert("Please check credentials")
        }
    }
    function SignUp() {
        if (localStorage.getItem('users') === null) {
            
            let getNewArr = []
            let userDetail = {
                email: email,
                password: password
            }
            getNewArr.push(userDetail)
            localStorage.setItem('users', JSON.stringify(getNewArr))
            navigate('/?Login=yes')
            console.log(SignUp)
        }
        else {
            let getOldArr = JSON.parse(localStorage.getItem('users'))
            getOldArr.forEach(Element => {
                // if user has already register then show alert message
                if (Element.email === email) {
                    alert("Your account has been already registered Please Login.")
                    return
                }
                // if user has not register, then store user email password in getOldArr
                else {
                    let userDetail = {
                        email: email,
                        password: password
                    }
                    getOldArr.push(userDetail)
                    localStorage.setItem('users', JSON.stringify(getOldArr))
                    navigate('/?Login=yes')
                }
            })
        }
    }

    function handleName(e) {
        setName(e.target.value)
    }


    return (
        <div className="form-container">
            <h2 className='text-center'>Sign-Up</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword" onSubmit={handleSubmitDetails} >
                    <Form.Label>FullName</Form.Label >
                    <Form.Control value={name} onChange={handleName} type="username" placeholder="username" autoComplete="off" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" autoComplete="off" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" autoComplete="off" required />
                </Form.Group>
                <div className='d-flex'>
                    <Button variant="primary" type="submit" onClick={Check} className='w-50 h-25 mt-3'  >
                        Sign-Up
                    </Button>
                    <Button variant="" type="submit">
                        Already have an account?
                        <Link to="../"> Login</Link>
                    </Button>
                </div>
                {localStorage.getItem('Email') && (
                    <div>
                        Email-Id: <p>{localStorage.getItem('Email-Id')}</p>
                    </div>
                )}
                {localStorage.getItem('Password') && (
                    <div>
                        Password: <p>{localStorage.getItem('Password')}</p>
                    </div>
                )}
            </Form>
        </div>
    )
}

export default Register;
