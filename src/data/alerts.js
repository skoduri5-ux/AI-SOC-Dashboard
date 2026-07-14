const alerts = [
  {
    id: 1001,
    severity: "Critical",
    attack: "SQL Injection",
    ip: "192.168.1.10",
    target: "Web Server",
    status: "Blocked",
    time: "10:30 AM",
  },
  {
    id: 1002,
    severity: "High",
    attack: "Brute Force",
    ip: "10.0.0.15",
    target: "SSH Server",
    status: "Investigating",
    time: "10:45 AM",
  },
  {
    id: 1003,
    severity: "Medium",
    attack: "Port Scan",
    ip: "172.16.0.20",
    target: "Firewall",
    status: "Monitoring",
    time: "11:10 AM",
  },
  {
    id: 1004,
    severity: "Low",
    attack: "Ping Sweep",
    ip: "192.168.0.2",
    target: "Gateway",
    status: "Resolved",
    time: "11:25 AM",
  },
];

export default alerts;
