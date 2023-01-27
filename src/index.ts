interface Toppings {
	tomatoes: boolean;
	onion: boolean;
	lettuce: boolean;
	ketchup: boolean;
}

const myToppings: Toppings = {
	tomatoes: true,
	onion: true,
	lettuce: true,
	ketchup: true,
}

const partialToppingsIWant: Partial<Toppings> = {
	tomatoes: true,
	onion: undefined
};

interface BubbleTeaOrder {
	tea: boolean;
	straw?: boolean;
}

const myBubbleTeaOrder: Required<BubbleTeaOrder> = {
	tea:true,
	straw:true,
}

interface BankAccount {
	accountNumber: string;
	balance: bigint;
}

const myAccount: Readonly<BankAccount> = {
	accountNumber: "1234",
	balance: BigInt(1000000),
}

// myAccount.balance = BigInt(0)

type Type = string[]
type TypeII = Array<string>

type ObjectTypeRecord = Record<string, string>
type ObjectTypeObject = {[x: string]: string}

type Country = "Korea" | "USA" | "Canada" | "UK"
type CountryCode = 82 | 1 | 44

type CountryToCountryCode = Record<Country, CountryCode>
type CountryToCountryCodeObject = {[countryName in Country]: CountryCode}

const countries: CountryToCountryCodeObject = {
	Korea: 82,
	USA: 1,
	Canada: 1,
	UK: 44
}

interface UserInfo {
	userName: string;
	favoriteColor: string;
	email: string;
	password: string
}

type LessUserInfo = Omit<UserInfo, "password" | "email">;

const newUser: UserInfo = {
	userName: "pony",
	favoriteColor: "rainbow",
	password: "1234",
	email: "hello@world.com"
}

const omitUser: LessUserInfo = {
	userName: "kaith",
	favoriteColor: "blue"
}

type MyType = "dog" | "cat" | "alpaca"
type LessMyType = Exclude<MyType, "alpaca">

const catOrDogAllowed: LessMyType = "cat"

type onChange = (isDone:boolean) => boolean;
type GroupOfTypes = string | undefined | onChange;
type FunctionType = Exclude<GroupOfTypes, string | undefined>

const onChangeHandler: FunctionType = (isDone) => isDone;
// console.log(onChangeHandler(true))
// const today: FunctionType = "great day" // boolean만 가능

interface User {
	firstName: string;
	lastName: string;
}

interface Student {
	user: User;
	isGraduated: boolean;
	school: string;
}

type StudentName = Pick<Student, "user" | "isGraduated">;
const studentName: StudentName = {
	user: {
		firstName: "winnie",
		lastName: "pooh"
	},
	isGraduated: true
}

// console.log(studentName)

type MyPet = "dog" | "cat" | "alpaca";
type ExtractedMyPet = Extract<MyPet, "alpaca" | "cat">

const alpacaOrCatAllowed: ExtractedMyPet = "alpaca"

type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>

const queryParam: NonNullableQueryParam = ["orders"];
// const forbiddenQueryParam: NonNullableQueryParam = undefined // null & undefined => 에러