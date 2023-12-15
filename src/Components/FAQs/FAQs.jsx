import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQs({
  faqsheading,
  question_1,
  question_2,
  question_3,
  faqs_content1,
  faqs_content2,
  faqs_content3,
}) {
  return (
    <>
      <section className="faq-section" id="faq">
        <h1>
          <i class="bi bi-magic"></i>
          {faqsheading}
        </h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{question_1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faqs_content1}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>{question_2}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faqs_content2}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>{question_3}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>{faqs_content3}</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </>
  );
}

export default FAQs;
