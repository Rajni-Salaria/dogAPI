import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login(props) {
    // (useNavigate forward to Next page ( useNavigate : Hook) ) 
    let navigate = useNavigate();

    //  (useLocation (Location): Alert message  useLocation : Hook )
    let location = useLocation();

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
    }

    function login() {
        // (Comparing user data to null (1st time Enter))
        if (localStorage.getItem('users') === null) {
            alert('please Register Your Account ')
            setEmail("")
            setpassword("")
            console.log(login)
        }
        else {
            let oldarray = JSON.parse(localStorage.getItem('users'))
            let found = false
            oldarray.forEach(Element => {
                console.log(Element)
                if (Element.email === email && Element.password === password) {
                    found = true
                }
            })
            if (found === true) {
                localStorage.setItem('sign', true)
                navigate('/DogDetails')
            }
            else if (found === false) {
                alert('Your account has been not Register Please Register')
            }
        }
    }

    // (useLocation : Show Alert Message)
    useEffect(() => {
        if (location.search === '?Login=yes') {
        }
    }, [location]);

    return (
        <div className="form-container">
            <h2 className='text-center'>Sign-In</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" autoComplete="off" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" autoComplete="off" />
                </Form.Group>
                {/* buttons */}
                <div className='d-flex'>
                    <Button variant="primary" type="submit" onClick={login} className='w-50 h-25 mt-3'>
                        Login
                    </Button>
                    <Button variant="" type="submit">
                        Don't have an account?
                        <Link to="../Register"> Register Here.</Link>
                    </Button>
                </div>

                {/* Use localStorage */}
                {localStorage.getItem('Email') && (
                    <div>
                        Email-Id: <p>{localStorage.getItem('Email')}</p>
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

export default Login;