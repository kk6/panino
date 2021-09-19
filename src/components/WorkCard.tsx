import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import Link from "next/link"

interface Props {
  annictId: number | undefined
  title: string | undefined
  episodesCount: number | undefined
  imageUrl: string | undefined
}
export const WorkCard: React.FC<Props> = ({
  annictId,
  title,
  episodesCount,
  imageUrl,
}) => {
  const href = `works/${annictId}/episodes`
  return (
    <Flex p={2} alignItems="center" justifyContent="center">
      <Link href={href}>
        <Box mx="auto" rounded="lg" shadow="md" bg="red.300" maxW="2xl">
          <Image
            src={imageUrl ? imageUrl : "no-image.png"}
            roundedTop="lg"
            w="full"
            h={48}
            bgColor="gray.50"
            fit="cover"
          />
          <Box p={6}>
            <Heading fontSize="sm">{title}</Heading>
          </Box>
        </Box>
      </Link>
    </Flex>
  )
}
