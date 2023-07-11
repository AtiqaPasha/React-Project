import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/css/Login.css'
// import AppBar2 from '../Components/AppBar2';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/login/context'
export default function Login() {
  const navigateTo = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { state, dispatch } = useContext(UserContext)

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const savedUser = JSON.parse(localStorage.getItem('user'))

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      // Valid credentials
      setError('')
      // Redirect to the home page

      dispatch({
        type: 'LOGIN',
        payload: {
          email: email,
          password: password,
        },
      })

      console.log('yes')

      // navigateTo('/Home')
    } else {
      // Invalid credentials
      alert('Invalid email or password.')
    }
  }

  return (
    <>
      {/* <AppBar2/> */}
      <div className="cons">
        {/* Hello world */}
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://media.istockphoto.com/id/1163040043/vector/e-commerce-purple-background.jpg?s=170667a&w=0&k=20&c=CYo01bcrubtgCRcj1507V5ZJ8HDxkRTrUbrxiDN86lk="
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    id="form1Example13"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg"
                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                  <input
                    value={password}
                    type="password"
                    id="form1Example23"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* Checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form1Example3"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {' '}
                      Remember me{' '}
                    </label>
                  </div>
                  {/* <a href="#!">Forgot password?</a> */}
                </div>
                {/* Submit button */}
                {error && <p>{error}</p>}

                {/* <button
                  type="submit"
                  className="btn btn-lg btn-block w-100 my-2"
                >
                  <a href="/">Login</a>
                  Login
                </button> */}


                <input type="submit" value="Login"  className="btn btn-lg btn-block w-100 my-2" style={{ backgroundColor: '#300047', color: 'white' }}/>
                {/* <button
                  type="submit"
                  className="btn btn-lg btn-block w-100 my-2"
                >
                  <a href="signup">SignUp</a>
                </button> */}

                {/* <button
                  type="submit"
                  className="btn btn-lg btn-block w-100 my-2"
                >
                  Continue with Facebook
                </button> */}

                {/* <button
                  type="submit"
                  className="btn btn-lg btn-block w-100 my-2"
                >
                  Continue with Twitter
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
