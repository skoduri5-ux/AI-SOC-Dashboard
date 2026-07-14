import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      event: "Firewall blocked SQL Injection",
      ip: "192.168.1.10",
      user: "admin",
      source: "Firewall",
      status: "Alert",
      time: "10:30"
    },
    {
      id: 2,
      event: "VPN Login",
      ip: "10.0.0.20",
      user: "john",
      source: "VPN",
      status: "Success",
      time: "10:40"
    }
  ]);
});

export default router;
