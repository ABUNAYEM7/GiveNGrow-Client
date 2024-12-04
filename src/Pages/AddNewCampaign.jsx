import React from "react";
import Info from "../components/Info";

const AddNewCampaign = () => {
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
        <form className="card-body grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              name="userName"
              type="text"
              placeholder="User Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Banner Image</span>
            </label>
            <input
              name="banner"
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
              <span className="label-text">Deadline</span>
            </label>
            <input
              name="deadline"
              type="text"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Raising Amount</span>
            </label>
            <input
              name="amount"
              type="text"
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
              name="goal"
              type="text"
              placeholder="Goal"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 md:col-span-2">
            <button className="btn text-white bg-primary hover:text-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
