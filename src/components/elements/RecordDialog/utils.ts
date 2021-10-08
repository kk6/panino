import { RatingState } from "@/generated/graphql"

export const getRatingState = (
  rating: string | undefined
): RatingState | undefined => {
  if (!rating) {
    return
  }
  switch (rating) {
    case "GREAT":
      return RatingState.Great
    case "GOOD":
      return RatingState.Good
    case "AVERAGE":
      return RatingState.Average
    case "BAD":
      return RatingState.Bad
    default:
      return
  }
}
