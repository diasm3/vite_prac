import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Box, Center, Button, Flex } from "@chakra-ui/react"
import axios from "axios"
import { Input, FormControl, FormLabel } from "@chakra-ui/react"

const mbtiList = [
  ["ISTJ", "청렴한 논리주의자"],
  ["ISFJ", "용감한 수호자"],
  ["ISTP", "만능 재주꾼"],
  ["ISFP", "호기심 많은 예술가"],
  ["INFJ", "선의의 옹호자"],
  ["INTJ", "용의주도한 전략가"],
  ["INFP", "열정적인 중재자"],
  ["INTP", "논리적인 사색가"],
  ["ESTP", "모험을 즐기는 사업가"],
  ["ESFP", "자유로운 영혼의 연예인"],
  ["ESTJ", "엄격한 관리자"],
  ["ESFJ", "사교적인 외교관"],
  ["ENFP", "재기발랄한 활동가"],
  ["ENTP", "논쟁을 즐기는 변론가"],
  ["ENFJ", "정의로운 사회운동가"],
  ["ENTJ", "대담한 통솔자"],
]

const loginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
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

    const req = await axios
      .post("/players/signup", data)
      .catch((err) => console.log(err))
  }

  const onSubmitDupNickname= async (nickname) => {
    const req = await axios
      .post("/players/dupNickname", nickname)
      .catch((err) => console.log(err))
    return req
  }

  const {
    register,
    handleSubmit,
    watch,
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
                  defaultValue="diasm5@gmail.com"
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
                  defaultValue="diasm6023"
                  placeholder="암호를 입력하세요"
                  type="password"
                  {...register("password", {
                    required: "비밀번호를 입력하세요",
                    minLength: 5,
                    MaxLength: 15,
                  })}
                />
                <Box>
                  <Flex>
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
                    <Button
                      size="xs"
                      borderRadius="md"
                      onClick={() => {
                        onSubmitDupNickname(watch('nickname'))
                      }}
                    >
                      중복확인
                    </Button>
                  </Flex>
                </Box>

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
                {/* <Flex>
                  <Menu>
                    <MenuButton>Open menu</MenuButton>
                    <Portal>
                      <MenuList>
                        {/* {mbtiList.map((mbti) => (
                        <MenuItem>{mbti}</MenuItem>
                      ))} 
                        <MenuItem>ISTJ</MenuItem>
                        <MenuItem>ISTJ</MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                </Flex> */}

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
