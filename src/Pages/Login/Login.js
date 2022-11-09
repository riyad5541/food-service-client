import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true });
        })
        .catch(error =>console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200 my-10 w-3/4 mx-auto rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-center text-3xl font-semibold">Login !</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-xl text-center font-medium">Or</p>
                        <div className="form-control">
                            <button className="btn btn-primary">Google</button>
                        </div>
                        <p className="text-xl font-bold text-center">
                            New User?
                            <Link to="/signup" className="text-primary">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;