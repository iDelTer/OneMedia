import {
  apiEndpointGetRemoteMovies,
  apiEndpointAddMovie,
} from "../utils/endpoints";
import { getLocalUserSession } from "../utils/UserProfile";

export const getRemoteMovies = async () => {
  const userInfo = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointGetRemoteMovies, {
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

export const addLocalMovie = async (bodyData) => {
  const session = getLocalUserSession();
  try {
    const response = await fetch(apiEndpointAddMovie, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
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
