export interface NavLink {
  name: string;
  route: string;
}

export const Navlinks: NavLink[] = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Purpose',
    route: '/#Purpose',
  },
  {
    name: 'Partners',
    route: '/#Partners',
  },
  {
    name: 'Team',
    route: '/team',
  },
  {
    name: 'News',
    route: '/news',
  },
 
];