import { Flex, Box, Button, Text } from "@chakra-ui/react"
import LoginNew from "./components/LoginNew"
import Signupform from "./components/SignupForm"
// import { FormTest } from "./components/FormTest"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Cookie from "universal-cookie"
import { useControllableProp, useControllableState } from "@chakra-ui/react"
const cookie = new Cookie()

function App() {
  const [isLogin, setIsLogin] = useState({
    toggle: false,
  })

  const [signup, setSignup] = useState({ toggle: false })

  const loginToggle = () => {
    setIsLogin({ toggle: !isLogin.toggle })
  }

  const signupToggle = () => {
    setSignup({ toggle: !signup.toggle })
  }

  useEffect(() => {}, [])

  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm()
  console.log(watch("name"), watch("password"))

  // const [value, setValue] = useControllableState({ defaultValue: false })
  const [internalValue, setInternalValue] = useControllableState({
    login: isLogin,
    onChange: setIsLogin,
  })
  return (
    <div>
      <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
        {/* // 카카오 로그인 */}
        <a href="/players/kakaoauth">
          <Button size="xs" borderRadius="md" backgroundColor="blueviolet">
            <Text color="white">카카오 로그인</Text>
          </Button>
        </a>
        {/* //구글 로그인 */}
        <a href="/players/googleauth">
          <Button size="xs" borderRadius="md" backgroundColor="lightyellow">
            구글 로그인
          </Button>
        </a>
        {/* //이메일 로그인 */}
        <Button
          size="xs"
          borderRadius="md"
          backgroundColor="lightsalmon"
          type="submit"
          onClick={() => loginToggle()}
        >
          이메일 로그인
        </Button>

        {/* //이메일 회원가입 */}
        <Button
          size="xs"
          borderRadius="md"
          backgroundColor="skyblue"
          type="submit"
          onClick={() => signupToggle()}
        >
          회원가입
        </Button>
      </Flex>
      <Box>
        <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
          {isLogin.toggle ? <LoginNew /> : null}
        </Flex>
        <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
          {signup.toggle ? <Signupform /> : null}
        </Flex>
        <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
          {cookie.get("token") ? (
            <Button
              size="xs"
              borderRadius="md"
              backgroundColor="skyblue"
              // type="submit"
              onClick={() => {
                setIsLogin("toggle", false), cookie.remove("token")
              }}
            >
              로그아웃
            </Button>
          ) : (
            <Button
              size="xs"
              borderRadius="md"
              backgroundColor="skyblue"
              onClick={() => setIsLogin({ toggle: true })}
            >
              로그인
            </Button>
          )}
          {/* <Box as="span" w="200px" mx="24px">
            <Text size="8px">{internalValue}</Text>
          </Box> */}
        </Flex>
      </Box>
      {/* <FormTest /> */}
    </div>
  )
}

export default App
