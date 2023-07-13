export const getUserSession = () => {
  if (sessionStorage.getItem("sessionId"))
    return sessionStorage.getItem("sessionId");
};

export const setUserSession = () => {
  // Tiene que crear en verdad la id en la API
  const id = Math.floor(Math.random() * 100);
  sessionStorage.setItem("sessionId", id);
  return id
  // Enviar a la API que cree esa sesión
};

export const removeUserSession = () => {
  sessionStorage.removeItem("sessionId");
  // Enviar a la API que borre esa sesión
}

// document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");

// const UserProfile = (function () {
//   const getUserSession = () => {
//     // document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
//     if (sessionStorage.getItem("sessionId"))
//       return sessionStorage.getItem("sessionId");
//   };
// })();

// export default UserProfile;
