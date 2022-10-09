import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { photoContex } from '../../App';
import About from '../About/About';
import Collection from '../Collection/Collection';
import GoMore from '../GoMore/GoMore';
import Home from '../Home/Home';
import Main from '../Main/Main';
import Products from '../Products/Products';
import Vlogs from '../Vlogs/Vlogs';

const Root = () => {
    const datas=useContext(photoContex)
    const router=createBrowserRouter([
        {path:'/',element:<Main></Main>,children:[
            {path:'/about',element:<About></About>},
            {path:'/products',loader:()=>fetch(datas),element:<Products></Products>},
            {path:'/home',element:<Home></Home>},
            {path:'/gomore',element:<GoMore></GoMore>},
            {path:'/vlogs',element:<Vlogs></Vlogs>},
            {path:'/collection',element:<Collection />}
        ]},
    ])

    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Root;