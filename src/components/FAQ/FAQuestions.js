// import React, { useState } from "react";
// import '../FAQ/FAQuestions.css';
// import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

// const PopoverItem = props => {
//   const { id, item } = props;
//   const [popoverOpen, setPopoverOpen] = useState(false);

//   const toggle = () => setPopoverOpen(!popoverOpen);

//   return (
//     <span>
//       <Button
//         className="mr-1"
//         id={"Popover-" + id}
//         type="button"
//       >
//         {item.text}
//       </Button>
//       <Popover
//         placement={item.placement}
//         isOpen={popoverOpen}
//         target={"Popover-" + id}
//         toggle={toggle}
//       >
//         <PopoverHeader> First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 10 minuites. However there are certain instances where the wait time might be longer, such instances include the following:</PopoverHeader>
//         <PopoverBody>
//     1. Driver has several request from your location.<br></br>2. Heavy traffic where order was placed.<br></br>3. you may have an history of being rated poorly.
//         </PopoverBody>
//       </Popover>
//     </span>
//   );
// };

// const FAQuestions = props => {
//   return (
//     <>
//       {[
//         {
//           placement: "left",
//           text: "1. What is wait time for my driver to reach me?"
//         },
//         {
//           placement: "left",
//           text: "2. What if I forget an item in the Driver’s car?"
//         },
//         {
//             placement: "left",
//             text: "3. Can I cancel a trip enroute/halfway?"
//           },
//           {
//             placement: "left",
//             text: "4. I was charged incorrectly, what do I do?"
//           },
//           {
//             placement: "left",
//             text: "5. How do I get a ride to impress my date?"
//           },
//           {
//             placement: "left",
//             text: "6. Anyway I can split the bill on Royal Trip?"
//           }
//       ].map((popover, i) => {
//         return <PopoverItem key={i} item={popover} id={i} />;
//       })}
//     </>
//   );
// };

// export default FAQuestions;




import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>1. What is wait time for my driver to reach me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 10 minuites. However there are certain instances where the wait time might be longer, such instances include the following:
          <br></br>1. Driver has several request from your location.<br></br>2. Heavy traffic where order was placed.<br></br>3. you may have an history of being rated poorly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>2. What if I forget an item in the Driver’s car?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 10 minuites. However there are certain instances where the wait time might be longer, such instances include the following:
          <br></br>1. Driver has several request from your location.<br></br>2. Heavy traffic where order was placed.<br></br>3. you may have an history of being rated poorly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>3. Can I cancel a trip enroute/halfway?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 10 minuites. However there are certain instances where the wait time might be longer, such instances include the following:
          <br></br>1. Driver has several request from your location.<br></br>2. Heavy traffic where order was placed.<br></br>3. you may have an history of being rated poorly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>4. I was charged incorrectly, what do I do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 10 minuites. However there are certain instances where the wait time might be longer, such instances include the following:
          <br></br>1. Driver has several request from your location.<br></br>2. Heavy traffic where order was placed.<br></br>3. you may have an history of being rated poorly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>5. How do I get a ride to impress my date?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 10 minuites. However there are certain instances where the wait time might be longer, such instances include the following:
          <br></br>1. Driver has several request from your location.<br></br>2. Heavy traffic where order was placed.<br></br>3. you may have an history of being rated poorly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>6. Anyway I can split the bill on Royal Trip?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 10 minuites. However there are certain instances where the wait time might be longer, such instances include the following:
          <br></br>1. Driver has several request from your location.<br></br>2. Heavy traffic where order was placed.<br></br>3. you may have an history of being rated poorly.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
