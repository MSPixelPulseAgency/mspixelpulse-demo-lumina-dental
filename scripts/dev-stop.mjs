import { readFileSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
const root = resolve(".");
let pid;
try {
  pid = Number(readFileSync(".dev.pid", "utf8").trim());
} catch {
  console.log(
    "No managed server PID. Use Ctrl+C in the terminal running npm run dev.",
  );
  process.exit(0);
}
if (!Number.isInteger(pid) || pid < 2)
  throw new Error("Invalid project server PID.");
try {
  const cwd = execFileSync(
    "lsof",
    ["-a", "-p", String(pid), "-d", "cwd", "-Fn"],
    { encoding: "utf8" },
  );
  const command = execFileSync("ps", ["-p", String(pid), "-o", "command="], {
    encoding: "utf8",
  });
  if (!cwd.split("\n").includes("n" + root) || !command.includes("npm run dev"))
    throw new Error(
      "PID does not match this project’s managed development server. Refusing to stop it.",
    );
  process.kill(-pid, "SIGTERM");
  unlinkSync(".dev.pid");
  console.log("Stopped the managed LUMINA server.");
} catch (error) {
  if (error.code === "ESRCH") {
    unlinkSync(".dev.pid");
    console.log("The managed server was already stopped.");
  } else throw error;
}
