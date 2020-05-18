// var greeting = (firstName, lastName) => 'hello, ' + firstName + ' ' + lastName
// var toUpper = str => str.toUpperCase()
// var fn = compose(
//   toUpper,
//   greeting
// )
// console.log(fn('jack', 'smith'))
// ‘HELLO，JACK SMITH’

var compose = () => {
  var args = arguments,
    length = args.length
  return () => {
    var index = length - 1
    var result = args[index].apply(args)

    while (index--) {
      result = args[index].call(result)
    }

    return result
  }
}

console.log(
  compose(
    () => {
      return 1
    },

    compose(() => {
      return 2
    }),
    'result'
  )
)
