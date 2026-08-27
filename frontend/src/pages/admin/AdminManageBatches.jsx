import { useState,useEffect } from "react";
import { MdAdd, MdDelete, MdClose } from "react-icons/md";
import api from "../../api/api";
import "./AdminManageBatches.css";

function AdminManageBatches() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [batches, setBatches] = useState([]);
  const [batchName, setBatchname] = useState("");
  
    async function getData() {
      const response = await api.get("/batch/get-all");
      if (response.data?.success) {
        setBatches(response.data?.data);
      }
      else {
        alert("some error in getting data");
      }

    }
    useEffect(()=>{
      getData();
    },[]);
    
  async function handleSubmit() {
    const response = await api.post("/batch/add-batch", { name: batchName });
    if (response.data?.success) {
      alert("batch added");
      setIsModalOpen(false);
      setBatchname("");
      getData();
    }
    else {
      alert("some error occured");
    }

  }

  async function handleDelete(batchId) {
    const response = await api.post("/batch/delete-batch", {
        batchId: batchId
    });

    if (response.data.success) {
        alert("batch deleted");
        setBatches(batches.filter(batch => batch._id !== batchId));
    }
}

  return (
    <section className="manage-batches-section">
      {/* Header */}
      <div className="manage-batches-header">
        <div>
          <h1>Manage Batches</h1>
          <p>View and manage all coaching batches</p>
        </div>
        <button className="manage-batches-add-btn" onClick={() => setIsModalOpen(true)}>
          <MdAdd />
          Add Batch
        </button>
      </div>

      {/* Batches Grid */}
      <div className="manage-batches-grid">
        {batches.map((batch) => (
          <div className="batch-card" key={batch.id}>
            <div className="batch-card-icon">
              <span className="batch-card-initial">{batch?.name?.split(" - ")[1]}</span>
            </div>
            <h3>{batch.name}</h3>
            <button className="batch-delete-btn" title="Delete" onClick={()=>handleDelete(batch._id)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>

      {/* Add Batch Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Batch</h2>
              <MdClose className="modal-close-icon" onClick={() => setIsModalOpen(false)} />
            </div>
            <div className="modal-body">
              <div className="modal-form-group">
                <label>Batch Name</label>
                <input type="text" placeholder="Enter batch name" value={batchName} onChange={(e) => setBatchname(e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-cancel-btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="modal-submit-btn" onClick={handleSubmit}>Add Batch</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminManageBatches;