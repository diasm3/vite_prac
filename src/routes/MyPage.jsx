import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import UserService from "../service/user.service"
import { Box, Flex, Center, Text, Grid, GridItem } from "@chakra-ui/react"
import playerEdit from "../service/user.service"

const mypage = () => {
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
    console.log(res.data.rows)

    const { email, nickname, mbti, profileImg } = res.data.rows.profile[0]
    setData({ email, nickname, mbti, profileImg })
  }

  const editProfile = async () => {
    try {
      const res = await playerEdit(data.nickname, data.profileImg)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
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
        <Flex>
          <Box padding="5px" border="solid" borderRadius="2%">
            <Grid rounded={30} width={285}>
              {}
              <GridItem
                borderBottom={"1px solid grey"}
                colSpan={2}
                padding={1}
                bg="papayawhip"
              >
                <Text fontSize="sm"> 닉네임 : {data.nickname}</Text>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default mypage
