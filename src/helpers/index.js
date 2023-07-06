import { startCase } from "lodash";
import { AuthUserInfo } from "../constants";
import LocalstorageService from "./localstorage-service";

import { AUTH_TOKEN } from "../constants";

const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

function isMobileDevice() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function updateAppTitle(pathname) {
  window.scrollTo(0, 0);
  const currentPage = startCase(pathname).replaceAll("-", " ");
  document.title = `${currentPage} | ${process.env.REACT_APP_APPLICATION_TITLE}`;
}

function validateEmail(email = "") {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

function checkAuthToken() {
  const authInfo = LocalstorageService.getItem(AuthUserInfo);
  return !!authInfo?.token;
}

// Prevent non-english characters.
function isValidPasswordChar(value) {
  return /^[A-Za-z\d#$@!%&*?]*$/.test(value.toString());
}

function removeAuthUserInfo() {
  LocalstorageService.removeItem(AuthUserInfo);
}

export {
  getToken,
  setToken,
  removeToken,
  isMobileDevice,
  updateAppTitle,
  validateEmail,
  checkAuthToken,
  isValidPasswordChar,
  removeAuthUserInfo,
};
