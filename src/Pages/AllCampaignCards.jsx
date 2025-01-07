import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Vortex } from "react-loader-spinner";
import Card from "../components/Card";

const AllCampaignCards = () => {
  const [allCampaign, setAllCampaign] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortValue,setSortValue] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://give-ngrow-server.vercel.app/AllCampaign")
      .then((res) => res.json())
      .then((data) => {
        setAllCampaign(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const getStatus = (deadline) => {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const deadlineDate = new Date(deadline);
    deadlineDate.setHours(0, 0, 0, 0);

    if (currentDate > deadlineDate) {
      return "Expired";
    } else {
      return "Active";
    }
  };


  const seeMoreHandler = (id) => {
    navigate(`/CampaignDetails/${id}`);
  };

  const columns = [
    { id: "No:", label: "No:", minWidth: 50 },
    { id: "title", label: "Title", minWidth: 100 },
    { id: "deadline", label: "Status", minWidth: 100 },
    { id: "minDonation", label: "Minimum Donation", minWidth: 50 },
    { id: "raisedAmount", label: "Raised Amount", minWidth: 50 },
    { id: "goal", label: "Target Amount", minWidth: 50 },
    { id: "Contribute", label: "Contribution", minWidth: 50 },
  ];

  // sorting functionality
  useEffect(()=>{
    if(sortValue === "Sort By Minimum Donation"){
      const sortedByRising = [...allCampaign].sort((a, b) => {
        return a.minDonation - b.minDonation;
      });
      setAllCampaign(sortedByRising);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sorted By Minimum Donation",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    else if(sortValue === "Sort By Target Amount"){
      const sortByTargetAmount = [...allCampaign].sort((a, b) => {
        return b.goal - a.goal;
      });
  
      setAllCampaign(sortByTargetAmount);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sorted By Target Amount",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  },[sortValue])


  return (
    <div>
      {loading && (
        <div className="mt-20 w-full min-h-28 flex items-center justify-center">
          <Vortex
            visible={true}
            height="180"
            width="180"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      )}
      {!loading && (
        <>
          <div className="flex items-center justify-center my-6">
            <div className="flex flex-col items-center gap-5">
              <h3 className="text-3xl font-bold text-primary">
                Sort it, simplify it,{" "}
                <span className="text-secondary">find it faster!</span>
              </h3>

              <select 
              onChange={(e)=>setSortValue(e.target.value)}
              defaultValue={"Default"}
              className="select select-secondary w-full max-w-xs">
                <option disabled 
                value={"Default"}>
                  Default
                </option>
                <option
                >Sort By Minimum Donation</option>
                <option>Sort By Target Amount</option>
              </select>

              {/* <div className="flex flex-row gap-5">
                <button
                  onClick={minDonationHandler}
                  className="btn bg-secondary text-white hover:text-secondary"
                >
                  Minimum Donation
                </button>
                <button
                  onClick={targetHandler}
                  className="btn bg-primary text-white hover:text-primary"
                >
                  Target Amount
                </button>
              </div> */}
            </div>
          </div>
          {/* card-container */}
          <div className="my-12 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {allCampaign.map(campaign=>(
            <Card key={campaign._id} campaign={campaign} />
          ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllCampaignCards;
