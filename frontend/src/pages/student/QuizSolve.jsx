import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MdArrowBack,
  MdArrowForward,
  MdCheck,
  MdClose,
  MdFlag,
} from "react-icons/md";
import "./QuizSolve.css";
import api from "../../api/api";

const demoQuizData = {
  1: {
    id: 1,
    title: "Physics - Mechanics",
    subject: "Physics",
    timeLimit: 30,
    questions: [
      {
        id: 1,
        question:
          "A particle moves along a straight line with velocity v(t) = 3t² - 12t + 9. What is the acceleration at t = 2 seconds?",
        options: ["0 m/s²", "-3 m/s²", "3 m/s²", "6 m/s²"],
        correctAnswer: 1,
        explanation:
          "Acceleration is the derivative of velocity: a(t) = dv/dt = 6t - 12. At t = 2, a(2) = 6(2) - 12 = 0 m/s².",
      },
      {
        id: 2,
        question:
          "A block of mass 2 kg is placed on a frictionless inclined plane at 30°. What is the acceleration of the block down the plane?",
        options: ["9.8 m/s²", "4.9 m/s²", "8.5 m/s²", "2.45 m/s²"],
        correctAnswer: 1,
        explanation:
          "On a frictionless incline, acceleration a = g·sin(θ) = 9.8 × sin(30°) = 9.8 × 0.5 = 4.9 m/s².",
      },
      {
        id: 3,
        question:
          "A force of 10 N acts on a body of mass 2 kg for 3 seconds. What is the change in momentum of the body?",
        options: ["10 kg·m/s", "20 kg·m/s", "30 kg·m/s", "40 kg·m/s"],
        correctAnswer: 2,
        explanation:
          "Change in momentum = Force × Time = 10 N × 3 s = 30 kg·m/s (Impulse-momentum theorem).",
      },
      {
        id: 4,
        question:
          "A projectile is launched with an initial velocity of 20 m/s at an angle of 45°. What is the maximum height reached? (g = 10 m/s²)",
        options: ["10 m", "20 m", "5 m", "15 m"],
        correctAnswer: 0,
        explanation:
          "Max height H = (u²sin²θ)/2g = (20² × sin²45°)/20 = (400 × 0.5)/20 = 10 m.",
      },
      {
        id: 5,
        question:
          "A car moving at 20 m/s applies brakes and stops in 5 seconds. What is the distance covered during braking? (Assume uniform deceleration)",
        options: ["25 m", "50 m", "75 m", "100 m"],
        correctAnswer: 1,
        explanation:
          "Distance = average velocity × time = (20+0)/2 × 5 = 10 × 5 = 50 m.",
      },
    ],
  },
  2: {
    id: 2,
    title: "Chemistry - Organic Chemistry",
    subject: "Chemistry",
    timeLimit: 40,
    questions: [
      {
        id: 1,
        question: "What is the IUPAC name of CH₃-CH₂-CH₂-OH?",
        options: ["Propan-1-ol", "Propan-2-ol", "Ethanol", "Butan-1-ol"],
        correctAnswer: 0,
        explanation:
          "Three carbon chain with -OH on carbon 1 gives Propan-1-ol.",
      },
      {
        id: 2,
        question: "Which of the following shows geometrical isomerism?",
        options: ["2-butene", "1-butene", "propene", "ethene"],
        correctAnswer: 0,
        explanation:
          "2-butene has restricted rotation around C=C and different groups on each carbon, showing cis-trans isomerism.",
      },
      {
        id: 3,
        question:
          "The major product of reaction of 2-methyl-2-butene with HBr in presence of peroxide is:",
        options: [
          "2-bromo-2-methylbutane",
          "3-bromo-2-methylbutane",
          "1-bromo-2-methylbutane",
          "2-bromo-3-methylbutane",
        ],
        correctAnswer: 1,
        explanation:
          "In presence of peroxide, anti-Markovnikov addition occurs (Kharasch effect). Br adds to less substituted carbon.",
      },
      {
        id: 4,
        question: "Which reagent converts carboxylic acid to ester?",
        options: ["SOCl₂", "PCl₅", "R-OH/H⁺", "LiAlH₄"],
        correctAnswer: 2,
        explanation:
          "Fischer esterification: Carboxylic acid + Alcohol (with H⁺ catalyst) → Ester + Water.",
      },
      {
        id: 5,
        question: "What is the hybridization of carbon in benzene?",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctAnswer: 1,
        explanation:
          "Each carbon in benzene forms 3 σ bonds (2 C-C, 1 C-H) and has 1 p orbital for π bonding → sp² hybridized.",
      },
    ],
  },
  3: {
    id: 3,
    title: "Mathematics - Calculus",
    subject: "Mathematics",
    timeLimit: 25,
    questions: [
      {
        id: 1,
        question: "Find the derivative of f(x) = x³sin(x) at x = π/2.",
        options: ["π²/4", "3π²/4", "π²/2", "3π²/2"],
        correctAnswer: 1,
        explanation:
          "f'(x) = 3x²sin(x) + x³cos(x). At x = π/2: f'(π/2) = 3(π/2)²(1) + (π/2)³(0) = 3π²/4.",
      },
      {
        id: 2,
        question: "Evaluate ∫₀¹ x²eˣ dx.",
        options: ["e - 2", "2e - 5", "e - 1", "2 - e"],
        correctAnswer: 0,
        explanation:
          "Using integration by parts twice: ∫x²eˣdx = x²eˣ - 2xeˣ + 2eˣ. From 0 to 1: (e - 2e + 2e) - (0 - 0 + 2) = e - 2.",
      },
      {
        id: 3,
        question: "The limit limₓ→₀ (sin(3x)/x) equals:",
        options: ["0", "1", "3", "∞"],
        correctAnswer: 2,
        explanation:
          "limₓ→₀ (sin(3x)/x) = 3 × limₓ→₀ (sin(3x)/3x) = 3 × 1 = 3.",
      },
      {
        id: 4,
        question: "If f(x) = ln(x² + 1), then f''(0) = ?",
        options: ["0", "1", "2", "-1"],
        correctAnswer: 2,
        explanation:
          "f'(x) = 2x/(x²+1). f''(x) = (2(x²+1) - 2x(2x))/(x²+1)² = (2 - 2x²)/(x²+1)². f''(0) = 2/1 = 2.",
      },
      {
        id: 5,
        question: "The area bounded by y = x², y = 0, x = 0 and x = 2 is:",
        options: ["4/3", "8/3", "16/3", "32/3"],
        correctAnswer: 1,
        explanation:
          "Area = ∫₀² x² dx = [x³/3]₀² = 8/3 - 0 = 8/3 square units.",
      },
    ],
  },
};

function QuizSolve() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState({
    questions: []
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/quiz/single/${quizId}`);
      if (response.data?.success) {
        setQuiz(response.data?.data);
      } else {
        alert("Some Error Occured");
      }
    }

    getData();
  }, []);

  const handleAnswerSelect = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: optionIndex }));
  };

  const handleFlag = () => {
    setFlagged((prev) => ({
      ...prev,
      [currentQuestion]: !flagged[currentQuestion],
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    navigate(`/quiz/${quizId}/result`, { state: { answers, quiz } });
  };

  const question = quiz?.questions?.[currentQuestion];

  return (
    <div className="quiz-solve-page">
      <header className="solve-header">
        <button className="back-btn" onClick={() => navigate("/quizzes")}>
          <MdArrowBack />
        </button>
        <div className="quiz-info">
          <h2>{quiz?.title}</h2>
          <span className="subject-tag">{quiz?.subject}</span>
        </div>
      </header>

      <div className="solve-content">
        <div className="question-panel">
          <div className="question-header">
            <div className="question-nav">
              <button
                className="nav-btn"
                onClick={handlePrev}
                disabled={currentQuestion === 0}
              >
                <MdArrowBack />
                <span>Previous</span>
              </button>
              <span className="question-counter">
                Question {currentQuestion + 1} of {quiz?.questions.length}
              </span>
              <button
                className="nav-btn"
                onClick={handleNext}
                disabled={currentQuestion === quiz?.questions.length - 1}
              >
                <span>Next</span>
                <MdArrowForward />
              </button>
            </div>
            <button
              className="flag-btn"
              onClick={handleFlag}
              aria-label="Flag question"
            >
              <MdFlag className={flagged[currentQuestion] ? "flagged" : ""} />
              <span>{flagged[currentQuestion] ? "Flagged" : "Flag"}</span>
            </button>
          </div>

          <div className="question-content">
            <div className="question-text">
              <span className="q-number">Q{currentQuestion + 1}.</span>
              <p>{question?.title}</p>
            </div>

            <div className="options-grid">
              {question?.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${answers[currentQuestion] === index ? "selected" : ""}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="option-label">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {answers[currentQuestion] === index && (
                    <MdCheck className="check-icon" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="question-footer">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((currentQuestion + 1) / quiz?.questions.length) * 100}%`,
                }}
              />
            </div>
            <div className="progress-text">
              {currentQuestion + 1} / {quiz?.questions.length} questions
              answered
            </div>
          </div>
        </div>

        <aside className="question-palette">
          <h3>Question Palette</h3>
          <div className="palette-grid">
            {quiz?.questions.map((q, index) => (
              <button
                key={q.id}
                className={`palette-item ${
                  index === currentQuestion ? "current" : ""
                } ${answers[index] !== undefined ? "answered" : ""} ${
                  flagged[index] ? "flagged" : ""
                }`}
                onClick={() => setCurrentQuestion(index)}
              >
                <span className="palette-number">{index + 1}</span>
                {flagged[index] && <MdFlag className="palette-flag" />}
              </button>
            ))}
          </div>
          <button
            className="submit-quiz-btn"
            onClick={() => setShowSubmitConfirm(true)}
          >
            <MdCheck />
            Submit Quiz
          </button>
        </aside>
      </div>

      {showSubmitConfirm && (
        <div
          className="modal-overlay"
          onClick={() => setShowSubmitConfirm(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Submit Quiz?</h3>
            <p>
              Are you sure you want to submit? You cannot change answers after
              submission.
            </p>
            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowSubmitConfirm(false)}
              >
                Cancel
              </button>
              <button className="confirm-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizSolve;
