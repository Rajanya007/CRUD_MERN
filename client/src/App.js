import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import User from './components/User';
import LoginPage from './components/LoginPage';
import Register from './components/RegisterUser';


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<User />}></Route>
          {/* <Route path='/test' element={<LoginPage />}></Route>
          <Route path='/register' element={<Register />}></Route> */}
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
