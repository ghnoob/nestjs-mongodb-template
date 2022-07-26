import { createUmzugInstance } from '../umzug';

async function umzugCli() {
  const umzug = await createUmzugInstance();

  await umzug.runAsCLI();

  /**
   * this line is necessary so the node process stops after the command
   * finishes its execution
   */
  process.exit(0);
}

if (require.main === module) {
  umzugCli();
}
