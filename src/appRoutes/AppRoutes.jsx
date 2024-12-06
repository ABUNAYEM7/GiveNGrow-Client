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


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element ={<MainLayout/>}>

        <Route index element={<Home/>}></Route>
        <Route path="MyCampaign" element={<MyCamp/>}></Route>
        <Route path="AddCampaign" element={<AddNewCampaign/>}></Route>
        <Route path="MyDonation" element={<MyDonation/>}></Route>

        <Route path="SignIn" element={<SignIn/>}/>
        <Route path="Register" element={<Register/>}/>

        <Route path="AllCampaign" element={<AllCampaign/>}>
          <Route path="/AllCampaign" element={<AllCampaignCards/>}/>
        </Route>

        <Route path="/CampaignDetails/:id" element={<CampaignDetails/>}/>
        <Route path="/CampaignDetails/:id/Donate" element={<Donate/>}/>

        </Route>
    </Routes>
  )
}

export default AppRoutes

