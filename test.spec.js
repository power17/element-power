test('test add', () => {
  expect(1 + 2).toBe(3)
})
function sayHello(name, fn) {
  if (name == '大圣') {
    fn()
  }
}
// test('测试函数', () => {
//   const fn = jest.fn()

//   sayHello('power', fn)
//   expect(fn).toHaveBeenCalled()
// })
