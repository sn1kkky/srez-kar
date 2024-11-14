import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionMenu = ({ categories, onCategoryChange }) => (
  <Box sx={{ marginTop: 3 }}>
    {categories.map((category) => (
      <Accordion key={category}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${category}-content`}
          id={`${category}-header`}
        >
          <Typography>{category}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            variant="outlined"
            sx={{ marginBottom: 1 }}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default AccordionMenu;
