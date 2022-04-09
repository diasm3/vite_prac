import { useState, useEffect } from "react"
import axios from "axios"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Text, Flex, Box, Center, Textarea, Spacer } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import LoginForm from "./LoginForm"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"

function App() {
  const [data, setData] = useState([])
  const [write, setWrite] = useState({})



  const db = {   
    "numId": "4",
    "username": "아리까리23433242sdafsdf34234",
    "password": "1234523423",
    "title" : "글제wefwe목",
    "context" : "글내용wefwe",
    "date" : "2020-01-02",
    "updateDate" : "2020-01-01"
}
  
  useEffect(() => {
    axios
      .get("http://localhost:8089/board/list")
      .then((res) => {
        console.log(res.data.data)
        setData([...res.data.data])
      })
      .catch((err) => console.log(`err : `, err))
  }, [])

  return (
    <div>
      <Flex backgroundColor="" marginTop="30px" marginLeft="30px">
        <LoginForm/>
      </Flex>
      <Flex>
        <Box>
          <TableContainer>
            <Table variant="striped" colorScheme="grey">
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr>
                  <Th>번호</Th>
                  <Th>제목</Th>
                  <Th>작성자 아이디</Th>
                  <Th>작성날짜</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item, index) => {
                  return (
                    <Tr>
                      <Th>{item.board.numId}</Th>
                      <Th>{item.board.title}</Th>
                      <Th>{item.board.username}</Th>
                      <Th>{item.board.date}</Th>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </div>
  )
}

export default App
