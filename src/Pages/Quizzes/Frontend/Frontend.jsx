import React from "react";
import "./Frontend.css";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import AboutTest from "../../../Components/AboutTest/AboutTest";
import TestHeading from "../../../Components/TestHeading/TestHeading";
import TestStructure from "../../../Components/TestStructure/TestStructure";
import FAQs from "../../../Components/FAQs/FAQs";
import SkillCard from "../../../Components/SkillCard/SkillCard";
import ProgressBtn from "../../../Components/ProgressBtn/ProgressBtn";
import Frontendroadmap from "../../../assets/Roadmaps/frontendRoadmap.pdf";

const steps = [
  {
    label: "Learn Basics- HTML, CSS, Javascript",
    description: `Learn the fundamentals of HTML for creating the structure of web pages. Master CSS for styling web elements and creating layouts. Understand the basics of JavaScript for adding interactivity and dynamic behavior.`,
  },
  {
    label: "Version Control (Git)",
    description:
      "Familiarize yourself with Git for version control and collaboration.",
  },
  {
    label: "Frontend Framework (e.g., React, Angular, Vue.js)",
    description: `Choose and master a popular frontend framework to build dynamic user interfaces.`,
  },
  {
    label: "Package Managers (e.g., npm, Yarn)",
    description: `Understand package management tools for handling dependencies.`,
  },
  {
    label: "APIs and RESTful Services",
    description: `Understand how to interact with APIs and consume data.`,
  },
  {
    label: "AJAX and Asynchronous Programming",
    description: `Learn asynchronous programming for efficient data fetching.`,
  },
  {
    label: "Testing (Unit and Integration)",
    description: `Explore testing frameworks for writing unit and integration tests.`,
  },
];

function Frontend() {
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
        <div className="info-section mr">
          <TestHeading
            testheading="Frontend Development Test"
            overview="Overview"
            testinfo=" Frontend development assessments evaluate candidates'
                proficiency in HTML, CSS, and JavaScript to create responsive
                and visually appealing user interfaces. These assessments often
                include tasks related to web technologies and frameworks,
                assessing candidates' skills in building effective and
                interactive frontend solutions."
            testlink="/quiz/frontend-development/questions"
          />

          <AboutTest
            abouttest="About Frontend-Development"
            abouttestinfo_para1="A frontend development assessment is a comprehensive evaluation process designed to assess an individual's proficiency in building user interfaces for websites or applications. Frontend development focuses on the client-side of web development, dealing with the visual and interactive aspects that users interact with directly. The assessment aims to gauge a candidate's skills in key technologies and their ability to create responsive, visually appealing, and user-friendly interfaces.

            The core technologies assessed in frontend development include HTML, CSS, and JavaScript. Candidates are expected to demonstrate their ability to write clean, semantic HTML code, apply styling and layout using CSS, and implement dynamic and interactive features using JavaScript. Additionally, familiarity with popular frontend frameworks and libraries, such as React, Angular, or Vue.js, is often assessed, as these tools play a significant role in modern frontend development."
            abouttestinfo_para2="A typical frontend development assessment involves a combination of theoretical knowledge assessments and practical coding exercises. Theoretical assessments may cover concepts such as the Document Object Model (DOM), browser rendering processes, and responsive design principles. Practical exercises often include tasks like building webpage layouts, implementing interactive components, and troubleshooting issues within a given codebase.

            Candidates may be evaluated on their understanding of cross-browser compatibility, responsive design, and adherence to coding best practices. The ability to work collaboratively with design teams to implement visual concepts and integrate seamlessly with backend developers for data retrieval and storage is also important."
            abouttestinfo_para3="Problem-solving skills are crucial in frontend development, and assessments may include debugging challenges, algorithmic problem-solving tasks, and the application of design patterns. Attention to detail is essential to ensure the final product meets both design specifications and functional requirements.

            Furthermore, candidates may be tested on their familiarity with version control systems like Git, testing methodologies for frontend code, and their ability to optimize code and assets for performance."
            abouttestinfo_para4="In conclusion, a frontend development assessment is a multifaceted evaluation that goes beyond coding skills. It assesses a candidate's understanding of fundamental concepts, proficiency in using relevant technologies, problem-solving abilities, and collaboration skills—all of which are essential for creating effective and engaging user interfaces in the rapidly evolving landscape of web development."
          />

          <SkillCard
            skillcardheading1="Programming Fundamentals"
            skillcardinfo1="Programming fundamentals include core concepts like
                    variables, data types, control structures, functions,
                    algorithms, and problem-solving."
            icon1={<i class="bi bi-code-slash"></i>}
            skillcardheading2="HTML, CSS, JS & React"
            skillcardinfo2="Programming fundamentals include core concepts like
                    variables, data types, control structures, functions,
                    algorithms, and problem-solving."
            icon2={<i class="bi bi-grid-1x2-fill"></i>}
            skillcardheading3="Frontend Frameworks and Libraries"
            skillcardinfo3="Experience with popular frontend frameworks like React, Angular, or Vue.js. Ability to build modular and reusable components."
            icon3={<i class="bi bi-file-earmark-code-fill"></i>}
            skillcardheading4="Problem-Solving & Adaptability"
            skillcardinfo4=" Strong analytical and problem-solving skills for addressing coding challenges. Ability to adapt to new technologies, tools, and coding standards."
            icon4={<i class="bi bi-filetype-js"></i>}
          />

<section className="structure-container" id="test-structure">

        <h1><i className="bi bi-magic"></i>Test Structure</h1>
          <TestStructure
            
           
            testround="Round 1 - Aptitude Round"
            roundinfo="Test your Frontend Development smarts with our multiple-choice aptitude round - pick the right code, showcase your problem-solving finesse, and let your skills shine as you unravel challenges designed to elevate your coding expertise !"
            skillcontainerheading="Skills Required -"
            conditioninfo="● Get more than 20 marks out of 25 marks to qualify for the next round."
            marks="Total marks - 25"
            type="Aptitude"
            btnheading1="HTML5"
            btnheading2="CSS3"
            btnheading3="Javascript"
            btnheading4="React JS"
          />
          <TestStructure
            testround="Round 2 - Basic Coding Round (HTML & CSS)"
            roundinfo="Level up your HTML and CSS skills in our basic coding round. Tackle fundamental challenges, choose the right code snippets, and showcase your problem-solving abilities. Elevate your web development proficiency !"
            skillcontainerheading="Skills Required -"
            conditioninfo="● You'll have to solve 2 questions based on HTML & CSS. Solve both Questions to qualify."
            marks="Total marks - 20"
            type="Coding"
            btnheading1="HTML5"
            btnheading2="CSS3"
          />
            <TestStructure
            testround="Round 3 - JS Algorithm Round"
            roundinfo="Sharpen your JavaScript skills in our coding challenge! Solve interesting puzzles, show off your problem-solving skills, and become a coding whiz. Level up your JavaScript abilities with our algorithmic round !"
            skillcontainerheading="Skills Required -"
            conditioninfo="● You'll have to solve 2 questions based on HTML & CSS. Solve both Questions to qualify."
            marks="Total marks - 30"
            type="Coding"
            btnheading1="Javascript"
          />

           </section>

          <section className="what-to-learn" id="roadmap">
            <h1>
              <i className="bi bi-magic"></i> What should I do to become
              successful Frontend Developer ?
            </h1>
            <Box sx={{ Width: "60%", textAlign: "justify" }}>
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
                            {index === steps.length - 1 ? "Finish" : "Continue"}
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

            <div className="roadmap-btn">
              <ProgressBtn pdflink={Frontendroadmap} />
            </div>
          </section>

          <FAQs
            faqsheading="FAQs (Frequently Asked Questions)"
            question_1="What is Frontend Development Assessment ?"
            faqs_content1="A frontend development assessment evaluates a candidate's
                    proficiency in creating user interfaces using web
                    technologies. It assesses skills in HTML, CSS, JavaScript,
                    and framework knowledge for building responsive and
                    interactive websites."
            question_2="What knowledge is required to be a Front-end developer ?"
            faqs_content2="Front-end developer require a knowledge of theses
                    technologies : Javascript, React JS, HTML5, CSS3. Front-end
                    developer required skills may also depend of the company and
                    missions."
            question_3="What are the responsibilities of Frontend Developer ?"
            faqs_content3="Write clean, efficient, and maintainable HTML, CSS, and JavaScript code. Ensure cross-browser compatibility and optimize code for performance. Work closely with UX/UI designers to implement design concepts. Provide insights on technical feasibility and contribute to the design process."
          />
        </div>
      </section>
      <span className="gototopbtn-border">
        <a href="#nav" className="gototopbtn">
          <i class="fa-solid fa-arrow-up"></i>
        </a>
      </span>
    </>
  );
}

export default Frontend;
