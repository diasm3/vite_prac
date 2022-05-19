import axios from "axios"
import TokenService from "./token.service"
const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
})
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken()
    console.log(token)
    if (token) {
      // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      config.headers["accesstoken"] = token // for Node.js Express back-end
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err.config
    if (originalConfig.url !== "/api/players/signin" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
        try {
          console.log("리프레쉬 토큰 요청")
          const rs = await instance.get("/api/players/auth", {
            headers: {
              refreshToken: TokenService.getLocalRefreshToken(),
            },
          })
          console.log("여기도 실행은 되는건가?")
          console.log(rs)
          const { accessToken } = rs.headers["accesstoken"]
          TokenService.updateLocalAccessToken(accessToken)
          return instance(originalConfig)
        } catch (_error) {
          return Promise.reject(_error)
        }
      }
    }
    return Promise.reject(err)
  }
)
export default instance
