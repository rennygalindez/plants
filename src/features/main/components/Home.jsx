import Login from '../../auth/components/Login';
import { useAuth } from '../../core/hooks';

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="home_container">
      <div>{user ? <h1>Wellcome</h1> : <Login />}</div>
    </div>
  );
};

export default Home;
