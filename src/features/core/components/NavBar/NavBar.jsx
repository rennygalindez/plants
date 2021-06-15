import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
    </nav>
  );
};

export default NavBar;
