import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-tag">CONTACT US</span>

          <h1>
            Let's Build Better
            <span> Learning Together.</span>
          </h1>

          <p>
            Have a question, feedback, or need help with QuizFlow?
            Our team is here to help you make the most of your
            assessment experience.
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact-section">

        {/* Contact Information */}
        <div className="contact-info">

          <span className="contact-small-title">GET IN TOUCH</span>

          <h2>We'd Love to Hear From You</h2>

          <p>
            Whether you have a question about our platform, need
            assistance, or want to share your feedback, feel free
            to reach out to us.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email Us</h3>
                <p>support@quizflow.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Our Office</h3>
                <p>Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

          </div>
        </div>


        {/* Contact Form */}
        <div className="contact-form-container">

          <h2>Send Us a Message</h2>

          <form>

            <div className="form-row">

              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message →
            </button>

          </form>

        </div>

      </section>


      {/* FAQ / Support Section */}
      <section className="contact-support">

        <div>
          <span>NEED HELP?</span>

          <h2>We're Here to Support You</h2>

          <p>
            Our goal is to make QuizFlow simple, reliable and
            easy to use for educators and students.
          </p>
        </div>

        <button>
          Explore QuizFlow →
        </button>

      </section>

    </div>
  );
}

export default Contact;