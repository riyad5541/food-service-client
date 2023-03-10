import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    }

   

    return (
        <div>
            <div className="navbar h-20 mb-12 pt-12 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            
                        </label>
                        
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user?.email ? (
                                    <>
                                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                                        <li className='font-semibold'><Link to='/myReview'>My Review</Link></li>
                                        <li className='font-semibold'><Link to='/addService'>Add Service</Link></li>
                                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                                        <li className='font-semibold'><Link onClick={handleSignOut}>Log Out</Link></li>
                                    </>
                                ) : (
                                    <>

                                        <li className='font-semibold'><Link to='/login'>Login</Link></li>
                                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><img className='h-16' src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg" alt="" /></Link>
                    <p className='text-2xl text-orange-600'>AAR'S Food</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.email ? (
                                <>
                                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                                    <li className='font-semibold'><Link to='/myReview'>My Review</Link></li>
                                    <li className='font-semibold'><Link to='/addService'>Add Service</Link></li>
                                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                                    <li className='font-semibold'><Link onClick={handleSignOut}>Log Out</Link></li>
                                </>
                            ) : (
                                <>
                                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;