import { Button, Flex, Heading, Stack } from "@chakra-ui/react"

export const LoginWithAnnict = (): JSX.Element => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={4} w={"full"} maxW={"md"} p={6} my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Panino
        </Heading>
        <Stack spacing={6}>
          <Button colorScheme="pink">Annict でログイン</Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
