import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Vortex } from "react-loader-spinner";
import Swal from "sweetalert2";

const Donate = () => {
  const [campaign, setCampaign] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://give-ngrow-server.vercel.app/AllCampaign/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaign(data[0]);
        setLoading(false);
      });
  }, []);

  const { _id = "", title = "", deadline = "", goal = "" ,minDonation =''} = campaign;

  const submitHandler = (e,minDonation) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const deadline = form.deadline.value;
    const amount = form.amount.value;
    const goal = form.goal.value;

    let currentDate = new Date().toISOString().split("T")[0];
    const deadlineDate = new Date(deadline).toISOString().split("T")[0]

    if (currentDate > deadlineDate) {
      return Swal.fire({
        title: `Expired`,
        text: "Sorry Campaign Is Expired",
        icon: "info",
        confirmButtonText: "close",
      })
    }

    const donationAmount = Number.parseInt(amount)
    const goalAmount = Number.parseInt(goal)
    
    if(donationAmount < minDonation){
      return   Swal.fire({
        title: `Less Then Minimum Amount`,
        text: `Please Donate More Then ${minDonation}`,
        icon: "warning",
        confirmButtonText: "close",
      })
    }


    if(donationAmount > goalAmount){
      return  Swal.fire({
        title: `Out OF Goal`,
        text: "Please Donate Less Then Goal Amount",
        icon: "warning",
        confirmButtonText: "close",
      })
    }

    const donationData={name ,email,title,deadline,amount,goal}

    fetch('https://give-ngrow-server.vercel.app/donation',{
        method :'POST',
        headers :{'content-type' :"application/json"},
        body :JSON.stringify(donationData)
    })
    .then(res=>res.json())
    .then((data)=>{
        if(data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Donation successful",
                showConfirmButton: false,
                timer: 1500,
              })
              form.reset()
              navigate('/')
        }
    })
    .catch(err=>{
        Swal.fire({
            position: "center",
            icon: "error",
            title:err.message || err.code,
            showConfirmButton: false,
            timer: 1500,
          })
    })
  };

  const donationDate = new Date().toISOString();

  return (
    <div>
      {loading && (
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
      )}
      <div>
        <form
          onSubmit={(e)=>submitHandler(e,minDonation)}
          className="card-body grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              name="name"
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
              <span className="label-text">Title</span>
            </label>
            <input
              defaultValue={title}
              name="title"
              type="text"
              placeholder="Title"
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              defaultValue={deadline.split('T')[0]}
              name="deadline"
              type="text"
              placeholder="Deadline"
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Donation Amount</span>
            </label>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Goal</span>
            </label>
            <input
              defaultValue={goal}
              name="goal"
              type="text"
              placeholder="Goal"
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control mt-6 md:col-span-2">
            <button className="btn text-white bg-primary hover:text-primary">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
