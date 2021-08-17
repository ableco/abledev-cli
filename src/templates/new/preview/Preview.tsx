// @ts-nocheck
import * as React from "react";
import { __componentName__ } from "../src";
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
      <__componentName__ />
    </div>
  );
}
