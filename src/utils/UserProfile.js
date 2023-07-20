import {
  apiEndpointRegister,
  apiEndpointAccount,
  apiEndpointLogout,
  apiEndpointLogin,
} from "./endpoints";

export const getLocalUserSession = () => {
  let data = {
    access_token: "",
  };
  if (sessionStorage.getItem("access_token")) {
    data.access_token = sessionStorage.getItem("access_token");
    return data;
  } else {
    return null;
  }
};

export const getRemoteUserSession = async (bodyData) => {
  try {
    const response = await fetch(apiEndpointLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyData,
    });

    const data = await response.json();
    console.log(data);

    if (data.access_token) {
      sessionStorage.setItem("access_token", data.access_token);
      sessionStorage.setItem("token_type", data.token_type);
      return "Sesión iniciada";
    } else {
      return data.message;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

export const setUserSession = async (bodyData) => {
  try {
    const response = await fetch(apiEndpointRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyData,
    });

    const data = await response.json();
    console.log(data);

    if (data.access_token) {
      sessionStorage.setItem("access_token", data.access_token);
      sessionStorage.setItem("token_type", data.token_type);
      return "Sesión iniciada";
    } else {
      return data.message;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

export const getUserData = async () => {
  const userInfo = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointAccount, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
    });

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

export const removeUserSession = async () => {
  const userInfo = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointLogout, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
    });

    const data = await response.json();
    console.log(data);
    sessionStorage.removeItem("access_token");
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
