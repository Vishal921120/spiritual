import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Carousel } from "./Carousel";
import { data } from "../constants";

export const ShlokaList = () => {
  return (
    <div style={{display:"flex"}}>
      <div>
        <Carousel />
      </div>
      <div style={{ width: "50%", display: "block" }}>
        {data.map((item, index) => {
          return (
            <Accordion>
              <Accordion.Item
                eventKey=""
                style={{ background: "#0d6efd", color: "white" }}
              >
                <Accordion.Header>{item.shlokaNumber}</Accordion.Header>
                <Accordion.Body>{item.shlokaText}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
