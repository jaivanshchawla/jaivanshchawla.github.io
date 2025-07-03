import React from "react";
import "./blurred-blob.css";

export default function BlurredBlob({ position = "top" }) {
  // position: "top" or "bottom"
  return (
    <div className={`blurred-blob ${position === "top" ? "blob-bottom" : "blob-top"}`} />
  );
}
