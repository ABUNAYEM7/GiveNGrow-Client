import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import MyCamp from "../Pages/MyCamp";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyDonation from "../Pages/MyDonation";
import UserRegistration from "../Pages/UserRegistration";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element ={<MainLayout/>}>

        <Route index element={<Home/>}></Route>
        <Route path="MyCampaign" element={<MyCamp/>}></Route>
        <Route path="AddCampaign" element={<AddNewCampaign/>}></Route>
        <Route path="MyDonation" element={<MyDonation/>}></Route>

        <Route path="UserRegistration" element={<UserRegistration/>}>
        <Route path="/UserRegistration" element={<SignIn/>}/>
        <Route path="/UserRegistration/Register" element={<Register/>}/>
        </Route>
        </Route>
    </Routes>
  )
}

export default AppRoutes

