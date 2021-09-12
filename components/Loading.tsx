import { Flex, Spinner } from "@chakra-ui/react"

export const Loading: React.FC = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Spinner />
    </Flex>
  )
}
