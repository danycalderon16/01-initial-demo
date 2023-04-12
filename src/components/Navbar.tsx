import styles from './Navbar.module.css';
import ActiveLink from "./ActiveLink";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles.manunav}>
      {menuItems.map(item=>(
        <ActiveLink key={item.href} text={item.text} path={item.href} />
      ))}
    </nav>
  );
};

export default Navbar;
