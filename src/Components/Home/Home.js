import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ringContes } from '../../App';

const Home = () => {
    const img=useContext(ringContes)
    return (
        <div className=''>
            
            <div>{img}</div>
            <div>
                <Link className="btn btn-outline btn-primary mr-4" to='/gomore'>Go More</Link>
                <Link className="btn btn-outline btn-primary" to='/vlogs'>Vlogs</Link>
            </div>
        </div>
    );
};

export default Home;