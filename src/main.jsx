import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import Kakaoauth from "./routes/Kakaoauth"
import Mypage from "./routes/MyPage"
import Signin from "./routes/Signin"
import Signup from "./routes/signup"
import Googleauth from "./routes/Googleauth"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/api/players/kakaoauth2" element={<Kakaoauth />} />
          <Route path="/api/players/googleauth" element={<Googleauth />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="mypage" element={<Mypage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
