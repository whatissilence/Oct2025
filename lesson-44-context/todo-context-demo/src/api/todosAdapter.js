import axios from 'axios';

export async function getTodosFromServer() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users/4/todos");

  return response.data;
}