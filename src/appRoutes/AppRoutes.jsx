import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import MyCamp from "../Pages/MyCamp";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyDonation from "../Pages/MyDonation";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import AllCampaign from '../Pages/AllCampaign'
import AllCampaignCards from "../Pages/AllCampaignCards";
import CampaignDetails from "../Pages/CampaignDetails";
import Donate from "../Pages/Donate";
import UpdateMyCampaign from "../Pages/UpdateMyCampaign";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element ={<MainLayout/>}>
        <Route index element={<Home/>}></Route>

        <Route path="MyCampaign" element={
          <PrivateRoute><MyCamp/></PrivateRoute>}>
          </Route>

        <Route path="AddCampaign" element=
        {<PrivateRoute><AddNewCampaign/></PrivateRoute>}>
        </Route>

        <Route path="MyDonation" element=
        {<PrivateRoute><MyDonation/></PrivateRoute>}>
        </Route>

        <Route path="SignIn" element={<SignIn/>}/>
        <Route path="Register" element={<Register/>}/>

        {/* nested-Routes */}
        <Route path="" element={
          <AllCampaign/>
          }>
          <Route path="/AllCampaign" element={<AllCampaignCards/>}/>
          <Route path="/AllCampaign/updateMyCampaign/:id" element={<PrivateRoute> <UpdateMyCampaign/> </PrivateRoute>}/>

        </Route>

        <Route path="/CampaignDetails/:id" element={
          <PrivateRoute><CampaignDetails/></PrivateRoute>
        }/>
        <Route path="/CampaignDetails/:id/Donate" element={<PrivateRoute><Donate/></PrivateRoute>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
  )
}

export default AppRoutes

