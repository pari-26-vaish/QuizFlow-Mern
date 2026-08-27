import { Link } from "react-router-dom";
import { MdAdd, MdDelete, MdOutlineQuiz } from "react-icons/md";
import api from "../../api/api";
import "./AdminManageQuizzes.css";
import { useEffect, useState } from "react";

const quizzesData = [
  { id: 1, name: "Physics - Motion & Force" },
  { id: 2, name: "Chemistry - Periodic Table" },
  { id: 3, name: "Maths - Trigonometry" },
  { id: 4, name: "Biology - Cell Structure" },
  { id: 5, name: "English - Grammar Basics" },
];

function AdminManageQuizzes() {

  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await api.get("/quiz/get-all");
      if (response.data?.success) {
        setQuizzes(response.data?.data);
      }
      else {
        alert("some error occured");
      }

    }
    getData();
  }, []);

  async function handleDelete(quizId) {
    const response = await api.post("/quiz/delete-quiz", {
      quizId: quizId
    });
    if (response.data.success) {
      alert("quizz deleted successfully");

      setQuizzes(
        quizzes.filter((quiz) => quiz._id !== quizId)
      );
    }
    else {
      alert("some error occured");
    }
  }

  return (
    <section className="manage-quizzes-section">
      {/* Header */}
      <div className="manage-quizzes-header">
        <div>
          <h1>Manage Quizzes</h1>
          <p>View all created quizzes</p>
        </div>
        <Link to="/admin/create-quiz" className="manage-quizzes-add-btn">
          <MdAdd />
          Add Quiz
        </Link>
      </div>

      {/* Quizzes List */}
      <div className="manage-quizzes-list">
        {quizzes.map((quiz) => (
          <div className="quiz-list-card" key={quiz._id}>
            <div className="quiz-list-icon">
              <MdOutlineQuiz />
            </div>
            <span className="quiz-list-name">{quiz.title}</span>
            <button className="quiz-list-delete-btn" title="Delete" 
            onClick={()=>handleDelete(quiz._id)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminManageQuizzes;