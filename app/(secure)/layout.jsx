import Navbar from '@/components/Navbar';
import SecondaryMenu from '@/components/SecondaryMenu';

const layout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-16 md:pl-20">{children}</main>
      <div className="hidden md:flex flex-col fixed mt-16 inset-y-0 right-0">
        <SecondaryMenu />
      </div>
    </div>
  );
};

export default layout;
