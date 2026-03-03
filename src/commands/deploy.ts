import { deployResources } from "../deploy/deploy-resources.js";

export const command = "deploy";

export const desc = "Deploys resources to Stedi";

export const builder = {
  path: {
    default: "",
    describe:
      "deploy a subset of resources by specifying a folder path containing functions to deploy",
  },
  functionName: {
    default: "",
    describe: "deploy a single function by specifying the function name",
  }
};

export const handler = async (argv: { path?: string, functionName?: string }) => {
  console.log(`Deploying...`);
  await deployResources(argv.path, argv.functionName);
};
