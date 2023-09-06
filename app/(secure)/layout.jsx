import Navbar from '@/components/Navbar';

const layout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-16 md:pl-20">{children}</main>
    </div>
  );
};

export default layout;
