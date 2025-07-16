"use client";

import Image from "next/image";
import styles from "./page.module.css";
import JsBarcode from "jsbarcode";
import { shipperData } from "@/data/dnpNo_shipperName_data";
import { Barcode } from "./Barcode";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "0px 10px",
        }}
      >
        {shipperData.map((data) => (
          <Stack sx={{ alignItems: "center", paddingBottom: "12px" }}>
            {Barcode(data.dnpNo)}
            <div>{data.shipperName}</div>
          </Stack>
        ))}
      </div>
    </div>
  );
}
