export enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "blue"
}

export enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}

export type TThingsInLife = {
    colorOfPen: Color;
    keyboardArrow: Direction;
}

export interface ThingsInLife {
    colorOfPen: Color;
    keyboardArrow: Direction;
}

export interface MyInterface {
	value: string | number | string[]
}

// < Generic Version >
export interface MyInterfaceG<T = string> {
	value:T;
}

export type User = {
    email: string,
    name: string
}

export enum Status {
    Initiated = "Initiated",
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
}

export interface Order {
    buyer: string;
    orderStatus: Status
}