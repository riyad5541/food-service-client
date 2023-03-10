import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUP = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgurl = form.imageurl.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            handleUpdateUserProfile(name, imgurl);
        })
        .catch(error => console.error(error));

    };

    const handleUpdateUserProfile = (name, imgurl) =>{
        const profile = {
            displayName: name,
            photoURL: imgurl,
        };

        handleUpdateUserProfile(profile)
          .then(() => {})
          .catch((error) => console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200 my-10 w-3/4 mx-auto rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUP} className="card-body">
                        <h2 className="text-center text-3xl font-semibold">Register !</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                type="text"
                                name="imageurl"
                                placeholder="Image URL"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required
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
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-xl font-bold text-center">
                            Already Have an Account?
                            <Link to="/login" className="text-primary">
                                LogIn
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;