import React from 'react';
import '../styles/Header.css';

import profilePicture from './JOP.jpeg'; // Adjust the path accordingly
import projectImage1 from './image1.png'; // Adjust the path accordingly
import projectImage2 from './image3.png'; // Adjust the path accordingly
import projectImage3 from './image2.png'; // Adjust the path accordingly
import projectImage4 from './image4.png'; // Adjust the path accordingly
import mainpic from './ok.jpg'; // Adjust the path accordingly
import vidyasagarLogo from './vidyasagar.png'; // Adjust the path accordingly
import mitSquareLogo from './mitsq.jpeg'; // Adjust the path accordingly
import dscLogo from './dsc.jpeg'; 




export const Header = () => {
  return (
    <>
       <header className="header">
        <div className="header-content">
          <div className="text-content">
            <h1>Hello, I'm Prashanth G <span role="img" aria-label="wave">👋</span></h1>
            <p>I am Prashanth, a pre-fnal year B.Tech in Computer Science and Engineering student at SRM Institute of Science and Technology with a strong interest in Sofware
Development and Machine Learning. I bring a deep understanding of data structures, operating systems, and database
management systems, with technical expertise in C++, Python, web development, and machine learning.
Recognized as a competent leader, I excel in self-managing independent projects and also collaborating efectively as
part of a productive team.</p>
            <div className="social-links">
              <a href="https://github.com/prashx1908" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/prashanth-g-399225202/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <img src={mainpic} alt="Prashanth" className="profile-picture1" />
        </div>
      </header>

      <main className="main-content">
      <section id="about-me" className="about-me-section">
        <h2>About Me</h2>
        <div className="about-me-content">
          <div className="about-me-text">
            <p>
              Hello! I’m Prashanth, a passionate and dedicated Computer Science student currently pursuing my B.Tech at SRM Institute of Science and Technology, Chennai. With a CGPA of 9.82, I have developed a solid foundation in various areas of technology, particularly in machine learning, web development, and UI/UX design.
            </p>
            <p>
              My journey in machine learning has been exciting and fulfilling. I have built predictive models and algorithms using Python and libraries such as Scikit-learn. One of my notable projects was developing a postpartum depression prediction model, which earned the First Prize at the WTM She Innovates Hackathon. This experience ignited my passion for creating impactful solutions through data-driven insights.
            </p>
            <p>
              In web development, I am proficient in HTML, CSS, JavaScript, and frameworks like React.js and Node.js. I take pride in building user-friendly web applications that prioritize user experience and responsiveness. My expertise in UI/UX design allows me to craft visually appealing and intuitive interfaces, ensuring that every interaction is seamless and engaging.
            </p>
            <p>
              Finally, some quick bits about me:
            </p>
            <ul>
              <li>B.Tech. in Computer Engineering</li>
              <li>UI/UX Designer</li>
              <li>Web Developer</li>
              <li>Machine Learning Enthusiast</li>
            </ul>
          </div>
          <img src={profilePicture} alt="About Me" className="profile-picture" />
        </div>
      </section>

{/* Skills Section */}
<section id="skills" class="skills-section">
   <h2>Skills</h2>
   <div class="skills-grid">
     <div class="skill-item">
       <i class="fab fa-js"></i> JavaScript
     </div>

     <div class="skill-item">
       <i class="fab fa-react"></i> React
     </div>

     <div class="skill-item">
       <i class="fas fa-database"></i> PostgreSQL
     </div>

     <div class="skill-item">
       <i class="fab fa-css3-alt"></i> Tailwind CSS
     </div>

     <div class="skill-item">
       <i class="fab fa-figma"></i> Figma
     </div>

     <div class="skill-item">
       <i class="fab fa-git"></i> Git
     </div>

     <div class="skill-item">
       <i class="fab fa-python"></i> Python
     </div>

     <div class="skill-item">
       <i class="fas fa-database"></i> MySQL
     </div>

     <div class="skill-item">
       <i class="fab fa-cuttlefish"></i> C++
     </div>
     <div className="skill-item">
              <i className="fas fa-robot"></i> Machine Learning
            </div>
            <div className="skill-item">
              <i className="fas fa-microphone"></i> Public Speaking
            </div>
            <div className="skill-item">
              <i className="fas fa-calendar-alt"></i> Event Management
            </div>
          
            <div className="skill-item">
              <i className="fas fa-users"></i> Leadership
            </div>
   </div>
</section>

      {/* Experience Section */}

      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>Techincal Intern</h3>
          <p>VidyaSagar CSO</p>
          <p>June 2024 - July 2024</p>
          <ul>
            <li>Developed an integrated student management system using Python, Django, and PostgreSQL, enhancing both user experience and system performance.</li>
            <li>Collaborated with the development team to implement new features and optimize existing ones, ensuring seamless functionality and user satisfaction.</li>
            <li>PParticipated in regular code reviews and provided constructive feedback to improve code quality.</li>
          </ul>
          <img src={vidyasagarLogo} alt="VidyaSagar CSO" className="experience-logo" />

        </div>
        <div className="experience-card">
          <h3>Research Intern</h3>
          <p>MIT Square, London</p>
          <p>Sep 2023 - Dec 2023</p>
          <ul>
            <li>Worked on energy-efficient cooling solutions for modern data centers, focusing on sustainable technological advancements.</li>
            <li>Conducted research and analysis to evaluate the effectiveness of various cooling methods, contributing to the development of innovative solutions.</li>
            <li>Recognized as part of the Best Intern Team of the Year 2023 for outstanding collaboration and project outcomes.</li>
          </ul>
          <img src={mitSquareLogo} alt="MIT Square" className="experience-logo" />

        </div>
   
        <div className="experience-card">
          <h3>President</h3>
          <p>Developer Students Club, SRM IST Ramapuram</p>
          <p>Feb 2023 - Present</p>
          <ul>
            <li>Leading the Developer Student Club, formerly 'Google Developer Student ClubS'.</li>
            <li>Collaborated with industry professionals and faculty to create an engaging learning environment and promote skill development among members.</li>
            <li>Organizing workshops, hackathons, and tech talks to foster a community of developers.</li>
          </ul>
          <img src={dscLogo} alt="Developer Students Club" className="experience-logo" />
        </div>
        </section>
        
     {/* Projects Section */}
     <section id="projects" className="projects-section">
          <h2>Projects</h2>
          
          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <img src={projectImage1} alt="Seraphina: Postpartum Depression Prediction" className="project-image" />
              <div className="project-details">
                <h3>Seraphina: Postpartum Depression Prediction with Guidance Model</h3>
                <p>Recognition: Secured 1st Place in Women TechMakers Hackathon.</p> 
    
                <p>Platform Type: Machine learning-based tool to predict postpartum depression risk and provide personalized mental health guidance for new mothers.</p>
            
                <p>Features: Includes depression risk prediction, personalized mental health tips, and real-time analysis based on user input.</p>
                <p>Tech Stack: Backend developed with Python, machine learning using Scikit-learn, and Random Forest algorithm for predictions, frontend built with Streamlit.</p>
                
                <div className="project-links">
                  <a href="https://seraphina.streamlit.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
                  <a href="https://github.com/prashx1908/Seraphina" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                </div>
              </div>
              
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
              <img src={projectImage2} alt="FinLit: Financial Literacy Platform" className="project-image" />
              <div className="project-details">
                <h3>FinLit: Financial Literacy Platform</h3>
         
                <p>Platform Type: Django-based financial management tool designed to help users track their expenses and make informed investment decisions.</p>
                <p>Features: Includes an expenditure tracker, personalized investment recommendations, community forum, educational financial resources, and an AI-powered chatbot for real-time assistance.</p>
                <p>Tech Stack: Backend built with Django, frontend using HTML, CSS, JavaScript, database on PostgreSQL, and visualizations via Matplotlib.</p>
                <div className="project-links">
                  <a href="https://finlit-entropy.onrender.com/" target="_blank" rel="noopener noreferrer">Project Link</a>
                  <a href="https://github.com/prashx1908/FinLit_Entropy" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card">
              <img src={projectImage3} alt="WorkZen: Developer Productivity Prediction" className="project-image" />
              <div className="project-details">
                <h3>WorkZen: Developer Productivity Prediction</h3>

                <p>Platform Type: Machine learning model designed to predict developer work-life balance and provide personalized productivity recommendations.</p>
                <p>Features: Predicts developer productivity, offers personalized guidance for better work-life balance, and provides actionable insights.</p>
                <p>Tech Stack: Developed with Python, machine learning model built using Scikit-learn and Random Forest Algorithm, frontend interface built with Streamlit.</p>
                <div className="project-links">
                  <a href="https://workzendevshouse-gf9k45uspbov3nj2z7m3tr.streamlit.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
                  <a href="https://github.com/prashx1908/Workzen_Devshouse" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                </div>
                </div>
            </div>

            <div className="project-card">
              <img src={projectImage4} alt="Vidyasagar Dashboard" className="project-image" />
              <div className="project-details">
                <h3>Vidyasagar Dashboard</h3>
                <p>Technical Internship Project</p>
                <p>The Vidyasagar Dashboard is a comprehensive web portal meticulously designed to streamline and enhance student data management for educational institutions. </p>
                <p>The Vidyasagar Student Management Dashboard includes three distinct login portals, each catering to different user roles within the educational institution: Student/Parent, Teacher, and Management. Each login offers unique features and functionalities.</p>
                <p>Employed Python, Django, and PostgreSQL to build the application, The front-end is built with HTML and CSS for a responsive, user-friendly interface. Focusing on creating a scalable architecture that maintained high performance under increasing user loads.</p>
                <div className="project-links">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
      <div className="contact-container">
        <h2>Connect With Me!</h2>
        <p>
          Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href="mailto:prashanth.dev1908@gmail.com">prashanth.dev1908@gmail.com</a>
          </div>
         
       
<div className="social-icons">
  <a href="https://x.com/Prashanthg1908" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.linkedin.com/in/prashanth-g-399225202/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://github.com/prashx1908" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
</div>
</div>
        <footer>
          <p>© 2024 | Prashanth</p>
        </footer>
      </div>
    </section>
      </main>
    </>
  );
};

export default Header;
