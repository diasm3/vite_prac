import axios from "axios"


const kakaoauth = (res) => {
  const { access_token } = res.access_token
  const hello = () => {
    const req = axios.get("http://localhost:3005/api/players/kakaoauth")

    localStorage.setItem("token", "weklfwjelkfjwef")
  }
  hello()
  return <></>
}

export default kakaoauth
