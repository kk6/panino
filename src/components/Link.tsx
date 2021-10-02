import { Link as ChakraLink, LinkProps } from "@chakra-ui/react"
import NextLink from "next/link"

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <NextLink href={props.href || ""} passHref>
      <ChakraLink {...props} />
    </NextLink>
  )
}
