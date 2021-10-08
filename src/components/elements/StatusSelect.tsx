import { Select } from "@chakra-ui/react"

import { StatusState } from "@/generated/graphql"

type Props = {
  state: string
  onChangeFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
export const StatusSelect: React.FC<Props> = ({ state, onChangeFunc }) => {
  return (
    <Select
      size="sm"
      rounded="md"
      placeholder="..."
      onChange={(e) => onChangeFunc(e)}
      defaultValue={state}
    >
      <option value={StatusState.Watching}>見てる</option>
      <option value={StatusState.Watched}>見た</option>
      <option value={StatusState.WannaWatch}>見たい</option>
      <option value={StatusState.OnHold}>一時中断</option>
      <option value={StatusState.StopWatching}>視聴中止</option>
    </Select>
  )
}
