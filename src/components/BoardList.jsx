import React from "react"
import { Box } from "@chakra-ui/react"

const Boardlist = () => {
  return (
    <Flex>
      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="grey">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                {/* //email, nickname, password, mbti, profileImg */}
                <Th>이메일</Th>
                <Th>닉네임</Th>
                <Th>비번</Th>
                <Th>mbti</Th>
                <Th>사진</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {data.map((item, index) => {
                  return (
                    <Tr key='index'>
                      <Th>{item.board.numId}</Th>
                      <Th>{item.board.title}</Th>
                      <Th>{item.board.username}</Th>
                      <Th>{item.board.date}</Th>
                    </Tr>
                  )
                })} */}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  )
}

export default Boardlist
