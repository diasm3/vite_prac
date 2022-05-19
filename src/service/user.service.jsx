import api from "./api"
import { getWithExpiry } from "../modules/localStorageControl"

const headers = {
  headers: {
    Authorization: getWithExpiry("accessToken"),
  },
}
const getMypage = () => {
  return api.get("/api/players/mypage", headers)
}
const getUserBoard = () => {
  return api.get("/test/user")
}
const getModeratorBoard = () => {
  return api.get("/test/mod")
}
const getAdminBoard = () => {
  return api.get("/test/admin")
}
const UserService = {
  getMypage,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}
export default UserService
