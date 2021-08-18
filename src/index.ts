#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs/promises";
import path from "path";
import { applyVariables, cleanNoTsCheckLine } from "./createFiles";
import createNewComponent from "./createNewComponent";
import sanitizeComponentName from "./sanitizeComponentName";
import startDevServer from "./startDevServer";
import newMutationTemplate from "./templates/generator/newMutation?raw-file";
import newQueryTemplate from "./templates/generator/newQuery?raw-file";
import makeDir from "make-dir";

const program = new Command("abledev");

program
  .command("new <componentName>")
  .option("-p, --path <path>")
  .option("-o, --override", "Overrides the path if it exists", false)
  .action(
    async (
      givenComponentName: string,
      { path: pathDir, override }: { path: string; override: boolean },
    ) => {
      const componentName = sanitizeComponentName(givenComponentName);
      const directoryPath =
        pathDir ?? path.resolve(__dirname, givenComponentName);
      await createNewComponent(componentName, directoryPath, override);
    },
  );

program.command("start").action(async () => {
  startDevServer({ projectRoot: process.cwd() });
});

program
  .command("g <functionType> <functionName>")
  .action(async (functionType, functionName) => {
    if (functionType !== "query" && functionType !== "mutation") {
      throw new Error("functionType should be query or mutation");
    }

    const rootPath = process.cwd();
    const newFunctionPath = path.join(
      rootPath,
      "src",
      functionType === "query" ? "queries" : "mutations",
      `${functionName}.ts`,
    );

    const newFunctionParentPath = path.dirname(newFunctionPath);

    await makeDir(newFunctionParentPath);

    await fs.writeFile(
      newFunctionPath,
      cleanNoTsCheckLine(
        applyVariables(
          functionType === "query" ? newQueryTemplate : newMutationTemplate,
          functionType === "query"
            ? { queryName: functionName }
            : { mutationName: functionName },
        ),
      ),
    );
  });

program.parse(process.argv);
