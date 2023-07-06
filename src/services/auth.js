import { get, post, del, put } from "../AxiosConfig";

const URI = "/app-users";

const loginUser = (payload) => {
  const URL = `${URI}`;
  return post(URL, payload);
};

const AuthService = {
  loginUser,
};

export default AuthService;
