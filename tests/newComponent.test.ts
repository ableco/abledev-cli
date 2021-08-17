import { execSync } from "child_process";
import fs from "fs/promises";
import path from "path";
import os from "os";

describe("abledev new <componentName>", () => {
  it("creeates a new component", async () => {
    const { path, cli } = await setup();
    runCommand(cli, "new", "MyComponent", `--path=${path}`, "--override");

    process.chdir(path);
    runCommand("yarn run dev");
  });
});

async function setup() {
  const cli = "./dist/abledev-cli.js";
  // This ensures we're running against a compiled and up-to-date version
  await compileLibrary(cli);
  // We're using a temp dir
  const tmpDir = await fs.mkdtemp(
    path.join(os.tmpdir(), "abledev-isolated-component-"),
  );
  return { path: tmpDir, cli };
}

async function compileLibrary(cliPath: string) {
  runCommand("npm run build");
  await fs.chmod(cliPath, "755");
}

function runCommand(command: string, ...args: Array<string>) {
  const fullCommand = `${command} ${args.join(" ")}`;
  execSync(fullCommand);
}
