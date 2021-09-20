import { Box, Flex, Icon, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5"
import { RiPencilLine, RiSearchLine, RiSettings4Line } from "react-icons/ri"

export const Footer: React.FC = () => {
  return (
    <Box pos="fixed" w="100%" bottom={0} bg="white">
      <Flex mx={4} p={4} justify="space-between">
        <Link href="/home">
          <a>
            <VStack>
              <Icon as={IoHomeOutline} w={6} h={6} />
            </VStack>
          </a>
        </Link>
        <Link href="/record">
          <a>
            <VStack>
              <Icon as={RiPencilLine} w={6} h={6} />
            </VStack>
          </a>
        </Link>
        <Link href="/search">
          <a>
            <VStack>
              <Icon as={RiSearchLine} w={6} h={6} />
            </VStack>
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <VStack>
              <Icon as={RiSettings4Line} w={6} h={6} />
            </VStack>
          </a>
        </Link>
      </Flex>
    </Box>
  )
}
