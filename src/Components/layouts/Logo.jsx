
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-end md:ms-0 -ms-7 '>
      <Image
        alt="logo-care-io"
        src={'/assets/care.png'}
        width={80}
        height={70}
      />
      <h2 className="font-bold text-xl md:-ms-5 -ms-5">Care.io</h2>
    </Link>
  );
};

export default Logo;
