import { dispatch, isDisplayLoading } from "./utils"

test("サインイン済みでルートにアクセスし、ローディング中の場合は '/home' を返す", () => {
  const result = dispatch(true, "/", true)
  expect(result).toBe("/home")
})

test("サインイン済みでルートにアクセスし、ローディング中でない場合は '/home' を返す", () => {
  const result = dispatch(false, "/", true)
  expect(result).toBe("/home")
})

test("サインイン前にルートにアクセスし、ローディング中の場合は何もしない", () => {
  const result = dispatch(true, "/", false)
  expect(result).toBe(undefined)
})

test("サインイン前にルートにアクセスし、ローディング中でない場合は '/' を返す", () => {
  const result = dispatch(false, "/", false)
  expect(result).toBe("/")
})

test("サインイン済みで '/home' にアクセスし、ローディング中の場合は何もしない ", () => {
  const result = dispatch(true, "/home", true)
  expect(result).toBe(undefined)
})

test("サインイン済みで '/home' にアクセスし、ローディング中でない場合は何もしない ", () => {
  const result = dispatch(false, "/home", true)
  expect(result).toBe(undefined)
})

test("サインイン前に '/home' にアクセスし、ローディング中の場合は何もしない", () => {
  const result = dispatch(true, "/home", false)
  expect(result).toBe(undefined)
})

test("サインイン前に '/home' にアクセスし、ローディング中でない場合は '/' を返す", () => {
  const result = dispatch(false, "/home", false)
  expect(result).toBe("/")
})

test("ローディング中は常にtrue", () => {
  const result = isDisplayLoading(true, "/", true)
  expect(result).toBe(true)
})

test("サインイン前に '/' にアクセスした場合はローディングは出さない", () => {
  const result = isDisplayLoading(false, "/", false)
  expect(result).toBe(false)
})

test("サインイン前に '/home' にアクセスした場合はローディングを出す", () => {
  const result = isDisplayLoading(false, "/home", false)
  expect(result).toBe(true)
})

test("サインイン済みで '/' にアクセスした場合はローディングを出す", () => {
  const result = isDisplayLoading(false, "/", true)
  expect(result).toBe(true)
})

test("サインイン済みで '/home' にアクセスした場合はローディングは出さない", () => {
  const result = isDisplayLoading(false, "/home", true)
  expect(result).toBe(false)
})
