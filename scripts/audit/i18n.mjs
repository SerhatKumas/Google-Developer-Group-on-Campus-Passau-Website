import fs from "fs";
import path from "path";
import { ROOT_DIR, pass, fail, section } from "./utils.mjs";

export function runI18nAudit() {
  section("Module 04: Multi-Language (i18n) Parity & Completeness");

  const enPath = path.join(ROOT_DIR, "src", "i18n", "translations", "en.ts");
  const dePath = path.join(ROOT_DIR, "src", "i18n", "translations", "de.ts");
  const typesPath = path.join(ROOT_DIR, "src", "i18n", "types.ts");

  if (fs.existsSync(enPath) && fs.existsSync(dePath) && fs.existsSync(typesPath)) {
    const enContent = fs.readFileSync(enPath, "utf8");
    const deContent = fs.readFileSync(dePath, "utf8");

    const extractKeys = (content) => {
      const keys = [];
      const lines = content.split("\n");
      for (const line of lines) {
        const match = line.match(/^\s*([a-zA-Z0-9_]+)\s*:/);
        if (match && !["export", "const", "import", "type", "interface"].includes(match[1])) {
          keys.push(match[1]);
        }
      }
      return keys;
    };

    const enKeys = extractKeys(enContent);
    const deKeys = extractKeys(deContent);

    const missingInDe = enKeys.filter((k) => !deKeys.includes(k));
    const missingInEn = deKeys.filter((k) => !enKeys.includes(k));

    if (missingInDe.length === 0 && missingInEn.length === 0) {
      pass("i18n Key Parity", `100% key parity between English (${enKeys.length} keys) and German (${deKeys.length} keys).`);
    } else {
      fail("i18n Key Parity", `Mismatches found! Missing in DE: [${missingInDe.join(", ")}], Missing in EN: [${missingInEn.join(", ")}]`);
    }
  } else {
    fail("i18n Translations", "One or more translation files (en.ts, de.ts, types.ts) are missing.");
  }
}
