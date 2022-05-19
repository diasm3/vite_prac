import { setWithExpiry, getWithExpiry } from "../modules/localStorageControl"

class TokenService {
  getLocalRefreshToken() {
    const user = getWithExpiry("refreshToken")
    console.log(user)
    return user
  }
  getLocalAccessToken() {
    const user = getWithExpiry("accessToken")
    // const user = JSON.parse(localStorage.getItem("accesToken"))
    return user
  }
  updateLocalAccessToken(token) {
    let accessToken = JSON.parse(localStorage.getItem("accessToken"))
    console.log(accessToken)
    accessToken.accessToken = token
    localStorage.setItem("accessToken", JSON.stringify(accessToken))
  }
  getUser() {
    return JSON.parse(localStorage.getItem("user"))
  }
  setAccessToken(accessToken) {
    setWithExpiry("accessToken", accessToken, 7200)
    // localStorage.setItem("accessToken", JSON.stringify(accessToken))
  }
  setRefreshToken(refreshToken) {
    setWithExpiry("refreshToken", refreshToken, 603800)
    // localStorage.setItem("refreshToken", JSON.stringify(refreshToken))
  }
  removeUser(name) {
    localStorage.removeItem(name)
  }
}
export default new TokenService()
