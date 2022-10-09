import React, { useContext } from 'react';
import { ringContes } from '../../App';


const GoMore = () => {
    const img=useContext(ringContes)
    return (
        <div>
            <h1>{img}</h1>
        </div>
    );
};

export default GoMore;