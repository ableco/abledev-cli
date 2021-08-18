import { execSync } from "child_process";

export function execCommand(rootPath: string, command: string) {
  execSync(command, {
    stdio: ["inherit", "inherit", "inherit"],
    cwd: rootPath,
  });
}
