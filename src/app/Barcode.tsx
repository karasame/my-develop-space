"use client";
import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

export const Barcode = (value: string) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: "CODABAR", // 支持 CODE128, CODABAR（NW-7）
        lineColor: "#000",
        width: 1,
        height: 25,
        displayValue: true,
      });
    }
  }, [value]);

  return <svg ref={svgRef} />;
};
