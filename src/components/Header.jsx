import { Flex, Button, Text } from "@chakra-ui/react"

function Header() {
  return (
    <div>
      <Flex backgroundColor="" margin="30px" marginLeft="30px">
        {/* // 카카오 로그인 */}{" "}
        <a href="/api/players/kakaoauth">
          <Button size="xs" borderRadius="md" backgroundColor="blueviolet">
            <Text color="white">카카오 로그인</Text>
          </Button>
        </a>
        {/* //구글 로그인 */}
        <a href="/api/players/google">
          <Button size="xs" borderRadius="md" backgroundColor="lightyellow">
            구글 로그인
          </Button>
        </a>
        {/* //이메일 로그인 */}
        <a href="/signin">
          <Button
            size="xs"
            borderRadius="md"
            backgroundColor="lightsalmon"
            type="submit"
          >
            이메일 로그인
          </Button>
        </a>
        {/* //이메일 회원가입 */}
        <a href="/signup">
          <Button
            size="xs"
            borderRadius="md"
            backgroundColor="skyblue"
            type="submit"
          >
            회원가입
          </Button>
        </a>
        {/* 마이페이지 */}
        <a href="/mypage">
          <Button
            size="xs"
            borderRadius="md"
            backgroundColor="pink"
            type="submit"
          >
            마이페이지
          </Button>
        </a>
        <a href="/">
          <Button size="xs" borderRadius="md" backgroundColor="lightred">
            로그아웃
          </Button>
        </a>
      </Flex>
      {/* <FormTest /> */}
    </div>
  )
}

export default Header
