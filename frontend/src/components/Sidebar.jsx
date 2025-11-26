// import React, { useState } from "react";
// import { ArrowRight, X, Users, PlusCircle, Edit, Calendar } from "lucide-react";
// import "../CSS/Managerdashboard.css";
// import { useNavigate } from "react-router-dom";


// function Sidebar() {
//   const [open, setOpen] = useState(true); // Sidebar toggle state
//    const navigate = useNavigate();

//   return (
//     <div className="flex h-screen bg-gray-100">
//     <div className={`bg-blue-700 text-white p-6 pt-10  ${open ? "w-64" : "w-20"}`}>
      
//       {/* Toggle Button */}<br /><br />
//       <button
//         onClick={() => setOpen(!open)}
//         className="absolute top-6 left-4 text-white"
//       >
//         {open ? <X size={40} /> : <ArrowRight size={40} />}
//       </button><br /><br />


//       <nav className="flex flex-col space-y-6 mt-20 font-medium">
//         <button className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded-xl gap-3">
//           <Users size={40} />
//           {open && <span>Add Student</span>}
//         </button><br /><br />

//         <button className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded-xl gap-3">
//           <PlusCircle size={40} />
//           {open && <span>Add Staff</span>}
//         </button><br /><br />

//         <button className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded-xl gap-3">
//           <Edit size={40} />
//           {open && <span>Edit Student</span>}
//         </button><br /><br />

//         <button className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded-xl gap-3">
//           <Edit size={40} />
//           {open && <span>Edit Staff</span>}
//         </button><br /><br />

//         <button className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded-xl gap-3">
//           <Calendar size={40} />
//           {open && <span>Apply Leave</span>}
//         </button><br /><br />
//       </nav>
//     </div>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import {
  ArrowRight,
  X,
  Users,
  PlusCircle,
  Edit,
  Calendar,
  ClipboardList,
  UserCheck,
  QrCode,
  BarChart2,
  Table2
} from "lucide-react";
import "../CSS/Managerdashboard.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  // IMPORTANT: Get the role from login
  const role = localStorage.getItem("role");  
  // Example: "manager", "hod", "staff", "student"

  // ---------- MENUS BASED ON ROLE ----------
  const menuItems = {
    manager: [
      { icon: <Users size={30} />, label: "Add Student" },
      { icon: <PlusCircle size={30} />, label: "Add Staff" },
      { icon: <Edit size={30} />, label: "Edit Student" },
      { icon: <Edit size={30} />, label: "Edit Staff" },
      { icon: <Calendar size={30} />, label: "Apply Leave" }
    ],

    hod: [
      { icon: <Users size={30} />, label: "Assign Staff to Class" },
      { icon: <ClipboardList size={30} />, label: "Approve Staff Leave" },
      { icon: <Calendar size={30} />, label: "Apply Leave" }

    ],

    staff: [
      { icon: <UserCheck size={30} />, label: "Approve Student Leave" },
      { icon: <Calendar size={30} />, label: "Apply Leave to HOD" },
      { icon: <QrCode size={30} />, label: "Generate OTP" },
      { icon: <BarChart2 size={30} />, label: "View Attendance" }
    ],

    student: [
      { icon: <Calendar size={30} />, label: "Apply Leave" },
      { icon: <QrCode size={30} />, label: "Mark Attendance" },
      { icon: <BarChart2 size={30} />, label: "Attendance %" },
      { icon: <Table2 size={30} />, label: "View Time Table" }

    ]
  };

  // Select menu based on role
  const items = menuItems[role] || [];

  return (
    <div className="flex h-screen bg-gray-100">

      <div
        className={`bg-blue-700 text-white p-6 pt-10 transition-all duration-300 ${
          open ? "w-64" : "w-20"
        }`}
      >

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-6 left-4 text-white"
        >
          {open ? <X size={40} /> : <ArrowRight size={40} />}
        </button>

        {/* DYNAMIC ROLE-BASED MENU */}
        <nav className="flex flex-col space-y-4 mt-20 font-medium">
          {items.map((item, index) => (
            <button
              key={index}
              className="flex items-center hover:bg-blue-600 p-3 rounded-xl gap-3"
            >
              {item.icon}
              {open && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

      </div>

    </div>
  );
}

export default Sidebar;
