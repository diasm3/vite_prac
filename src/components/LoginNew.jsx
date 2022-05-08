import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Box, Center, Button } from "@chakra-ui/react"
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
    password : "",
  })
  const { email, password } = data

  const onSubmit = async (data) => {
      setData({
          email: data.email,
          password : data.password,
      })
      console.log(data)

      const req = await axios.post("/players/signin", data)
      console.log(req)
      .catch((err)=>console.log(err))
  }

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel size="xs" htmlFor="username">
                    로그인
                </FormLabel>
                <Input
                  variant="outline"
                  size="xs"
                  id="email"
                  placeholder="이메일을 입력하세요"
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
                  {...register("password", {
                    required: "비밀번호를 입력하세요",
                    minLength: 5,
                    MaxLength: 15,
                  })}
                />
                <Button size="xs" borderRadius="md" type="submit">
                  확인
                </Button>
              </form>
            </Box>
          </FormControl>
        </Center>
      </Box>
    </div>
  )
}

export default loginForm
