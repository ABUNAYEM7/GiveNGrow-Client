import React from 'react'
import Info from '../components/Info'

const AddNewCampaign = () => {
  return (
    <div>
      {/* info-container */}
      <div>
        <Info
        title ={'Create Your Own Campaign'}
        subtitle ={'Empower change by launching a meaningful initiative and making a lasting impact.'}
        />
      </div>
      {/* form-container */}
      <div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User N</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default AddNewCampaign
