import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Box, Center, Button } from "@chakra-ui/react"
import { useControllableProp, useControllableState } from "@chakra-ui/react"
import Cookie from "universal-cookie"
const cookie = new Cookie()
import axios from "axios"
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

const loginForm = () => {
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
    console.log(data)

    const req = await axios.post("/players/signin", data)
    const token = req.headers.authorization.split(" ")[1]
    setToken(token)
    console.log()
    cookie.set("token", token)
  }

  const auth = async () => {
    console.log("hellosubmit")
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const req = await axios.get("/players/auth", header)
    console.log(req)
    setToken(req.headers.authorization.split(" ")[1])
  }

  const [value, setValue] = useControllableState({ defaultValue: false })

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm()
  return (
    <div>
      <Box backgroundColor="lightgrey">
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

export default loginForm
