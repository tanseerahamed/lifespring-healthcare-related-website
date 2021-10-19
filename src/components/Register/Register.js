import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2 className="text-danger m-3">Register: Create Account</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br /> <br />
                    <input className="btn btn-warning" type="submit" value="Submit" />
                </form>
                    <p>Already have an account? <Link className="btn btn-warning" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;