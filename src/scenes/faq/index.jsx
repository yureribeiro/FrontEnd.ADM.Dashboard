import { Box, Typography, useState } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import  ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px" maxHeight="70vh">
      <Header title="FAQ"  subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography colors={colors.greenAccent[500]} variant="h4">
              An Important question
            </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum dolor sit amet, consectetur adipscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo labortis eget
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography colors={colors.greenAccent[500]} variant="h4">
              Another Important question
            </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum dolor sit amet, consectetur adipscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo labortis eget
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography colors={colors.greenAccent[500]} variant="h4">
              Your Favorite question
            </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum dolor sit amet, consectetur adipscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo labortis eget
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography colors={colors.greenAccent[500]} variant="h4">
             Some Randow question
            </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum dolor sit amet, consectetur adipscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo labortis eget
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography colors={colors.greenAccent[500]} variant="h4">
              The finaly question
            </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum dolor sit amet, consectetur adipscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo labortis eget
            </Typography>
          </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;