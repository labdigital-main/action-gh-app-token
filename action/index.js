"use strict";

// index.ts
var import_core = require("@actions/core");
var import_auth_app = require("@octokit/auth-app");
var import_rest = require("@octokit/rest");
async function run() {
  try {
    const appOctokit = new import_rest.Octokit({
      authStrategy: import_auth_app.createAppAuth,
      auth: {
        appId: (0, import_core.getInput)("app-id"),
        privateKey: (0, import_core.getInput)("private-key").replace(/\\n/g, "\n"),
        installationId: (0, import_core.getInput)("installation-id")
      }
    });
    const { token } = await appOctokit.auth({
      type: "installation",
      installationId: (0, import_core.getInput)("installation-id")
    });
    (0, import_core.setOutput)("app-token", token);
  } catch (error) {
    (0, import_core.setFailed)(error.message);
  }
}
run();
