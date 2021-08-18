// @ts-nocheck
import { AsyncReturnType } from "type-fest";
import { HostContextType } from "../src/HostContext";

async function getPreviewData({ db: _db }: HostContextType) {
  return {};
}

export type PreviewData = AsyncReturnType<typeof getPreviewData>;
export default getPreviewData;
