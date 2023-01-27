import { Color } from '../types';


const keys = Object.keys(Color); // keys의 타입: string[] -> ⚠️각 Color가 string으로 변환됐습니다
const values = Object.values(Color); // values의 타입: Color[]
const keyValues = Object.entries(Color); // keyValues의 타입: [string, Color][]


type ObjectType = {
    [key in Color]?: string;
}

const myObject:ObjectType = {}

values.forEach((key) => {
    myObject[key] = "hello"
})
console.log(myObject);


type TableData = { [x: string]: string };
// 또는 Record라는 유틸리티 타입을 쓸 수도 있습니다
// type TableData = Record<string, string>;
const myTableData: TableData = {
  ID: "1",
  firstName: "jane",
  lastName: "doe",
  score: "100",
  // 실수로 더해진 키/밸류값
	age: "99",
};
// ✅ 에러 없이 잘 컴파일 됩니다

const enum TableKey {
    ID = "ID",
    FirstName = "firstName",
    LastName = "lastName",
    Score = "score",
  }
  
  type StrictTableData = { [key in TableKey]: string };
  
  // 허용되지 않는 필드가 들어가면
  const myStrictTableData: StrictTableData = {
    ID: "1",
    firstName: "jane",
    lastName: "doe",
    score: "100",
    age: "99", // ❌ Object literal may only specify known properties, and 'Age' does not exist in type 'StrictTableData'.
  };
  
  // 타입에는 있으나 추가가 되지 않을 필드가 있으면
  const myStrictTableDataa: StrictTableData = { // ❌ Property '[TableKey.Score]' is missing in type '{ ID: string; FirstName: string; LastName: string; }' but required in type 'StrictTableData'.
    ID: "1",
    firstName: "jane",
    lastName: "doe",
  };

type LessStrictTableData = { [key in TableKey]?: string };

const lessStrictTableData: LessStrictTableData = {
  ID: "1",
}; // ✅

// 그리고 이렇게 빈 객체도 통과합니다
const emptyTableData: LessStrictTableData = {}; // ✅