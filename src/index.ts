#!/usr/bin/env node
import { Command } from "commander";
import path from "path";
import createNewComponent from "./createNewComponent";
import sanitizeComponentName from "./sanitizeComponentName";

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

program.parse(process.argv);
