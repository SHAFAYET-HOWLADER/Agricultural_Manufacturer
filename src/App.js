
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './Components/Pages/Blogs/Blogs';
import AddAProduct from './Components/Pages/DashboardDesign/AddAProduct';
import DashboardDesign from './Components/Pages/DashboardDesign/DashboardDesign';
import MakeAdmin from './Components/Pages/DashboardDesign/MakeAdmin';
import ManageAllOrders from './Components/Pages/DashboardDesign/ManageAllOrders';
import ManageProducts from './Components/Pages/DashboardDesign/ManageProducts';
import MyOrder from './Components/Pages/DashboardDesign/MyOrder';
import MyProfile from './Components/Pages/DashboardDesign/MyProfile';
import MyReviews from './Components/Pages/DashboardDesign/MyReviews';
import Payment from './Components/Pages/DashboardDesign/Payment';
import UpDateProfile from './Components/Pages/DashboardDesign/UpDateProfile';
import Home from './Components/Pages/Home/Home';
import Tools from './Components/Pages/Home/Tools';
import Login from './Components/Pages/Login/Login';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import SignUp from './Components/Pages/Login/SignUp';
import MyPortfolio from './Components/Pages/MyPortfolio/MyPortfolio';
import NotAvailable from './Components/Pages/NotAvaiable/NotAvailable';
import Purchase from './Components/Pages/Purchase/Purchase';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import Right from './Components/Shared/Right';

function App() {
  return (
    <div className='center_app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashboardDesign />
          </RequireAuth>
        }>
          <Route index element={<MyOrder/>}></Route>
          <Route path='myReviews' element={<MyReviews/>}></Route>
          <Route path='myProfile' element={<MyProfile/>}></Route>
          <Route path='UpDateProfile' element={<UpDateProfile/>}></Route>
          <Route path='manageProducts' element={<ManageProducts/>}></Route>
          <Route path='manageAllOrders' element={<ManageAllOrders/>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin/>}></Route>
          <Route path='addProduct' element={<AddAProduct/>}></Route>
          <Route path='payment/:paymentId' element={<Payment/>}></Route>
        </Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio/>}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/tools' element={<Tools />}> </Route>
        <Route path='/tools/:toolsId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotAvailable />}></Route>
      </Routes>
      <Footer />
      <Right />
      <ToastContainer />
    </div>
  );
}

export default App;
