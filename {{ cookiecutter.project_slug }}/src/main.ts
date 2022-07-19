import * as core from "@actions/core";
import { wait } from "./lib";

// Most toolkit (@actions/...) and CI/CD operations involve async operations,
// so it's good to run our action in an async function too.
async function run(): Promise<void> {
  try {
    // FIXME: this is just an example code from the cookiecutter
    const ms: string = core.getInput("milliseconds");
    core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString());
    await wait(parseInt(ms, 10));
    core.debug(new Date().toTimeString());

    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
