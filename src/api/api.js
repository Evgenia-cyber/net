import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "24c00ec5-a9a5-48ae-9287-c12f189f91af",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, countUsersPerPage = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${countUsersPerPage}`)
      .then((response) => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },
  getProfile(userId) {
    console.warn("Obsolete method. Use profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
