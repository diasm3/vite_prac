import api from "./api"
import TokenService from "./token.service"
const register = async (email, password, nickname, mbti, profileImg) => {
  return await api.post("/api/players/signup", {
    email,
    password,
    nickname,
    mbti,
    profileImg,
  })
}
const login = async (email, password) => {
  return await api
    .post("/api/players/signin", {
      email,
      password,
    })
    .then((response) => {
      const accessToken = response.headers["accesstoken"]
      const refreshToken = response.headers["refreshtoken"]
      console.log(accessToken, refreshToken)
      if (accessToken && refreshToken) {
        console.log(accessToken, refreshToken)
        TokenService.setAccessToken(accessToken)
        TokenService.setRefreshToken(refreshToken)
      }
      return response.data
    })
}
const logout = () => {
  TokenService.removeUser()
}
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}
export default AuthService
