import { useState, useEffect } from "react"
import { Flex, Box, Button, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import axios from "axios"
import LoginNew from "./components/LoginNew"
import Signupform from "./components/SignupForm"

function App() {
  const { handleSubmit } = useForm()

  const [data, setData] = useState([])
  const [login, setLogin] = useState([])



  useEffect(() => {
    // getData(setData)
    // getData2(setLogin)
  }, [])

  return (
    <div>
      <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
        <Button size="xs" borderRadius="md" backgroundColor="blueviolet">
          <a href="http://localhost:3000/players/kakaoauth">
            <Text color="white">카카오 로그인</Text>
          </a>
        </Button>
        <Button size="xs" borderRadius="md" backgroundColor="lightyellow">
          <a href="http://localhost:3000/players/googleauth">구글 로그인</a>
        </Button>
        <Button size="xs" borderRadius="md" backgroundColor="lightsalmon">
          <a href="/Signupform">이메일 로그인</a>
        </Button>
        <Button size="xs" borderRadius="md" backgroundColor="skyblue">
          <a href="/Signupform">회원가입</a>
        </Button>
      </Flex>
      <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
        <LoginNew />
      </Flex>
      <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
        <Signupform />
      </Flex>
    </div>
  )
}

export default App
