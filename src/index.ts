#!/usr/bin/env node
import { Command } from "commander";
import path from "path";
import createNewComponent from "./createNewComponent";

const program = new Command("abledev");

program
  .command("new <componentName>")
  .option("-p, --path <path>")
  .option("-o, --override", "Overrides the path if it exists", false)
  .action(
    async (
      componentName: string,
      { path: pathDir, override }: { path: string; override: boolean },
    ) => {
      const directoryPath = pathDir ?? path.resolve(__dirname, componentName);
      await createNewComponent(componentName, directoryPath, override);
    },
  );

program.parse(process.argv);
