export const threatCards = [
  { title: "Critical Threats", value: 14, color: "text-red-500" },
  { title: "CVEs Today", value: 28, color: "text-orange-400" },
  { title: "Malware Families", value: 18, color: "text-cyan-400" },
  { title: "IOC Feed", value: 126, color: "text-green-400" },
];

export const cves = [
  {
    id: "CVE-2026-1001",
    severity: "Critical",
    product: "Apache",
    cvss: 9.8,
  },
  {
    id: "CVE-2026-1045",
    severity: "High",
    product: "Linux Kernel",
    cvss: 8.9,
  },
  {
    id: "CVE-2026-1100",
    severity: "Medium",
    product: "Nginx",
    cvss: 6.5,
  },
];

export const malware = [
  "LockBit",
  "Emotet",
  "RedLine",
  "Lumma",
  "AsyncRAT",
];

export const iocs = [
  {
    type: "IP",
    value: "185.10.44.22",
  },
  {
    type: "Domain",
    value: "evil-login.xyz",
  },
  {
    type: "SHA256",
    value: "8baf4c8e1fd3b65...",
  },
];

export const mitre = [
  {
    id: "T1190",
    technique: "Exploit Public Facing Application",
  },
  {
    id: "T1110",
    technique: "Brute Force",
  },
  {
    id: "T1059",
    technique: "Command & Scripting Interpreter",
  },
];
