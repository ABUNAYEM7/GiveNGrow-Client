import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Swal from "sweetalert2";
import Info from '../components/Info';
import { useNavigate } from 'react-router';

const MyCamp = () => {
    const [myCampaign,setMyCampaign] =useState([])
    const navigate= useNavigate()

    // data-fetching
    const {user} = useContext(AuthContext)
    const email = user?.email

    useEffect(()=>{
      fetch(`https://give-ngrow-server.vercel.app/myCampaign/${email}`)
      .then(res=>res.json())
      .then(data=>{
        if(data.length >0){
          setMyCampaign(data)
        }
      })
    },[email])

    // deadline-validation
    const getStatus = (deadline)=>{
      let currentDate = new Date();
      currentDate.setHours(0,0,0,0)
  
      const deadlineDate = new Date(deadline)
      deadlineDate.setHours(0,0,0,0)
  
      if (currentDate > deadlineDate) {
        return 'Expired'
      } else {
        return 'Active'
      }
    }

    // updateHandler
    const updateHandler =(id)=>{
      navigate(`/AllCampaign/updateMyCampaign/${id}`)
    }

    // deleteHandler
    const deleteHandler =(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://give-ngrow-server.vercel.app/deleteMyCampaign/${id}`,{
            method : 'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount > 0){
              Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Campaign Deleted Successfully",
                    showConfirmButton: false,
                    timer: 1500,
              })
              const remainingCampaign = myCampaign.filter(camp=>camp._id !== id)
              setMyCampaign(remainingCampaign)
            }
          })
          .catch(err=>{
            Swal.fire({
              title: `Update Fail`,
              text: err.message || err.code,
              icon: "error",
              confirmButtonText: "close",
            })
          })
        }
      });

    }

    // table-columns
    const columns = [
      { id: "No:", label: "No:", minWidth: 50 },
      { id: "title", label: "Title", minWidth: 100 },
      { id: "deadline", label: "Status", minWidth: 100 },
      { id: "minDonation", label: "Minimum Donation", minWidth: 50 },
      { id: "goal", label: "Target Amount", minWidth: 50 },
      { id: "Update", label: "Update Campaign", minWidth: 150 },
      { id: "delete", label: "Delete Campaign", minWidth: 150 },
    ];


    if (myCampaign.length <= 0) {
      return <h3 className='text-3xl font-bold text-primary text-center my-12'>No Campaign Added</h3>;
    }

  return (
    
    <div className='my-12 p-4'>
      {/* campaign-info-container */}
      <div>
        <Info
         title={'Explore Inspiring Campaigns'}
         subtitle={'Discover the stories and causes created by our community. Together, we can make a difference.'}
         />
      </div>
      {/* userCampaign-table-container */}
      <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table"><TableHead className="bg-primary text-white">
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id} 
                    align={column.align || "left"}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow></TableHead>
            <TableBody>
              {myCampaign.map((row, rowIndex) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={rowIndex} 
                >
                  {columns.map((column) => {
                    let value = column.id === "No:" ? rowIndex + 1 : row[column.id];
                      if(column.id === 'deadline'){
                        value = getStatus(row.deadline)
                      }
                     if(column.id === 'Update'){
                      return(
                        <TableCell
                      key={`${row.id}-${column.id}`} 
                      align={column.align || "left"}
                    >
                      <button 
                      onClick={()=>updateHandler(row._id)}
                      className="btn bg-secondary text-white  border-none hover:text-secondary">
                        Update Campaign
                      </button>
                    </TableCell>
                      )
                     }
                     if(column.id === 'delete'){
                      return(
                        <TableCell
                      key={`${row.id}-${column.id}`} 
                      align={column.align || "left"}
                    >
                      <button 
                      onClick={()=>deleteHandler(row._id)}
                      className="btn bg-primary text-white  border-none hover:text-primary">
                        Delete Campaign
                      </button>
                    </TableCell>
                      )
                     }
                    return (
                      <TableCell
                        key={`${row.id}-${column.id}`} 
                        align={column.align || "left"}
                      >
                        {value || "--"} 
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      </div>
    </div>
  )
}

export default MyCamp
