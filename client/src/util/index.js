// import jwtDecode from "jwt-decode";

const isDevelopment = window.location.hostname.includes("localhost");

const getServer = () => {
  return isDevelopment
    ? "http://localhost:5000"
    : "";
};

const decodeUser = () => {
  const token = localStorage.getItem("token");
  return (token);
};

export { getServer, decodeUser };

