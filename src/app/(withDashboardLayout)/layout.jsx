import DashboardSider from '@/Components/shared/DashboardSider';

const layout = ({ children }) => {
  return (
    <div className=" flex gap-4">
      <DashboardSider></DashboardSider>
      <div className='ml-[200px]'>{children}</div>
    </div>
  );
};

export default layout;
