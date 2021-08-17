import { AsyncReturnType } from "type-fest";
import { HostContext } from "../src/HostContext";
declare function getPreviewData({ db }: HostContext): Promise<{
    allTasks: any;
}>;
export declare type PreviewData = AsyncReturnType<typeof getPreviewData>;
export default getPreviewData;
