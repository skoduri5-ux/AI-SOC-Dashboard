import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      attack: "SQL Injection",
      severity: "Critical",
      ip: "192.168.1.10",
      status: "Blocked",
      time: "10:30"
    },
    {
      id: 2,
      attack: "Brute Force",
      severity: "High",
      ip: "10.0.0.25",
      status: "Investigating",
      time: "10:35"
    }
  ]);
});

export default router;
