import React, { useContext, useState } from "react";
import Info from "../components/Info";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Select from "react-select";

const AddNewCampaign = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { user } = useContext(AuthContext);

  const submitHandler = (e,selectedOption) => {
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

    if(!selectedOption){
      return Swal.fire({
        title: `Invalid Campaign Type`,
        text: "Please Selected Campaign Type",
        icon: "error",
        confirmButtonText: "close",
      });
    }
    const campaignType = selectedOption?.value;

    let currentDate = new Date().toISOString().split("T")[0];
    const deadlineDate = new Date(deadline).toISOString().split("T")[0];

    if (currentDate > deadlineDate) {
      return Swal.fire({
        title: `Back Dated`,
        text: "Please Provide Valid Deadline",
        icon: "error",
        confirmButtonText: "close",
      });
    }

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
        text: "Rising Amount should be less then Goal Amount",
        icon: "error",
        confirmButtonText: "close",
      });
    }

    if (Number.parseFloat(minDonation) > Number.parseFloat(goal)) {
      return Swal.fire({
        title: `Invalid Amount`,
        text: "Minimum Donation should be less then Goal Amount",
        icon: "error",
        confirmButtonText: "close",
      });
    }

    const campaignData = {
      userName,
      email,
      title,
      description,
      image,
      deadline,
      raisedAmount,
      goal,
      minDonation,
      campaignType
    };

    fetch("http://localhost:5000/newCampaign", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(campaignData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: `Congratulations`,
            text: "Campaign Created Successfully",
            icon: "success",
            confirmButtonText: "Thanks",
          });
          form.reset();
        }
      })
      .catch((err) => {
        Swal.fire({
          title: `Sorry`,
          text: err.message || err.code,
          icon: "error",
          confirmButtonText: "Thanks",
        });
      });
  };

  const options = [
    { value: " Personal issue", label: " Personal issue" },
    { value: "Startup", label: "startup" },
    { value: " Business", label: " Business" },
    { value: "Creative ideas", label: "Creative ideas" },
    { value: "Social Work", label: "Social Work" },
  ];

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#E07A5F" : "#D1D5DB",
      outlineColor: "#E07A5F", 
      backgroundColor: state.isFocused ? "#F8E5E1" : "transparent",
      padding: "0.5rem",
      borderRadius: "0.375rem",
      transition: "border-color 0.2s ease, background-color 0.2s ease",
  
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: state.isFocused ? "#4A5568" : "transparent",
        borderColor: state.isFocused ? "#E07A5F" : "#2D3748", 
      },
    }),
  
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "#F8E5E1", 
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      borderRadius: "0.375rem",
  
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: "#2D3748", 
      },
    }),
  
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected
        ? "#E07A5F" 
        : state.isFocused
        ? "#F8E5E1" 
        : "transparent", 
  
      color: state.isSelected ? "#FFFFFF" : "#4A5568", 
      padding: "0.5rem",
      borderRadius: "0.375rem",
  
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: state.isSelected
          ? "#E07A5F" 
          : state.isFocused
          ? "#4A5568"
          : "transparent", 
  
        color: state.isSelected ? "#FFFFFF" : "#E2E8F0", 
      },
    }),
  
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isSelected
        ? "#B2BEB5" 
        : "#000000", 
  
      "@media (prefers-color-scheme: dark)": {
        color: state.isSelected ? "#E2E8F0" : "#2A2A2A", 
      },
    }),
  };

  const onchangeHandler =(selectedValue)=>{
    setSelectedOption(selectedValue)
  }

  
  return (
    <div>
      {/* info-container */}
      <div>
        <Info
          title={"Create Your Own Campaign"}
          subtitle={
            "Empower change by launching a meaningful initiative and making a lasting impact."
          }
        />
      </div>
      {/* form-container */}
      <div>
        <form
          onSubmit={(e)=>submitHandler(e,selectedOption)}
          className="card-body grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              name="userName"
              type="text"
              placeholder="User Name"
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Banner Image</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Image URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Campaign Type</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={onchangeHandler}
              options={options}
              styles={customStyles}
              classNamePrefix="react-select"   
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              name="deadline"
              type="date"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum Donation</span>
            </label>
            <input
              name="minDonation"
              type="number"
              placeholder="500"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Raising Amount</span>
            </label>
            <input
              name="raisedAmount"
              type="number"
              placeholder="Amount"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Goal Amount</span>
            </label>
            <input
              name="goal"
              type="number"
              placeholder="Goal"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 md:col-span-2">
            <button className="btn text-white bg-primary hover:text-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
