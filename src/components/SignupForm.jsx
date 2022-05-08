import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Box, Center, Button } from "@chakra-ui/react"
import axios from "axios"
import {
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"



const loginForm = () => {
  const [data, setData] = useState({
    email: "",
    password : "",
    nickname: "",
    mbti: "",
    profileImg: "",
  })

  const onSubmit = async (data) => {
      setData({
          email: data.email,
          password: data.password,
          nickname: data.nickname,
          mbti: data.mbti,
          profileImg: data.profileImg,
      })
      console.log(data)

      const req = await axios.post("/players/signup", data)
      .catch((err)=>console.log(err))
  }

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm()
  return (
    <div>
      <Box backgroundColor="">
        <Center w="300px">
          <FormControl size="xs">
            <Box padding="5px" border="solid" borderRadius="2%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel size="xs" htmlFor="username">
                  회원가입 작성
                </FormLabel>
                <Input
                  variant="outline"
                  size="xs"
                  id="email"
                  defaultValue="diasm2@gmail.com"
                  placeholder="이메일을 입력하세요"
                  {...register("email", {
                    required: "이메일을 입력하세요",
                    minLength: 3,
                    MaxLength: 15,
                  })}
                  type="text"
                />
                <Input
                  variant="outline"
                  size="xs"
                  id="Password"
                  defaultValue="123456"
                  placeholder="암호를 입력하세요"
                  type="password"
                  {...register("password", {
                    required: "비밀번호를 입력하세요",
                    minLength: 5,
                    MaxLength: 15,
                  })}
                />
                <Input
                  variant="outline"
                  size="xs"
                  id="nickname"
                  placeholder="nickname을 입력하세요"
                  defaultValue="하하"
                  // type="textbox"
                  {...register("nickname", {
                    required: "닉네임을 입력하세요",
                    minLength: 1,
                    MaxLength: 100,
                  })}
                />
                <Input
                  variant="outline"
                  size="xs"
                  id="mbti"
                  placeholder="mbti을 입력하세요"
                  defaultValue="ISTJ"
                  // type="textbox"
                  {...register("mbti", {
                    required: "mbti을 입력하세요",
                    minLength: 1,
                    MaxLength: 100,
                  })}
                />
                <Input
                  variant="outline"
                  size="xs"
                  id="profileImg"
                  placeholder="사진을 입력하세요"
                  defaultValue="img"
                  // type="context"
                  {...register("profileImg", {
                    required: "사진을 입력하세요",
                    MaxLength: 2000,
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
