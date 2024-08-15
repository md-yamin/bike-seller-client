import { useEffect, useState } from 'react';
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [header, setHeader] = useState(false)
    const scrollHeader = () => {
        if (window.scrollY >= 10) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        return () => {
            window.removeEventListener('scroll', scrollHeader)
        }
    }, [])

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Bikes",
            path: "/bikes"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "About",
            path: "/about"
        },
        
        {
            title: "Contacts",
            path: "/contacts"
        },
    ]

    return (
        <div className={`mx-auto fixed z-50 w-full ${header ? 'top-0' : 'top-10'}`} style={{
            transition: 'all 0.3s ease',
        }}>
            <div style={{
                transition: 'width 0.5s ease',
            }}
                className={`mx-auto ${header ? 'w-full bg-yellow-400' : 'w-[80vw] bg-slate-200'}`}>
                <div className={`navbar w-[80vw] mx-auto py-[1.5vw] px-[2vw]`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-fit p-2 shadow z-10">
                                {
                                    navItems.map((item) => (<li href={item.path} key={item.path}><Link className='mb-2 hover:text-primary'>{item.title}</Link></li>))

                                }
                            </ul>
                        </div>
                        <Link href={'/'}>
                            <p>GearUp</p>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navItems.map((item) => (<li href={item.path} key={item.path}><Link className='mr-5 hover:text-primary' >{item.title}</Link></li>))
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex gap-3 items-center mr-3'>
                            <IoBagOutline className='text-xl' />
                            <IoSearchOutline className='text-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;