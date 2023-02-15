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

export const signUpEmployee = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:8081/user/signUp",
      values
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const loginEmployee = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:8081/user/login",
      values
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};