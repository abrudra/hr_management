import axios from "axios";

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

export const addNewsLetter = async (value, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `http://localhost:8081/api/newsLetter/addNewsLetter`,
      value,
      { headers }
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const gettingAllEmployee = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8081/user/getAllEmployee`
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

export const getNewsById = async (id, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.get(
      `http://localhost:8081/api/newsLetter/${id}`,
      {
        headers,
      }
    );
    const data = response.data;
    return [data];
  } catch (error) {
    throw error;
  }
};

export const updateNewsById = async (id, values,token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.put(
      `http://localhost:8081/api/newsLetter/${id}`,values,
      {
        headers,
      }
    );
    const data = response.data;
    return [data];
  } catch (error) {
    throw error;
  }
};



export const deleteByID = async (id, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.delete(
      `http://localhost:8081/api/newsLetter/${id}`,
      {
        headers,
      }
    );
    const data = response.data;
    return [data];
  } catch (error) {
    throw error;
  }
};
