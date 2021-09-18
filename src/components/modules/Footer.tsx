import { HamburgerIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons"
import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"

export const Footer: React.FC = () => {
  return (
    <Box pos="fixed" w="100%" bottom={0} bg="pink.200">
      <Flex mx={4} p={4} justify="space-between">
        <Link href="/home">
          <a>
            <VStack>
              <Icon as={HamburgerIcon} w={6} h={6} />
              <Text fontSize="xs">Home</Text>
            </VStack>
          </a>
        </Link>

        <Link href="/search">
          <a>
            <VStack>
              <Icon as={SearchIcon} w={6} h={6} />
              <Text fontSize="xs">探す</Text>
            </VStack>
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <VStack>
              <Icon as={SettingsIcon} w={6} h={6} />
              <Text fontSize="xs">設定</Text>
            </VStack>
          </a>
        </Link>
      </Flex>
    </Box>
  )
}
