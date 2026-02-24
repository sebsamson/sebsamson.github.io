import { cp, mkdir, rm, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appRoot = path.resolve(__dirname, "..")
const repoRoot = path.resolve(appRoot, "..")

const copyJobs = [
  {
    src: path.join(repoRoot, "images"),
    dest: path.join(appRoot, "public", "images"),
  },
  {
    src: path.join(repoRoot, "pdf"),
    dest: path.join(appRoot, "public", "pdf"),
  },
]

async function pathExists(targetPath) {
  try {
    await stat(targetPath)
    return true
  } catch {
    return false
  }
}

async function syncDirectory(src, dest) {
  if (!(await pathExists(src))) {
    throw new Error(`Required source directory is missing: ${src}`)
  }

  await rm(dest, { recursive: true, force: true })
  await mkdir(path.dirname(dest), { recursive: true })
  await cp(src, dest, { recursive: true, force: true })
}

async function syncFavicon() {
  const src = path.join(repoRoot, "favicon.ico")
  const dest = path.join(appRoot, "public", "favicon.ico")

  if (await pathExists(src)) {
    await cp(src, dest, { force: true })
  }
}

async function run() {
  for (const job of copyJobs) {
    await syncDirectory(job.src, job.dest)
  }

  await syncFavicon()

  console.log("[sync:assets] copied images, pdf, and favicon into public/")
}

run().catch((error) => {
  console.error("[sync:assets] failed:", error)
  process.exit(1)
})
