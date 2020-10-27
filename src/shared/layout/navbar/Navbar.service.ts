import { useState, useEffect } from 'react';
import { navbarConfig } from './Navbar.prototype';
//import axios from 'axios'

const NavbarService = () => {
    //  const baseBackendApiURL = process.env.BACKEND_BASE_API_URL
    const [navbar, setNavbar] = useState();

    // const getNavbar= async ()=>{
    //     try{
    //         const navbarConfig = await axios.get(baseBackendApiURL+'navbar')
    //         console.log('navbarConfig =======>  ', navbarConfig)
    //         const data = navbarConfig.data
    //         setNavbar(data)
    //     }catch(ex){
    //         console.log(ex)
    //     }
    // }

    useEffect(() => {
        setNavbar(navbarConfig);
    }, [navbar]);

    return {
        navbar,
    };
};

export default NavbarService;
