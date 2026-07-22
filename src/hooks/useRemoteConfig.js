import { useState, useEffect } from "react";

// ── REMOTE CONFIG ──
// Edit this JSON from your phone via GitHub Gist to update phone/bank details instantly.
// Steps:
// 1. Go to gist.github.com and create a gist with filename "config.json"
// 2. Paste your config JSON (see DEFAULT_CONFIG below for format)
// 3. Copy the RAW URL of the gist
// 4. Replace GIST_RAW_URL below with your raw URL
//
// To update: Open the gist on your phone → Edit → Change values → Save
// Changes appear on the website immediately (no redeploy needed).

const GIST_RAW_URL = "https://gist.githubusercontent.com/sooniyasharma01-gif/ed2efb25675b88ee830f0d228f15d872/raw/site-data.json";

const DEFAULT_CONFIG = {
  phone: "61468258068",
  whatsappMessage: "Hi Teena, I'd love to connect with you.",
  telegramHandle: "61468258068",
  bankName: "Prabhjot Sindu",
  bankBSB: "923-100",
  bankAccount: "320788438",
};

export default function useRemoteConfig() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  useEffect(() => {
    if (!GIST_RAW_URL) return;

    fetch(GIST_RAW_URL, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        // Map Gist format to config format
        const mapped = { ...data };
        if (data.bankDetails) {
          mapped.bankName = data.bankDetails.accountName || DEFAULT_CONFIG.bankName;
          mapped.bankBSB = data.bankDetails.bsb || DEFAULT_CONFIG.bankBSB;
          mapped.bankAccount = data.bankDetails.accountNumber || DEFAULT_CONFIG.bankAccount;
        }
        setConfig((prev) => ({ ...prev, ...mapped }));
      })
      .catch(() => {
        // Silently fall back to defaults
      });
  }, []);

  return config;
}
