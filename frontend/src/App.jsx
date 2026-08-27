import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PublicLayout from "./layouts/PublicLayout";
import AdminQuizBuilder from "./pages/admin/AdminQuizBuilder";
import AdminManageQuizzes from "./pages/admin/AdminManageQuizzes";
import AdminManageStudents from "./pages/admin/AdminManageStudents";
import AdminManageBatches from "./pages/admin/AdminManageBatches";
import QuizList from "./pages/student/QuizList";
import QuizSolve from "./pages/student/QuizSolve";
import QuizResult from "./pages/student/QuizResult";

function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          {/* public layout */}
          <Route path="/" element={<PublicLayout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
             <Route path="quizzes" element={<QuizList />}></Route>
              <Route path="quiz/:quizId/solve" element={<QuizSolve />}></Route>
               <Route path="quiz/:quizId/result" element={<QuizResult />}></Route>
          </Route>

          {/* admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="create-quiz" element={<AdminQuizBuilder />} />
          <Route path="manage-students" element={<AdminManageStudents/>} />
          <Route path="manage-batches" element={<AdminManageBatches />} />
          <Route path="manage-quizzes" element={<AdminManageQuizzes />} />
        </Route>
        </Routes>
    
    </BrowserRouter >
  );
}

export default App;

//rfce: react functional component export