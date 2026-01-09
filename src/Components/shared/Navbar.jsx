import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/services'}>Services</Link>
      </li>
      <li>
        <Link href={'/reviews'}>Reviews</Link>
      </li>
      <li>
        <Link href={'/aboutUs'}>About Us</Link>
      </li>
    </>
  );
  return (
    <div className='bg-purple-500'>
      <Container>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-base-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {' '}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{' '}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-gradient-to-r from-[#101828] to-[#262626] text-base-100 font-semibold text-[18px] rounded-box  z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Logo></Logo>
          </div>
          <div className="navbar-center  font-semibold text-[18px] hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-base-100">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              href={'/login'}
              className="bg-gradient-to-r from-[#801617] to-[#FF1532]
hover:from-[#FF1532] hover:to-[#801617]
text-white btn rounded-lg transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
