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

const getLen = async (data) =>{
    const len = await axios
      .get("http://localhost:8089/board/list")
      .then((data) => setData({ numId: data.len }))
    return len
}






const loginForm = () => {
  const [data, setData] = useState({
    numId: getLen+1,
    username : "",
    password : "",
    title : "",
    context: "",
    date: "",
  })
  const { numId, username, password, title, context, date } = data

  const onSubmit = async (data) => {
      setData({
          username : data.username,
          password : data.password,
            title : data.title,
            context: data.context,
            data : Date()
      })
      console.log(data)

      const req = await axios.post("/board/write", data)
      .catch((err)=>console.log(err))
  }

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm()
  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="=First Name" {...register("firstname")} />
            <input type="submit"/>
        </form> */}
      <Box backgroundColor="lightpink">
        <Center w="300px">
          <FormControl size="xs" onSubmit={handleSubmit(onSubmit)}>
            <Box padding="5px" border="solid" borderRadius="2%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel size="xs" htmlFor="username">
                  게시판 작성
                </FormLabel>
                <Input
                  variant="outline"
                  size="xs"
                  id="username"
                  placeholder="이름을 입력하세요"
                  {...register("username", {
                    required: "이름을 입력하세요l",
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
                <Input
                  variant="flushed"
                  size="xs"
                  id="title"
                  placeholder="제목을 입력하세요"
                  type="title"
                  {...register("title", {
                    required: "제목을 입력하세요",
                    minLength: 1,
                    MaxLength: 100,
                  })}
                />
                <Input
                  variant="flushed"
                  size="xs"
                  id="context"
                  placeholder="내용을 입력하세요"
                  type="context"
                  {...register("context", {
                    required: "내용을 입력하세요",
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
