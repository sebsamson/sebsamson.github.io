import { cp, readdir, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appRoot = path.resolve(__dirname, "..")
const outDir = path.resolve(appRoot, "out")
const repoRoot = path.resolve(appRoot, "..")

async function ensureOutDirExists() {
  try {
    const details = await stat(outDir)
    if (!details.isDirectory()) {
      throw new Error("out is not a directory")
    }
  } catch {
    throw new Error("Missing export directory. Run `npm run build` and `npm run aliases` first.")
  }
}

async function run() {
  await ensureOutDirExists()

  const entries = await readdir(outDir)

  for (const entry of entries) {
    const from = path.join(outDir, entry)
    const to = path.join(repoRoot, entry)
    await cp(from, to, { recursive: true, force: true })
  }

  console.log("[publish:root] copied exported site into repository root")
}

run().catch((error) => {
  console.error("[publish:root] failed:", error)
  process.exit(1)
})
