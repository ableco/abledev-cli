import * as React from "react";
import { DueDate } from "../src";
import { PreviewData } from "./getPreviewData";

export default function Preview({
  data,
  reloadData,
}: {
  data: PreviewData;
  reloadData: () => void;
}) {
  return (
    <div>
      <DueDate />
    </div>
  );
}
