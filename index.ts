import { getInput, setFailed, setOutput } from '@actions/core';
import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";

async function run() {
  try {
    const appOctokit = new Octokit({
        authStrategy: createAppAuth,
        auth: {
          appId: getInput('app-id'),
          privateKey: getInput('private-key').replace(/\\n/g, '\n'),
          installationId: getInput('installation-id'),
        },
      });

    // @ts-ignore
    const { token } = await appOctokit.auth({
      type: "installation",
      installationId: getInput('installation-id'),
    });

    setOutput("app-token", token)
  } catch (error) {
    // @ts-ignore
    setFailed(error.message);
  }
}

run()
