import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    weeklyAttacks: [
      { day: "Mon", attacks: 20 },
      { day: "Tue", attacks: 35 },
      { day: "Wed", attacks: 28 },
      { day: "Thu", attacks: 45 },
      { day: "Fri", attacks: 38 },
      { day: "Sat", attacks: 50 },
      { day: "Sun", attacks: 42 }
    ]
  });
});

export default router;
