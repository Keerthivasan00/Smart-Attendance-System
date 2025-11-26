// import React, { useState } from "react";
// import { ArrowRight,Menu, X, User, PlusCircle, Edit, Users, Calendar } from "lucide-react";
// import "../CSS/Managerdashboard.css";
// import student from "../assets/student.png";
// import staff from "../assets/staff.png";
// import department from "../assets/dept.png";
// import AddStudent from "../pages/AddStudent";
// import ManagerSidebar from "../components/Sidebar";


// function Managerdashboard() {
//   const [open, setOpen] = useState(true); 
//   const [showAddStudent, setShowAddStudent] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-100">

//       {/* SIDEBAR */}
//       <ManagerSidebar/>

//       {/* MAIN CONTENT AREA */}
//       <div className="flex-1 flex flex-col">

//   {/* TOP BAR */}
//   <div className="topbar">
//     <div className="topbar-profile">
//       <span>Manager</span>
//       <img src="https://i.pravatar.cc/80?img=12" alt="profile" />
//     </div>
//   </div>

//   {/* MAIN CONTENT */}
//   <div className="dashboard-container">
//     <h1 className="dashboard-title">Manager Dashboard</h1>
//     <p className="dashboard-subtext">
//       Manage students, staff and send leave requests.
//     </p>



// <div className="card-grid">

//   <div className="card card-blue">
//     <div className="card-left">
//       <h3>Total Students</h3>
//       <p>1320</p>
//     </div>
//     <img src={student} alt="students" className="card-icon" />
//   </div>

//   <div className="card card-green">
//     <div className="card-left">
//       <h3>Total Staff</h3>
//       <p>350</p>
//     </div>
//     <img src={staff} alt="staff" className="card-icon" />
//   </div>

//   <div className="card card-yellow">
//     <div className="card-left">
//       <h3>Total Departments</h3>
//       <p>20</p>
//     </div>
//     <img src={department} alt="departments" className="card-icon" />
//   </div>

// </div>

//     </div>
//     </div>
//     </div>
//   );
// }

// export default Managerdashboard

const ManagerDashboard = () => {
  return (
    <div>
      <h2>Manager Dashboard</h2>

      <div className="cards">
        <div className="card">Add / Edit Student</div>
        <div className="card">Add / Edit Staff</div>
        <div className="card">Apply Leave to Admin</div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
