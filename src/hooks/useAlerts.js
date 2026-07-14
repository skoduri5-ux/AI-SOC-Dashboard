import { useEffect, useState } from "react";
import { getAlerts } from "../services/alertService";

export default function useAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function loadAlerts() {
      const data = await getAlerts();
      setAlerts(data);
    }

    loadAlerts();
  }, []);

  return alerts;
}
