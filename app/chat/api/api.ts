import axios from "axios";


export async function ChatBot(question: string) {
  const response = await axios.post("http://127.0.0.1:8000/chat", { message: question }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.data.response;
}