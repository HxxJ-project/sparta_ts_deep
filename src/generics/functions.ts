// enums
import {Status} from "../types/index"
// types
import type {User, Order} from "../types/index"

function getData<T>(data: T): T {
	return data;
}

console.log(getData<string>("string data"))
console.log(getData("string data")) // 타입추론, 위랑 같음
console.log(getData(1234));
console.log(getData<User>({email: "email@email.com", name: "katie"}))
console.log(getData<string[]>(["string", "data"]))
console.log(getData<string[]>([]))

const orders:Order[] = Object.values(Status).map((status, index) => {
	return {
		buyer: `buyer #${index}`,
		orderStatus: status
	}
})

const orderss:Order[] = Object.entries(Status).map(([_, statusEnum], index) => {
	return {
		buyer: `buyer #${index}`,
		orderStatus: statusEnum
	}
})