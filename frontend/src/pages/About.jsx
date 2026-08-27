import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">ABOUT QUIZFLOW</span>

          <h1>
            Smarter Assessments.
            <span> Better Learning.</span>
          </h1>

          <p>
            QuizFlow is a modern quiz and assessment platform designed to
            help coaching institutes create engaging quizzes, evaluate
            students, and track performance effortlessly.
          </p>
        </div>

        <div className="about-hero-card">
          <div className="icon-circle">✓</div>
          <h3>Built for Modern Learning</h3>
          <p>
            Simple, powerful and scalable tools for teachers and students.
          </p>
        </div>
      </section>


      {/* About QuizFlow */}
      <section className="about-section">
        <div className="section-heading">
          <span>WHY QUIZFLOW?</span>
          <h2>Everything You Need to Manage Quizzes</h2>
          <p>
            From creating questions to analyzing student performance,
            QuizFlow makes the entire assessment process simple.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Create Quizzes</h3>
            <p>
              Create engaging quizzes with different types of questions
              and organize your assessments easily.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Performance</h3>
            <p>
              Monitor student results and understand performance
              through clear and useful insights.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Results</h3>
            <p>
              Automate grading and provide students with quick and
              accurate results.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Platform</h3>
            <p>
              Keep your quizzes and student information protected with
              a reliable assessment platform.
            </p>
          </div>

        </div>
      </section>


      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <span>OUR MISSION</span>

          <h2>
            Making Online Assessment
            <span> Simple & Effective</span>
          </h2>

          <p>
            Our mission is to empower educators with easy-to-use technology
            that saves time and helps students learn better. QuizFlow brings
            quiz creation, assessment, grading and performance tracking into
            one powerful platform.
          </p>

          <button className="mission-btn">
            Start Your Journey →
          </button>
        </div>

        <div className="mission-stat">
          <div>
            <h3>10K+</h3>
            <p>Questions</p>
          </div>

          <div>
            <h3>5K+</h3>
            <p>Students</p>
          </div>

          <div>
            <h3>99%</h3>
            <p>Accuracy</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Available</p>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to Transform Your Assessments?</h2>

        <p>
          Create smarter quizzes and help your students achieve more.
        </p>

        <button>Get Started →</button>
      </section>

    </div>
  );
}

export default About;