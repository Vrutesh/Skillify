import React from "react";
import "./About.css";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";



const steps = [
    {
      label: 'Learn Basics- HTML, CSS, Javascript',
      description: `Learn the fundamentals of HTML for creating the structure of web pages. Master CSS for styling web elements and creating layouts. Understand the basics of JavaScript for adding interactivity and dynamic behavior.`,
    },
    {
      label: 'Version Control (Git)',
      description:
        'Familiarize yourself with Git for version control and collaboration.',
    },
    {
      label: 'Frontend Framework (e.g., React, Angular, Vue.js)',
      description: `Choose and master a popular frontend framework to build dynamic user interfaces.`,
    },
    {
      label: 'Package Managers (e.g., npm, Yarn)',
      description: `Understand package management tools for handling dependencies.`,
    },
    {
      label: 'APIs and RESTful Services',
      description: `Understand how to interact with APIs and consume data.`,
    },
    {
      label: 'AJAX and Asynchronous Programming',
      description: `Learn asynchronous programming for efficient data fetching.`,
    },
    {
      label: 'Testing (Unit and Integration)',
      description: `Explore testing frameworks for writing unit and integration tests.`,
    },
  ];

function About() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  return (
    <>
      <section>
        <div className="info-section">
          <div className="content-mr">
            <div className="quiz-heading" id="main-container">
              <h1>Frontend Development Test</h1>
              <h2>Overview</h2>
              <p>
                Frontend development assessments evaluate candidates'
                proficiency in HTML, CSS, and JavaScript to create responsive
                and visually appealing user interfaces. These assessments often
                include tasks related to web technologies and frameworks,
                assessing candidates' skills in building effective and
                interactive frontend solutions.
              </p>
              <Link to={"/quiz/frontend-development"}><Button
                variant="contained"
                sx={{ width: "160px", height: "40px" }}
              >
                Start Quiz
              </Button></Link>
            </div>
            <div className="quiz-menu">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills Required</a>
                </li>
                <li>
                  <a href="#test-structure">Test Structure</a>
                </li>
                <li>
                  <a href="#roadmap">RoadMap</a>
                </li>
                <li>
                  <a href="#faq">FAQ's</a>
                </li>
              </ul>
            </div>
            <div className="about-section" id="about">
            
              <h1>About Frontend-Development</h1>
              <p>
              A frontend development assessment is a comprehensive evaluation process designed to assess an individual's proficiency in building user interfaces for websites or applications. Frontend development focuses on the client-side of web development, dealing with the visual and interactive aspects that users interact with directly. The assessment aims to gauge a candidate's skills in key technologies and their ability to create responsive, visually appealing, and user-friendly interfaces.

The core technologies assessed in frontend development include HTML, CSS, and JavaScript. Candidates are expected to demonstrate their ability to write clean, semantic HTML code, apply styling and layout using CSS, and implement dynamic and interactive features using JavaScript. Additionally, familiarity with popular frontend frameworks and libraries, such as React, Angular, or Vue.js, is often assessed, as these tools play a significant role in modern frontend development.</p>

                <p>A typical frontend development assessment involves a combination of theoretical knowledge assessments and practical coding exercises. Theoretical assessments may cover concepts such as the Document Object Model (DOM), browser rendering processes, and responsive design principles. Practical exercises often include tasks like building webpage layouts, implementing interactive components, and troubleshooting issues within a given codebase.

Candidates may be evaluated on their understanding of cross-browser compatibility, responsive design, and adherence to coding best practices. The ability to work collaboratively with design teams to implement visual concepts and integrate seamlessly with backend developers for data retrieval and storage is also important.
                </p>

                <p>Problem-solving skills are crucial in frontend development, and assessments may include debugging challenges, algorithmic problem-solving tasks, and the application of design patterns. Attention to detail is essential to ensure the final product meets both design specifications and functional requirements.

Furthermore, candidates may be tested on their familiarity with version control systems like Git, testing methodologies for frontend code, and their ability to optimize code and assets for performance.</p>

<p>In conclusion, a frontend development assessment is a multifaceted evaluation that goes beyond coding skills. It assesses a candidate's understanding of fundamental concepts, proficiency in using relevant technologies, problem-solving abilities, and collaboration skills—all of which are essential for creating effective and engaging user interfaces in the rapidly evolving landscape of web development.</p>
                    
            </div>
            <div className="skills-section" id="skills">
              <h1><i class="bi bi-magic"></i> Skills Required</h1>
              <div className="skill-info">
                <div className="skill-card card">
                  <i class="bi bi-code-slash"></i>
                  <h2>Programming Fundamentals</h2>
                  <p>
                    Programming fundamentals include core concepts like
                    variables, data types, control structures, functions,
                    algorithms, and problem-solving.
                  </p>
                </div>
                <div className="skill-card card">
                <i class="bi bi-grid-1x2-fill"></i>
                  <h2>HTML, CSS, JS & React</h2>
                  <p>
                    Programming fundamentals include core concepts like
                    variables, data types, control structures, functions,
                    algorithms, and problem-solving.
                  </p>
                </div>
                <div className="skill-card card">
                <i class="bi bi-file-earmark-code-fill"></i>
                  <h2>Frontend Frameworks and Libraries</h2>
                  <p>
                  Experience with popular frontend frameworks like React, Angular, or Vue.js. Ability to build modular and reusable components.
                  </p>
                </div>
                <div className="skill-card card">
                <i class="bi bi-filetype-js"></i>
                  <h2>Problem-Solving & Adaptability</h2>
                  <p>
                  Strong analytical and problem-solving skills for addressing coding challenges. Ability to adapt to new technologies, tools, and coding standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="what-to-learn" id="roadmap">
                <h1><i className="bi bi-magic"></i> What should I do to become successful Frontend Developer ?</h1>
            <Box sx={{ Width: "60%", textAlign:"justify" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 6 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>&#9989; All Set </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
            </div>
            <div className="faq-section" id="faq">
                <h1><i class="bi bi-magic"></i> FAQs (Frequently Asked Questions)</h1>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    What is Frontend Development Assessment ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    A frontend development assessment evaluates a candidate's
                    proficiency in creating user interfaces using web
                    technologies. It assesses skills in HTML, CSS, JavaScript,
                    and framework knowledge for building responsive and
                    interactive websites.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    What knowledge is required to be a Front-end developer?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Front-end developer require a knowledge of theses
                    technologies : Javascript, React JS, HTML5, CSS3. Front-end
                    developer required skills may also depend of the company and
                    missions.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    What are the responsibilities of Frontend Developer
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                   <p>● Write clean, efficient, and maintainable HTML, CSS, and JavaScript code. Ensure cross-browser compatibility and optimize code for performance.</p>
                   <p>● Work closely with UX/UI designers to implement design concepts. Provide insights on technical feasibility and contribute to the design process.</p>
                   <p>● Focus on creating an intuitive and user-friendly experience. Implement and enhance website/application navigation and interactions.</p>
                   <p>● Conduct thorough testing of frontend components to identify and fix bugs. Collaborate with quality assurance teams to ensure a high level of software quality.</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

          <span className="gototopbtn-border"><a href="#main-container" className="gototopbtn"><i class="fa-solid fa-arrow-up"></i></a></span>
        </div>
      </section>
    </>
  );
}

export default About;
