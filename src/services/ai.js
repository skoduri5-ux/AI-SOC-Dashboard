import axios from "axios";

const API = "http://localhost:5000/api/ai/chat";

export async function askAI(message) {
  const res = await axios.post(API, {
    message,
  });

  return res.data.reply;
}
