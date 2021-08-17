#!/usr/bin/env node
import { Command } from "commander";
import createNewComponent from "./createNewComponent";

const program = new Command("abledev");

program.command("new <componentName>").action(async (componentName: string) => {
  await createNewComponent(componentName);
});

program.parse(process.argv);
