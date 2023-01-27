// enums
import { Color, Direction } from '../types';

// interface
import type { ThingsInLife } from '../types';

function printRGB(color: Color) {
    return color
}

console.log(printRGB(Color.Blue));
console.log(printRGB(Color.Green));


function printThingsInLife(things: ThingsInLife) {
    return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`
}

console.log(printThingsInLife({colorOfPen: Color.Blue, keyboardArrow: Direction.Left}));


