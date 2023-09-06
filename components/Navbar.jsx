import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { MenuSquare, Unlock } from 'lucide-react';
import Link from 'next/link';
import { ToggleUi } from './ui/toggle-ui';

const Navbar = () => {
  return (
    <div className="w-full fixed flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary z-99 ">
      <div>
        <UserButton />
      </div>
      <div className="flex item-center ">
        <MenuSquare className="block md:hidden" />
        <Link href="/">
          <h1 className="hidden md:block text-xl md:text-3xl font-bold text-primary font-poppin">
            Avatar AI
          </h1>
        </Link>
      </div>
      <div className="flex flex-none items-center gap-x-3">
        <ToggleUi size="sm" />
        <div className="p-0.5 rounded-md bg-gradient-to-r from-rose-500 to-purple-500">
          <Button size="sm" variant="prime">
            Unlock
            <Unlock className="h-3 w-3 text-white ml-2 font-poppin" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
