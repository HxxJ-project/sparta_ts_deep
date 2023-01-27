import {Color} from "../types"

const myColor: Color = Color.Red;
console.log(myColor)

const yourColor: Color.Blue = Color.Blue;
console.log(yourColor)

const chorock: Color = Color.Green
console.log(chorock);

const faveColor = "Red" as Color;
console.log(faveColor) // Red

const imposterColor = "Potato" as Color;
console.log(imposterColor) // Potato