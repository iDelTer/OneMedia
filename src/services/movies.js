import {
  apiEndpointGetRemoteMoviesRandom,
  apiEndpointAddMovie,
  apiEndpointGetLocalMovies,
  apiEndpointGetRemoteMoviesName,
  apiEndpointDeleteMovie,
  apiEndpointUpdateMovie,
  apiEndpointRateMovie,
} from "../utils/endpoints";
import { getLocalUserSession } from "../utils/UserProfile";

export const getRemoteMoviesRandom = async () => {
  const userInfo = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointGetRemoteMoviesRandom, {
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
  }
};

export const getRemoteMoviesName = async (bodyData) => {
  const userInfo = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointGetRemoteMoviesName, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
      body: JSON.stringify(bodyData),
    });

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addLocalMovie = async (bodyData) => {
  const session = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointAddMovie, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: bodyData,
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

export const getLocalMovies = async () => {
  try {
    const response = await fetch(apiEndpointGetLocalMovies, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const removeMovie = async (bodyData) => {
  const userInfo = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointDeleteMovie, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
      // body: JSON.stringify(bodyData),
      body: bodyData,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateMovie = async (bodyData) => {
  const userInfo = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointUpdateMovie, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
      body: bodyData,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const rateMovie = async (bodyData) => {
  const userInfo = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointRateMovie, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
      body: bodyData,
    });

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};
