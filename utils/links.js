import { Home, Settings, Plus } from 'lucide-react';

const RouteLinks = [
  {
    icon: Home,
    src: '/',
    title: 'Home',
    prime: false,
  },
  {
    icon: Plus,
    src: '/avatar/new',
    title: 'Create',
    prime: true,
  },
  {
    icon: Settings,
    src: '/settings',
    title: 'Settings',
    prime: false,
  },
];

export { RouteLinks };
