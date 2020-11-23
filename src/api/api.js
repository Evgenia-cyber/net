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
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
};
