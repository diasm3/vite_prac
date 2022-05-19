import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import UserService from "../service/user.service"
import { setWithExpiry, getWithExpiry } from "../modules/localStorageControl"
import { Box, Center, Text, Grid, GridItem } from "@chakra-ui/react"
import axios from "axios"
import { useCookies, Cookies } from "react-cookie"

const cookie = new Cookies()

const mypage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["Authorization"])
  const [data, setData] = useState({
    email: "",
    nickname: "",
    mbti: "",
    profileImg: "",
  })

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const res = await UserService.getMypage()
    const { email, nickname, mbti, profileImg } = res.data.profile
    console.log(email, nickname, mbti, profileImg)
    
    setData({
      email,
      nickname,
      mbti,
      profileImg,
    })
    console.log(res)
  }

  return (
    <div>
      <Header />
      <Box margin="30px">
        <Center w="300px">
          <Box padding="5px" border="solid" borderRadius="2%">
            <Grid rounded={30} width={285}>
              <GridItem
                borderBottom={"1px solid grey"}
                colSpan={2}
                padding={1}
                bg="papayawhip"
              >
                <Text fontSize="sm"> 닉네임 : {data.nickname}</Text>
              </GridItem>
              <GridItem
                borderBottom={"1px solid grey"}
                colSpan={2}
                padding={1}
                bg="papayawhip"
              >
                <Text fontSize="sm"> 이메일: {data.email}</Text>
              </GridItem>
              <GridItem
                borderBottom={"1px solid grey"}
                colSpan={2}
                padding={1}
                bg="papayawhip"
              >
                <Text fontSize="sm"> MBTI : {data.mbti}</Text>
              </GridItem>
              <GridItem
                borderBottom={"1px solid grey"}
                colSpan={2}
                padding={1}
                bg="papayawhip"
              >
                <Text fontSize="sm"> 사용자 사진: {data.profileImg}</Text>
              </GridItem>
            </Grid>
          </Box>
        </Center>
      </Box>
    </div>
  )
}

export default mypage
