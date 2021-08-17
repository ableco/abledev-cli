declare type CreateFilesConfig = {
    rootPath: string;
    templatesRoot: string;
    variables: object;
};
declare type FilesMap = {
    [location: string]: string | true;
};
declare function createFiles({ rootPath, templatesRoot, variables }: CreateFilesConfig, filesMap: FilesMap): Promise<void>;
export default createFiles;
