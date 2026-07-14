import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    totalAlerts: 2456,
    critical: 18,
    usersOnline: 124,
    firewall: "99.9%"
  });
});

export default router;
