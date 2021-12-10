
import './App.css';
import { useSelector } from 'react-redux';
import Login from './components/login';
import Logout from "./components/logout"
import { selectUser } from './features/userslice';

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
{user ? <Logout/> :<Login/>}      
    </div>
  );
}

export default App;
