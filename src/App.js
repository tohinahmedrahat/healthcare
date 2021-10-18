import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Service from './component/Service/Service';
import ServiceDetail from './component/ServiceDetail/ServiceDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './hooks/FirebaseConfg/AuthProvider/AuthProvider';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/service">
            <Service></Service>
          </Route>
          <PrivateRoute path="/service-detail">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
