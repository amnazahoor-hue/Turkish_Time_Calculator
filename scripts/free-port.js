const { execSync } = require("child_process");

const port = process.argv[2] || "3000";

function freePortWindows(targetPort) {
  try {
    const output = execSync(`netstat -ano | findstr :${targetPort}`, {
      encoding: "utf8",
    });

    const pids = new Set();
    for (const line of output.split(/\r?\n/)) {
      if (!line.includes("LISTENING")) continue;
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && pid !== "0") pids.add(pid);
    }

    for (const pid of pids) {
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
        console.log(`[free-port] Freed port ${targetPort} (stopped PID ${pid})`);
      } catch {
        // Process may have already exited
      }
    }
  } catch {
    // No process bound to the port
  }
}

function freePortUnix(targetPort) {
  try {
    execSync(`lsof -ti:${targetPort} | xargs -r kill -9`, {
      stdio: "ignore",
      shell: true,
    });
    console.log(`[free-port] Freed port ${targetPort}`);
  } catch {
    // No process bound to the port
  }
}

if (process.platform === "win32") {
  freePortWindows(port);
} else {
  freePortUnix(port);
}
