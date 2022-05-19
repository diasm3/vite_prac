import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Box, Center, Button } from "@chakra-ui/react"
import { useControllableState } from "@chakra-ui/react"
import { setWithExpiry, getWithExpiry } from "../modules/localStorageControl"
import Header from "../components/Header"
import axios from "axios"
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"
import jwtDecode from "jwt-decode"

const signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const [token, setToken] = useState(null)

  // 로그인 정보를 서버에 전송하고, 성공시 token을 받아온다.
  const onSubmit = async (data) => {
    // console.log(register(email))
    setData({
      email: data.email,
      password: data.password,
    })

    const req = await axios.post("/api/players/signin", data)
    console.log(req)

    const accessToken = req.headers.authorization
    const refreshToken = req.headers.refresh

    console.log(refreshToken, accessToken)
    setWithExpiry("access", accessToken, 1000000)
    setWithExpiry("refresh", refreshToken, 603800)

    // setToken(token)
    // console.log()
    // cookie.set("token", token)
  }

  const axiosApiInstance = axios.create()

  axiosApiInstance.interceptors.request.use(
    async (config) => {
      const userInfo = getWithExpiry("refresh")
      const accessToken = userInfo ? JSON.parse(userInfo).accessToken : null
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: application.json,
      }
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )

  axiosApiInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async function (error) {
      const originalRequest = error.config
      if (error.response.status === 401 && !originalRequest._retry) {
        console.log("expired token")
        originalRequest._retry = true
        const userInfo = getWithExpiry("refresh")
        const accessToken = userInfo ? JSON.parse(userInfo).accessToken : null
        if (userInfo) {
          originalRequest.headers["Authorization"] = "Bearer " + accessToken
          userInfo.accessToken = accessToken
          setWithExpiry("access", JSON.stringify(userInfo))
        }
        return axios(originalRequest)
      }
      return Promise.reject(error)
    }
  )

  const auth = async () => {
    const token = getWithExpiry("refresh")
    if (!token) {
      alert("로그인이 필요합니다.")
      return null
    }
    const header = {
      Authorization: token,
    }

    const req = await axios.get("/api/players/auth", header)
    setWithExpiry("access", req.headers.access.split(" ")[1], 7200)
  }

  const [value, setValue] = useControllableState({ defaultValue: false })

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm()
  return (
    <div>
      <Header/>
      <Box margin="30px">
        <Center w="300px">
          <FormControl size="xs">
            <Box padding="5px" border="solid" borderRadius="2%">
              <FormLabel size="xs" htmlFor="username">
                로그인
              </FormLabel>
              <Input
                variant="outline"
                size="xs"
                id="email"
                placeholder="이메일을 입력하세요"
                defaultValue="diasm5@gmail.com"
                {...register("email", {
                  required: "이메일 입력하세요",
                  minLength: 3,
                  MaxLength: 15,
                })}
                type="text"
              />
              <Input
                variant="outline"
                size="xs"
                id="Password"
                placeholder="암호를 입력하세요"
                type="password"
                defaultValue="diasm6023"
                {...register("password", {
                  required: "비밀번호를 입력하세요",
                  minLength: 5,
                  MaxLength: 15,
                })}
              />
              {/* <Flex></Flex> */}
              <form onClick={handleSubmit(onSubmit)}>
                <Button
                  size="xs"
                  borderRadius="md"
                  type="submit"
                  // onClick={onSubmit}
                >
                  로그인
                </Button>
              </form>
              <Button size="xs" borderRadius="md" onClick={auth}>
                토큰확인
              </Button>
            </Box>
          </FormControl>
        </Center>
      </Box>
    </div>
  )
}

export default signin