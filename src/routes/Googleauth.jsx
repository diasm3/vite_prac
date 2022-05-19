import axios from "axios"

const googleauth = (res) => {
  const hello = () => {
    const getData = axios.get("http://localhost:3005/api/players/kakaoauth")
    localStorage.setItem("token", getData)
  }
  hello()
  return <></>
}

export default googleauth
