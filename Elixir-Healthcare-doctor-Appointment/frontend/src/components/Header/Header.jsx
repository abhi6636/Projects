import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

const navlinks = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Find a Doctor",
    path: "/doctors",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);


  const handleStickyHeader = ()=>{
    window.addEventListener("scroll",()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
        else{
          headerRef.current.classList.remove('sticky__header')
        }
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    return ()=> window.removeEventListener('scroll',handleStickyHeader)
  })

  const toggleMenu = ()=>{
    menuRef.current.classList.toggle('show__menu')
  }

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex tems-center justify-between">
          {/* logo */}
          <div className="logo w-[90px] h-[80] py-2">
            <img src={logo} alt="logo" />
          </div>
          
          {/* nav */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((link, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      exact
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-cyan-500 text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[15px] leading-7 font-[500] hover:text-black hover:font-bold"
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* nav right */}

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} alt="user" className="full rounded-full" />
                </figure>
              </Link>
            </div>


           
              <Link to="/login">
                <button className="bg-cyan-500 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-yellowColor">
                  Login
                </button>
              </Link>
              <span className="md:hidden" onClick={toggleMenu} >
                  <BiMenu className="w-6 h-6 cursor-pointer"/>
                </span>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
