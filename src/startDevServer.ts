import { execCommand } from "./execCommand";

async function startDevServer({ projectRoot }: { projectRoot: string }) {
  execCommand(projectRoot, "node_modules/.bin/ts-node ./abledev/devServer.ts");
}

export default startDevServer;
