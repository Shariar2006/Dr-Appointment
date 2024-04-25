import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {


    const navLink = <div className="lg:flex text-xl font-semibold gap-5">
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#3A643B] font-bold rounded-lg px-1 py-2 " : "mx-1 text-gray-700"}
        >Home</NavLink></li>
        <li><NavLink to={'/findDoctors'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#3A643B] font-bold rounded-lg px-1 py-2 " : "mx-1 text-gray-700"}
        >Find Doctors</NavLink></li>
        <li><NavLink to={'/aboutUs'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#3A643B] font-bold rounded-lg px-1 py-2 " : "mx-1 text-gray-700"}
        >About Us</NavLink></li>
    </div>


    return (
        <div className="w-full p-4 bg-[#FFF7E2]">

            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div><img className='w-48' src={logo} alt="logo" /></div>
                <div><ul>
                    {navLink}
                </ul></div>
                <div className='flex gap-3'>
                    <Link to='/login'><button className='border-2 border-[#3A643B] py-2 px-6 rounded-lg text-lg font-semibold text-[#3A643B]'>Login</button></Link>
                    <Link to='/singUp'><button className='bg-[#3A643B] py-2 px-7 rounded-lg text-lg font-semibold text-[#fff]'>Sing Up</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;