import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Service from './component/Service/Service';
import ServiceDetail from './component/ServiceDetail/ServiceDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './hooks/FirebaseConfg/AuthProvider/AuthProvider';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Regester from './component/Regester/Regester';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Appointment from './component/Appointment/Appointment';
import ThankYou from './component/ThankYou/ThankYou';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <PrivateRoute path="/service-detail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Regester></Regester>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/thankyou">
            <ThankYou></ThankYou>
          </PrivateRoute>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
