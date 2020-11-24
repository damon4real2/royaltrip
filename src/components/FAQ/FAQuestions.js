import React, { useState } from "react";
import '../FAQ/FAQuestions.css';
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const PopoverItem = props => {
  const { id, item } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <span>
      <Button
        className="mr-1"
        id={"Popover-" + id}
        type="button"
      >
        {item.text}
      </Button>
      <Popover
        placement={item.placement}
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
      >
        <PopoverHeader> First, when you request a ride, the nearest driver to your location is tagged to your request to come pick you up. This should be within 10 minuites. However there are certain instances where the wait time might be longer, such instances include the following:</PopoverHeader>
        <PopoverBody>
    1. Driver has several request from your location.<br></br>2. Heavy traffic where order was placed.<br></br>3. you may have an history of being rated poorly.
        </PopoverBody>
      </Popover>
    </span>
  );
};

const FAQuestions = props => {
  return (
    <>
      {[
        {
          placement: "left",
          text: "1. What is wait time for my driver to reach me?"
        },
        {
          placement: "left",
          text: "2. What if I forget an item in the Driver’s car?"
        },
        {
            placement: "left",
            text: "3. Can I cancel a trip enroute/halfway?"
          },
          {
            placement: "left",
            text: "4. I was charged incorrectly, what do I do?"
          },
          {
            placement: "left",
            text: "5. How do I get a ride to impress my date?"
          },
          {
            placement: "left",
            text: "6. Anyway I can split the bill on Royal Trip?"
          }
      ].map((popover, i) => {
        return <PopoverItem key={i} item={popover} id={i} />;
      })}
    </>
  );
};

export default FAQuestions;