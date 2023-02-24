import axios from "axios";

const apibase = process.env.REACT_APP_BASE_URL;

export const gettingAllNewsLetter = async () => {
  try {
    const response = await axios.get(
      `${apibase}/api/newsLetter/getAllNewsLetter`
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
      `${apibase}/api/newsLetter/addNewsLetter`,
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
    const response = await axios.get(`${apibase}/user/getAllEmployee`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUpEmployee = async (values) => {
  try {
    const response = await axios.post(`${apibase}/user/signUp`, values);
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const loginEmployee = async (values) => {
  try {
    const response = await axios.post(`${apibase}/user/login`, values);
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
    const response = await axios.get(`${apibase}/api/newsLetter/${id}`, {
      headers,
    });
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
      `${apibase}/api/newsLetter/${id}`,
      values,
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
    const response = await axios.delete(`${apibase}/api/newsLetter/${id}`, {
      headers,
    });
    const data = response.data;
    return [data];
  } catch (error) {
    throw error;
  }
};

export const updateEmployeeByID = async (id, values, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.put(
      `${apibase}/user/${id}`,
      values,
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


export const deleteEmployeeById = async (id, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.delete(`${apibase}/user/${id}`, {
      headers,
    });
    const data = response.data;
    return [data];
  } catch (error) {
    throw error;
  }
};

export const getEmployeeById = async (id, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.get(`${apibase}/user/${id}`, {
      headers,
    });
    const data = response.data;
    return [data];
  } catch (error) {
    throw error;
  }
};

export const getHolidayList = async () => {
  const response = await fetch(
    `https://calendarific.com/api/v2/holidays?&api_key=0f9c36d648e57450e94cd34d77508fc3274f666a&country=IN&year=2023`
  );
  const data = await response.json();
  const formattedData = data.response.holidays.map((holiday, index) => ({
    index: index + 1,
    name: holiday.name,
    date: holiday.date.iso,
  }));
  return formattedData;
};
