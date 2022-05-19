import axios from "axios"

const googleauth = (res) => {
  const { access_token } = res.access_token
  const hello = () => {
    const getData = axios.get("http://localhost:3005/api/players/kakaoauth")
    localStorage.setItem("token", "weklfwjelkfjwef")
  }
  hello()
  return <></>
}

export default googleauth
