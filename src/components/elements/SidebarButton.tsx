import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { signOut, useSession } from "next-auth/client"
import { BsCheck, BsPause, BsPlay, BsStop } from "react-icons/bs"
import { IoMenu } from "react-icons/io5"
import { MdFiberManualRecord } from "react-icons/md"

import { Link } from "@/components/Link"

export const SidebarButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [session, _loading] = useSession()
  const name = session?.user?.name || ""
  const avatarUrl = session?.user?.image || ""
  return (
    <>
      <VStack onClick={onOpen}>
        <Icon as={IoMenu} w={6} h={6} />
      </VStack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack>
              <Stack direction="row">
                <Flex justify="center" p={4}>
                  <Avatar size="lg" src={avatarUrl} />
                </Flex>
                <Flex p={2} alignItems="center">
                  <Stack w="full">
                    <Heading fontSize="md" fontWeight={600} w="8rem">
                      {name}
                    </Heading>
                  </Stack>
                </Flex>
              </Stack>
              <Spacer />
              <Heading fontSize="md">ライブラリ</Heading>
              <List spacing={2}>
                <ListItem>
                  <Link href="/library/watching">
                    <Text>
                      <ListIcon as={BsPlay} />
                      見てるアニメ
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/library/watched">
                    <Text>
                      <ListIcon as={BsCheck} />
                      見たアニメ
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/library/wanna-watch">
                    <Text>
                      <ListIcon as={MdFiberManualRecord} />
                      見たいアニメ
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/library/on-hold">
                    <Text>
                      <ListIcon as={BsPause} />
                      一時中断しているアニメ
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/library/stop-watching">
                    <Text>
                      <ListIcon as={BsStop} />
                      視聴中止したアニメ
                    </Text>
                  </Link>
                </ListItem>
              </List>
              <Spacer />
              <Heading fontSize="md">リンク</Heading>
              <Link href="https://annict.com">Annict</Link>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              colorScheme="white"
              onClick={() =>
                signOut({
                  callbackUrl: `${window.location.origin}`,
                })
              }
            >
              ログアウト
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
