console.log('Hello World')

console.log('Hello World2\n')

// ชนิดข้อมูล (Data Type)
// Number, String, Boolean

var id = 3 // Number
var name = 'Artdvp' // String
var ok = true // Boolean

var name2 = `Artdvp id = ${id}` // การทำ String ให้สามารถใส่ตัวแปรหรือ expression (Template literals) ครอบด้วย `...`
console.log(name2)
// Array, Object, Function
// Object
/*
var Object = {
  key: 'value'
}
*/
var student = {
  code: '001',
  name: 'Artdvp2'
}

// แสดงค่า
console.log(student.code) // 001
console.log(student.name) // Artdvp
// เพิ่ม key ใหม่
student['age'] = 25
console.log(student.age)
// ลบ key 
delete student.age
console.log(student.age)
// Array
// เก็บข้อมูลใน array เป็นชนิดใดก็ได้
var list = ['aaa',1 , {id: 1}, ['AAAA','BBBB']]

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element);
}
/*
result:
'aaa'
1
{ id: 1 }
['AAAA','BBBB']
*/
