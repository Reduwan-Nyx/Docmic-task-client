import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {



    const menuItems = (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/departments">Departments</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </>
      );
    return (
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to='/home' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <a class="text-primary text-xl font-bold">Doc<span className='text-accent'>mic</span></a>
    </Link>
    <nav className="header md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
      <Link to="/home" className="mr-5 text-primary">Home</Link>
      <Link to="/services" className="mr-5">Departments</Link>
      <Link to="/story" className="mr-5">Pages</Link>
   
        <div>
        <Link to="/managetour" className="mr-5">Blog </Link>
        <Link to="/myorders" className="mr-5">Contacts</Link>
        </div>
        

    </nav>
        <button className='mt-3 btn btn-active btn-primary'>Free Consulation</button>
  </div>
</header>
    );
};

export default Header;