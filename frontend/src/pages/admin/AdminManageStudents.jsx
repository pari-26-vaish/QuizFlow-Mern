import { useState } from "react";
import { MdAdd, MdEdit, MdDelete, MdClose } from "react-icons/md";
import api from "../../api/api";
import "./AdminManageStudents.css";
import { useEffect } from "react";

const studentsData = [
  { id: 1, name: "Aarav Sharma", email: "aarav.sharma@gmail.com", batch: "Batch 2026 - A" },
];

function AdminManageStudents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    batch: "",
  });

  const [students, setStudents] = useState([]);
const [batches, setBatches] = useState([]);

function handleChange(e) {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
}

async function getStudents() {
  const response = await api.get("/user/get-all-students");
  if (response.data?.success) {
    setStudents(response.data?.data);
  } else {
    alert("some error occured in fetching students");
  }
}

async function getBatches() {
  const response = await api.get("/batch/get-all");
  if (response.data?.success) {
    setBatches(response.data?.data);
  } else {
    alert("some error occured in fetching batches");
  }
}

useEffect(() => {
  getStudents();
  getBatches();
}, []);

  
  async function handleSubmit() {
    const response=await api.post("/user/add-user",
      {
        name:data.name,
        email:data.email,
        password:data.password,
        batch:data.batch,
      }
    );
    if(response.data?.success){
      alert("student added successfully");
      setIsModalOpen(false);
      setData({name:"", email:"",password:"",batch:""})
      getStudents();
    }
    else{
      alert( "some error occured");
    }
    
  }

  async function handleDelete(userId) {
    const response = await api.post("/user/delete-user", {
        userId: userId
    });

    if (response.data.success) {
        alert("Student deleted successfully");

        setStudents(
            students.filter((student) => student._id !== userId)
        );
    }
}

  return (
    <section className="manage-students-section">
      {/* Header */}
      <div className="manage-students-header">
        <div>
          <h1>Manage Students</h1>
          <p>View and manage all enrolled students</p>
        </div>
        <button className="manage-students-add-btn" onClick={() => setIsModalOpen(true)}>
          <MdAdd />
          Add Student
        </button>
      </div>

      {/* Table */}
      <div className="manage-students-table-wrapper">
        <table className="manage-students-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>Joined Batch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>
                  <div className="student-name-cell">
                    <span className="student-avatar">
                      {student.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    {student.name}
                  </div>
                </td>
                <td>{student.email}</td>
                <td>
                  <span className="student-batch-badge">{student.batch}</span>
                </td>
                <td>
                  <div className="student-action-btns">
                    <button className="student-edit-btn" title="Edit">
                      <MdEdit />
                    </button>
                    <button className="student-delete-btn" title="Delete" onClick={()=>{
                      handleDelete(student._id)
                    }}>
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Student</h2>
              <MdClose className="modal-close-icon" onClick={() => setIsModalOpen(false)} />
            </div>
            <div className="modal-body">
              <div className="modal-form-group">
                <label>Student Name</label>
                <input type="text" placeholder="Enter student name"
                  value={data.name}
                  name="name"
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>

              <div className="modal-form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter student email"
                  value={data.email}
                  name="email"
                  onChange={handleChange}
                  autoComplete="new-password" />
              </div>

              <div className="modal-form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter student password"
                  value={data.password}
                  name="password"
                  onChange={handleChange}
                  autoComplete="new-password" />
              </div>

              <div className="modal-form-group">
                <label>Batch</label>
                <select name="batch" onChange={handleChange} value={data.batch}>
                  <option hidden>Select Batch</option>
                  {
                    batches.map((batch) => (
                      <option key={batch._id} value={batch._id}>{batch.name}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-cancel-btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="modal-submit-btn" onClick={handleSubmit}>Add Student

              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminManageStudents;