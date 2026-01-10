import Footer from '@/Components/shared/Footer';
import Navbar from '@/Components/shared/Navbar';

const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-[90vh] pt-20 '>{children}</div>

      <Footer></Footer>
    </div>
  );
};

export default layout;
