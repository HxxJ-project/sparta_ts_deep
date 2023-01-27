enum Color {
    Red = 200,
    Green,
    Blue = 400,
    Purple,
}

const myColor: Color = Color.Red
console.log(myColor)

const yourColor: Color.Blue = Color.Blue
console.log(yourColor)

console.log(Color["Red"])
console.log(Color["Green"])

console.log(Color[0])
console.log(Color[2])

console.log(Color)
