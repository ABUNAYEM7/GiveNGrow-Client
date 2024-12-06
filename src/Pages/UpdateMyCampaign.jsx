import React, { useContext, useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import CustomSelect from "../components/CustomSelect";

const UpdateMyCampaign = () => {
  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState({});
  const { id } = useParams();
  const { selectValue, setSelectValue } = useContext(AuthContext);

//   data-fetching
  useEffect(() => {
    fetch(`http://localhost:5000/AllCampaign/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
            const campaignData = data[0];  
            setCampaign(campaignData);
            setSelectValue({
              value: campaignData.campaignType,
              label: campaignData.campaignType,
            });
    
            setLoading(false)
        }
      });
  }, [id, setSelectValue]);

  
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const title = form.title.value;
    const image = form.photo.value;
    const description = form.description.value;
    const raisedAmount = form.raisedAmount.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;
    const goal = form.goal.value;

    if (!selectValue) {
      return Swal.fire({
        title: `Invalid Campaign Type`,
        text: "Please Select a Campaign Type",
        icon: "error",
        confirmButtonText: "Close",
      });
    }

    const campaignType = selectValue?.value;

    // Validate deadline
    let currentDate = new Date().toISOString().split("T")[0];
    const deadlineDate = new Date(deadline).toISOString().split("T")[0];
    if (currentDate > deadlineDate) {
      return Swal.fire({
        title: `Back Dated`,
        text: "Please Provide Valid Deadline",
        icon: "error",
        confirmButtonText: "Close",
      });
    }

    // Validate numeric inputs
    if (
      Number(raisedAmount) <= 0 ||
      Number(minDonation) <= 0 ||
      Number(goal) <= 0
    ) {
      return Swal.fire({
        title: "Invalid Input",
        text: "Amounts must be greater than zero",
        icon: "error",
        confirmButtonText: "Close",
      });
    }

    if (Number.parseFloat(raisedAmount) > Number.parseFloat(goal)) {
      return Swal.fire({
        title: `Invalid Amount`,
        text: "Raising Amount should be less than Goal Amount",
        icon: "error",
        confirmButtonText: "Close",
      });
    }

    if (Number.parseFloat(minDonation) > Number.parseFloat(goal)) {
      return Swal.fire({
        title: `Invalid Amount`,
        text: "Minimum Donation should be less than Goal Amount",
        icon: "error",
        confirmButtonText: "Close",
      });
    }

    const updatedCampaign = {
      userName,
      email,
      title,
      description,
      image,
      deadline,
      raisedAmount,
      goal,
      minDonation,
      campaignType,
    };

    console.log(updatedCampaign)
  };
  return (
    <div>
      {loading ? (
        <div className="w-full min-h-28 flex items-center justify-center">
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
      ) : (
        <form
          onSubmit={submitHandler}
          className="card-body grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              defaultValue={campaign?.userName}
              name="userName"
              type="text"
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={campaign.email}
              name="email"
              type="email"
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Banner Image</span>
            </label>
            <input
              defaultValue={campaign.image}
              name="photo"
              type="text"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              defaultValue={campaign.title}
              name="title"
              type="text"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              defaultValue={campaign.description}
              name="description"
              type="text"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <CustomSelect />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              defaultValue={campaign.deadline}
              name="deadline"
              type="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum Donation</span>
            </label>
            <input
              defaultValue={campaign.minDonation}
              name="minDonation"
              type="number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Raising Amount</span>
            </label>
            <input
              defaultValue={campaign.raisedAmount}
              name="raisedAmount"
              type="number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Goal Amount</span>
            </label>
            <input
              defaultValue={campaign.goal}
              name="goal"
              type="number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6 md:col-span-2">
            <button className="btn text-white bg-primary hover:text-primary">
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateMyCampaign;
