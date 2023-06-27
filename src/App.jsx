import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
