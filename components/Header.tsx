import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import React from "react"

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header: React.FC = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={4}
      bg="pink.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Panino
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>
          <SettingsIcon /> 設定
        </Text>
        <Text>見てるアニメ</Text>
        <Text>今季のアニメ</Text>
        <Text>来季のアニメ</Text>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button variant="outline" colorScheme="white">
          ログアウト
        </Button>
      </Box>
    </Flex>
  )
}

export default Header
