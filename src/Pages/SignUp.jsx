import React, { useState } from 'react';
import '/src/css/signup.css'
export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newUser = {
      email,
      password,
    };
  
    // Save user to local storage
    localStorage.setItem('user', JSON.stringify(newUser));
  
    // Redirect to the login page
    navigateTo('/Login');
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!firstName || !lastName || !email || !password || !confirmPassword) {
  //     setError('Please fill in all fields.');
  //   } else if (!isValidEmail(email)) {
  //     setError('Invalid email address.');
  //   } else if (password.length < 6) {
  //     setError('Password should be at least 6 characters long.');
  //   } else if (password !== confirmPassword) {
  //     setError('Passwords do not match.');
  //   } else {
  //     setError('');
  //     navigateTo('/Login');

  //     // Form is valid, you can perform further actions like submitting the form
  //     // setError('');
  //     console.log('Form submitted!');
  //   }


  // const isValidEmail = (email) => {
  //   // Simple email validation using a regular expression
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  return (
    <>
    <div className="cons">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            {/* Image */}
            <img
          src="https://media.istockphoto.com/id/1163040043/vector/e-commerce-purple-background.jpg?s=170667a&w=0&k=20&c=CYo01bcrubtgCRcj1507V5ZJ8HDxkRTrUbrxiDN86lk="
          className="img-fluid"
          alt="Phone image"
        />

          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* First Name input */}
              <label className="form-label" htmlFor="form1ExampleFirstName">
                  First Name
                </label>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1ExampleFirstName"
                  className="form-control form-control-lg"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
               
              </div>
              {/* Last Name input */}
              <label className="form-label" htmlFor="form1ExampleLastName">
                  Last Name
                </label>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1ExampleLastName"
                  className="form-control form-control-lg"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                
              </div>
              <label className="form-label" htmlFor="form1ExampleEmail">
                  Email address
                </label>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1ExampleEmail"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1ExamplePassword">
                  Password
                </label>
                <input
                  type="password"
                  id="form1ExamplePassword"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
               
              </div>
              {/* Confirm Password input */}
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1ExampleConfirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="form1ExampleConfirmPassword"
                  className="form-control form-control-lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
               
              </div>
              {/* Error message */}
              {error && <p>{error}</p>}
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-lg btn-block w-100">
               <a href="login">Login</a> 
              </button>
              {/* Other buttons */}
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
