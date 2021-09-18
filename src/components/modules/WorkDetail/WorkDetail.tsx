import { Button } from "@chakra-ui/button"
import { Box, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/layout"
import { NextPage } from "next"

export const WorkDetail: NextPage = () => {
  return (
    <Box>
      <Heading>ワークタイトル</Heading>
      <VStack align="stretch">
        <Flex p={4} shadow="sm">
          <Text>第1話 エピソードタイトル</Text>
          <Spacer />
          <Button size="xs" w="6em" colorScheme="pink">
            視聴済み
          </Button>
        </Flex>
        <Flex p={4} shadow="sm">
          <Text>第2話 エピソードタイトル</Text>
          <Spacer />
          <Button size="xs" w="6em" variant="outline" colorScheme="pink">
            未視聴
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}
