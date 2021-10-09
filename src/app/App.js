import { Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import NavbarComp from './shared/Navbar';
import CreateRoom from './views/CreateRoom';
import Login from './views/Login';
import RoomList from './views/RoomList';
import Signup from './views/Signup';
import Working from './views/Working';

function App() {
  return (
    <div className="Apps">
      <NavbarComp/>
      <Switch>
      <Route exact path="/" component={RoomList} />
      <Route exact path="/create" component={CreateRoom} />
      <Route exact path="/working" component={Working} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
