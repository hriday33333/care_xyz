
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-end md:ms-0 -ms-4 '>
      <Image
        alt="logo-care-io"
        src={'/assets/care.png'}
        width={80}
        height={70}
      />
      <h2 className="font-bold text-xl text-base-100 md:-ms-5 -ms-5">Care.<span className='text-[#FF1430]'>io</span></h2>
    </Link>
  );
};

export default Logo;
