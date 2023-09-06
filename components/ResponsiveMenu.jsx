import { MenuSquare } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SecondaryMenu from './SecondaryMenu';

const ResponsiveMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pl-4">
        <MenuSquare />
      </SheetTrigger>
      <SheetContent side="right" className="p-0 bg-secondary pt-16 w-20">
        <SecondaryMenu />
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveMenu;
