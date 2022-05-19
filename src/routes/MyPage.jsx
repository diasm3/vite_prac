import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import { useForm } from "react-hook-form"
import { setWithExpiry, getWithExpiry } from "../modules/localStorageControl"
import { Box, Center, Button, Text, Grid, GridItem } from "@chakra-ui/react"
import axios from "axios"
import { useCookies, Cookies, withCookies } from "react-cookie"
const cookie = new Cookies()

const mypage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["Authorization"])
  const [data, setData] = useState({
    email: "",
    nickname: "",
    mbti: "",
    profileImg: "",
  })

  function MyComponent() {
    const hello = cookie.get("Authorization")
    setCookie("Authorization2", "wlekjflwkejf", { path: "/" })
    const hello2 = getCookie("Authorization")
    console.log(hello)

    return hello
  }
  const NewComponent = withCookies(MyComponent)
  NewComponent.WrappedComponent === MyComponent

  useEffect(() => {
    MyComponent()
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const token = getWithExpiry("access")

    const header = {
      headers: {
        Authorization: token ? token : cookieToken,
      },
    }
    const req = await axios.get("/api/players/mypage", header)
    setData(req.data.profile)
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
