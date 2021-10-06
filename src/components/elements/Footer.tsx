import { Box, Flex, Icon, VStack } from "@chakra-ui/react"
import { IoHomeOutline, IoLibraryOutline } from "react-icons/io5"
import { RiPencilLine, RiSearchLine } from "react-icons/ri"

import { Link } from "@/components/elements/Link"

import { SidebarButton } from "./SidebarButton"

export const Footer: React.FC = () => {
  return (
    <Box pos="fixed" w="100%" bottom={0} bg="white">
      <Flex mx={4} p={4} justify="space-between">
        <SidebarButton />
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
        <Link href="/library/watching">
          <a>
            <VStack>
              <Icon as={IoLibraryOutline} w={6} h={6} />
            </VStack>
          </a>
        </Link>
      </Flex>
    </Box>
  )
}
