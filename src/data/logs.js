const logs = [
  {
    id: 1,
    time: "10:32:14",
    source: "Firewall",
    event: "SQL Injection Blocked",
    user: "N/A",
    ip: "192.168.1.15",
    status: "Success",
  },
  {
    id: 2,
    time: "10:35:20",
    source: "IDS",
    event: "Port Scan Detected",
    user: "N/A",
    ip: "10.0.0.5",
    status: "Alert",
  },
  {
    id: 3,
    time: "10:40:11",
    source: "Authentication",
    event: "Failed Login",
    user: "admin",
    ip: "172.16.1.9",
    status: "Warning",
  },
  {
    id: 4,
    time: "10:42:31",
    source: "VPN",
    event: "User Connected",
    user: "john",
    ip: "172.16.2.4",
    status: "Success",
  },
];

export default logs;
