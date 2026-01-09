import Link from 'next/link';
import Logo from './Logo';

const DashboardSider = () => {
  return (
    <div className="w-[200px] bg-purple-200 h-screen p-4 px-3 py-4 fixed top-0 left-0">
      <Link href={'/'}>
        <Logo></Logo>
      </Link>
      <div className="flex flex-col gap-2 mt-7">
        <Link
          href="/dashboard/profile"
          className="hover:text-purple-700 font-medium"
        >
          Profile
        </Link>

        <Link
          href="/dashboard/my-booking"
          className="hover:text-purple-700 font-medium"
        >
          My Booking
        </Link>
      </div>
    </div>
  );
};

export default DashboardSider;
