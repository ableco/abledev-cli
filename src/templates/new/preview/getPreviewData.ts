// @ts-nocheck
import { AsyncReturnType } from "type-fest";
import { HostContext } from "../src/HostContext";

async function getPreviewData({ db: _db }: HostContext) {
  return {};
}

export type PreviewData = AsyncReturnType<typeof getPreviewData>;
export default getPreviewData;
