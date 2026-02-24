import { mkdir, writeFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const SITE_URL = "https://sebsamson.com"

const DETAIL_SLUGS = [
  "finalfury-vr",
  "synthriders-vr",
  "ugc",
  "jurassicworldalive-mobile",
  "jurassicworldthegame-mobile",
  "lovelink-mobile",
  "dragonsriseofberk-mobile",
  "dcheroesvillains-mobile",
  "projectcarsgo-mobile",
  "legolife-mobile",
  "spymaster-mobile",
  "farmerama-web",
  "skylandersuniverse-web",
  "combatofgiants-wii",
  "petzfantasy-ds",
  "myweightlosscoach-iphone",
  "iquit-iphone",
  "kilojam-installation",
  "projetxion-installation",
  "sanscoeurcircuit-installation",
]

/**
 * @typedef {Object} RouteAlias
 * @property {string} aliasFile
 * @property {string} targetPath
 */

/** @type {RouteAlias[]} */
const aliases = [
  { aliasFile: "services.html", targetPath: "/services/" },
  { aliasFile: "proof.html", targetPath: "/proof/" },
  { aliasFile: "contact.html", targetPath: "/contact/" },
  { aliasFile: "games.html", targetPath: "/games/" },
  { aliasFile: "essays-and-talks.html", targetPath: "/essays-and-talks/" },
  { aliasFile: "impact.html", targetPath: "/proof/" },
  { aliasFile: "credits.html", targetPath: "/games/" },
  { aliasFile: "writings.html", targetPath: "/essays-and-talks/" },
  ...DETAIL_SLUGS.map((slug) => ({ aliasFile: `${slug}.html`, targetPath: `/${slug}/` })),
]

/** @type {RouteAlias[]} */
const cleanRouteRedirects = [
  { aliasFile: "impact/index.html", targetPath: "/proof/" },
  { aliasFile: "credits/index.html", targetPath: "/games/" },
  { aliasFile: "writings/index.html", targetPath: "/essays-and-talks/" },
]

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outDir = path.resolve(__dirname, "..", "out")

function redirectHtml(targetPath) {
  const canonical = `${SITE_URL}${targetPath}`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Redirecting</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="${canonical}">
  <meta http-equiv="refresh" content="0;url=${targetPath}">
</head>
<body>
  <main id="main">
    <p>This page moved to <a href="${targetPath}">${targetPath}</a>.</p>
    <p>If you are not redirected automatically, use the link above.</p>
  </main>
</body>
</html>
`
}

async function ensureOutDirExists() {
  try {
    await stat(outDir)
  } catch {
    throw new Error("Missing export directory. Run `npm run build` before `npm run aliases`.")
  }
}

async function run() {
  await ensureOutDirExists()
  await mkdir(outDir, { recursive: true })

  for (const alias of aliases) {
    const { aliasFile, targetPath } = alias
    const filePath = path.join(outDir, aliasFile)
    await writeFile(filePath, redirectHtml(targetPath), "utf8")
  }

  for (const cleanRedirect of cleanRouteRedirects) {
    const { aliasFile, targetPath } = cleanRedirect
    const filePath = path.join(outDir, aliasFile)
    await mkdir(path.dirname(filePath), { recursive: true })
    await writeFile(filePath, redirectHtml(targetPath), "utf8")
  }

  console.log(
    `[aliases] generated ${aliases.length} .html aliases and ${cleanRouteRedirects.length} clean-route redirects in out/`,
  )
}

run().catch((error) => {
  console.error("[aliases] failed:", error)
  process.exit(1)
})
