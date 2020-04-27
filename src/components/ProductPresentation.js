import React from "react";
import { Typography, Divider } from "@material-ui/core";
import WavyElem from "../assets/wavyElement.svg";

export default function ProductPresentation() {
  return (
    <div>
      <h1>
        <span
          style={{
            fontWeight: 700,
          }}
        >
          Reinventa la forma de invertir
        </span>
      </h1>
      <Divider />
      <div
        style={{
          paddingTop: "20px",
          position: "relative",
          textAlign: "center",
          paddingBottom: "24px",
          margin: "auto",
          gridGap: "0",
          marginBottom: ".6em",
        }}
      >
        <Typography variant="h4">
          Práctico para <strong>todo el mundo</strong>
        </Typography>
        <div
          style={{
            position: "absolute",
            gridGap: 0,
            textAlign: "right",
            width: "100%",
            bottom: "0",
          }}
        >
          <img alt="Wavy element" src={WavyElem} />
        </div>
      </div>
      <Divider />
    </div>
  );
}
