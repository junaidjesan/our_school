import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { photoContex } from '../../App';
import Footer from '../Footer/Footer';

const Main = () => {
    const datas=useContext({photoContex})
    return (
        <div className=''>
            <div className='navbar'>
                <h1 className='flex-1 text-2xl'>OUR SCHOOL</h1>
            <div className='mt-5'>
            <Link className="btn btn-outline btn-primary mr-4" to='/home'>Home</Link>
            <Link className="btn btn-outline btn-primary mr-4" to='/products'>Products</Link>
            <Link className="btn btn-outline btn-primary mr-4" to='/collection'>Collection</Link>
            <Link className="btn btn-outline btn-primary" to='/about'>About</Link>
            </div>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;