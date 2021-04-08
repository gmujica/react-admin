import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>
                <div className="containerLogin">
                    <label ><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label ><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                        
                    <button type="submit">Login</button>
                    <label>Remember me </label>
                    <input type="checkbox" checked="checked" name="remember" />     
                </div>
                <div className="containerLogin">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="/">password?</a></span>
                </div>
            </form>
        </div>
    )
}

export default Login
