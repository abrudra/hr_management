import axios from "axios"

export const gettingAllNewsLetter = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8081/api/newsLetter/getAllNewsLetter`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
