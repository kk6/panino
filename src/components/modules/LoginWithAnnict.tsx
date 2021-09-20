import { Button, Flex, Heading, Stack } from "@chakra-ui/react"
import { signIn } from "next-auth/client"

export const LoginWithAnnict: React.FC = (): JSX.Element => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={4} w={"full"} maxW={"md"} p={6} my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Panino
        </Heading>
        <Stack spacing={6}>
          <Button
            variant="outline"
            colorScheme="pink"
            onClick={() => signIn("annict")}
          >
            Annict でログイン
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
