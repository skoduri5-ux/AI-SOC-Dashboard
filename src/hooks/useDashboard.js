import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";

export default function useDashboard() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function loadStats() {
      const data = await getDashboardStats();
      setStats(data);
    }

    loadStats();
  }, []);

  return stats;
}
