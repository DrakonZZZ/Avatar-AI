'use client';

import { RouteLinks } from '@/utils/links';
import { usePathname, useRouter } from 'next/navigation';

const SecondaryMenu = () => {
  const pn = usePathname();
  const Router = useRouter();

  const onRedirect = (url, prime) => {
    return Router.push(url);
  };

  return (
    <div className="h-full flex flex-col space-y-4 text-primary bg-secondary rounded-l-lg">
      <div className="flex flex-1 justify-center p-2">
        <div className="space-y-2">
          {RouteLinks.map((link, idx) => {
            return (
              <div
                key={idx}
                className={`w-full justify-start font-medium text-muted-foreground text-xs p-3 cursor-pointer hover:text-primary hover:bg-primary/20 rounded-lg transition ${
                  pn === link.src && 'bg-primary/20 text-primary '
                }`}
                onClick={() => onRedirect(link.src, link.prime)}
              >
                <div className="flex flex-col gap-y-2 items-center flex-1">
                  <link.icon className="h-5 w-5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondaryMenu;
