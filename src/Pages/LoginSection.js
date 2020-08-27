import React from 'react'
import './LoginCss.css'
import SignUp from '../images/signup.png'
import Counter from '../counterRedux/counter'

function LoginSection() {
    return (
        <div>
            <img className="SignUpImg" src={SignUp} alt="ME"/>
        <div className="main-w3layouts wrapper">

        <div className="main-agileinfo">
            <div className="agileits-top">
                
                    <p>Username:</p><input placeholder="Username" className="text" type="text" name="username"  required=""/>
                    
                    <br/>
                    <p>E-mail:</p><input placeholder="Email" className="text email" type="email" name="email"  required=""/>
                    
                    <br/>
                    <p>Password:</p><input placeholder="Password" className="text" type="password" name="password"  required=""/>
                                    
                    <br/>
                    <p>Birth Date:</p>
                    <br/>
                
                <div className="BirthDate">
                    <div>
                      <h className="Birth-param">Day:</h>
                      <Counter/>
                    </div>
                    <div>
                      <h className="Birth-param">Month:</h>
                      <br/>
                      <input className="BirthInput" type="number"/>
                    </div>
                    <div>
                      <h className="Birth-param">Year:</h>
                      <br/>
                      <input className="BirthInput" type="number"/>
                    </div>
                </div>

                    <div className="wthree-text">
                        <label className="anim">
							<input type="checkbox" className="checkbox" required=""/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
                        <div className="clear">
                        <input type="submit" value="SIGN UP"/> </div>
                    </div>
                    
                
                <p>You already have an account? <a> Login Now!</a></p>
            </div>
        </div>
        
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


        </div>
    )
}

export default LoginSection
