const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(object => object.result === "W")
   return !!result ? result.year : undefined

  }
