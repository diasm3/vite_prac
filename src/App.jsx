import { Flex, Box, Button, Text } from "@chakra-ui/react"
import LoginNew from "./components/LoginNew"
import Signupform from "./components/SignupForm"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

function App() {
  const [login, setLogin] = useState({
    toggle: false,
  })
  const [signup, setSignup] = useState({ toggle: false })

  const loginToggle = () => {
    setLogin({ toggle: !login.toggle })
    console.log(login.toggle)
  }

  const signupToggle = () => {
    setSignup({ toggle: !signup.toggle })
    console.log(signup.toggle)
  }

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm()

  return (
    <div>
      <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
        <Button size="xs" borderRadius="md" backgroundColor="blueviolet">
          <a href="http://localhost:3000/players/kakaoauth">
            <Text color="white">카카오 로그인</Text>
          </a>
        </Button>

        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Button size="xs" borderRadius="md" backgroundColor="lightyellow">
          <a href="http://localhost:3000/players/googleauth">구글 로그인</a>
        </Button>
        {/* </form> */}
        <form onSubmit={handleSubmit(loginToggle)}>
          <Button
            size="xs"
            borderRadius="md"
            backgroundColor="lightsalmon"
            type="submit"
          >
            이메일 로그인
          </Button>
        </form>
        <form onSubmit={handleSubmit(signupToggle)}>
          <Button
            size="xs"
            borderRadius="md"
            backgroundColor="skyblue"
            type="submit"
          >
            회원가입
          </Button>
        </form>
      </Flex>
      <Box>
        <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
          {login.toggle ? <LoginNew /> : null}
        </Flex>
        <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
          {signup.toggle ? <Signupform /> : null}
        </Flex>
      </Box>
    </div>
  )
}

export default App
