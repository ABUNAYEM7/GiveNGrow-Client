import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Swal from "sweetalert2";

const AllCampaignCards = () => {
  const [allCampaign, setAllCampaign] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/AllCampaign")
      .then((res) => res.json())
      .then((data) => setAllCampaign(data));
  }, []);

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

  const risingHandler = ()=>{
    const sortedByRising = [...allCampaign].sort((a,b)=>{
        return b.raisedAmount - a.raisedAmount
    })
    setAllCampaign(sortedByRising)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sorted By Rising Amount",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const targetHandler =()=>{
    const sortByTargetAmount = [...allCampaign].sort((a,b)=>{
      return a.goal - b.goal;
  })
  setAllCampaign(sortByTargetAmount)
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Sorted By Target Amount",
    showConfirmButton: false,
    timer: 1500
  });
  }

  const donateHandler =(deadline)=>{
    const status = getStatus(deadline)
    if(status === 'Active'){
      console.log('Your Donation on process')
    }else if(status === 'Expired'){
      Swal.fire({
        title: "Sorry",
        text: "The Campaign Already Expired",
        icon: "error"
      });
    }
  }

  const columns = [
    { id: "No:", label: "No:", minWidth: 50 },
    { id: "title", label: "Title", minWidth: 100 },
    { id: "deadline", label: "Status", minWidth: 100 },
    { id: "raisedAmount", label: "Raised Amount", minWidth: 50 },
    { id: "goal", label: "Target Amount", minWidth: 50 },
    { id: "Contribute", label: "Contribution", minWidth: 50 },
  ];

  return (
    <div >
       <div className="flex items-center justify-center my-6">
       <div className="flex flex-col items-center gap-5">
       <h3 className="text-3xl font-bold text-primary">Sort it, simplify it, <span className="text-secondary">find it faster!</span></h3>
       <div className="flex flex-row gap-5">
        <button 
        onClick={risingHandler}
        className="btn bg-secondary text-white hover:text-secondary">Raising Amount</button>
        <button 
        onClick={targetHandler}
        className="btn bg-primary text-white hover:text-primary">Target Amount</button>
       </div>
       </div>
       </div>
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
              {allCampaign.map((row, rowIndex) => (
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
                      if(column.id === 'Contribute'){
                        return(
                          <TableCell
                        key={`${row.id}-${column.id}`} 
                        align={column.align || "left"}
                      >
                        <button 
                        onClick={()=>donateHandler(row.deadline)}
                        className="btn bg-primary text-white  border-none hover:text-primary">
                          Donate Now
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
  );
};

export default AllCampaignCards;
