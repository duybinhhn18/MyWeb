// alert("Helo")
// console.log("Helo")
// prompt("Hay nhap ten cua ban: ")

// // Khai báo biến (không gán giá trị)
// var My_name;
// let Your_name;

// // Khởi tạo biến (có gán giá trị)
// var Tuoi = 16;
// const doSoi = 100;
// let first_name = "Gay";

// // Xuất giá trị của biến
// console.log(doSoi)
// console.log("Nhiệt độ sôi của nước là: " + doSoi + " độ C")
// console.log("Tuổi của " + first_name + " là: " + Tuoi + " tuổi")

// // Bài tập
// var user_input;
// user_input = prompt("Hay nhap tuoi cua ban: ")
// alert("Tuổi của bạn là: " + user_input)


// Kiểu dữ liệu
let soNguyen = 10;
let soThuc = 3.14;

let isFalse = false;

// alert(typeof isFalse)
console.log("So nguyen an toan toi da: " + Number.MAX_SAFE_INTEGER)
console.log("So nguyen an toan toi thieu: " + Number.MIN_SAFE_INTEGER)


// Các cách xuất dữ liệu
let soA = 25
let soB = 5

// Cách 1:
console.log("Căn bậc 2 của " + soA + " là: " + soB)

// Cách 2:
console.log("Căn bậc 2 của" , soA , "là:" , soB)

// Cách 3:
console.log(`Căn bậc 2 của ${soA} là: ${soB}`)

// Cách 4
console.log(`Căn bậc 2 của %s là: %s `, soA, soB)

// Luyện tập
// let a = 4,
//     b = 3,
//     kq = a * b;

// console.log(`${a} x ${b} = ${kq}`)


// Các phép toán trong JS
let A = 3;
let B = 2;

// Các phép toán
let tong = A + B;
let hieu = A - B;
let tich = A * B;
let thuong = A / B;
let soDu = A % B;

// Xuất kết quả
console.log(`Tổng 2 số ${A} và ${B}: ${tong}`)
console.log(`Hiệu 2 số ${A} và ${B}: ${hieu}`)
console.log(`Tích 2 số ${A} và ${B}: ${tich}`)
console.log(`Thương 2 số ${A} và ${B}: ${thuong}`)
console.log(`Số dư phép chia 2 số ${A} và ${B}: ${soDu}`)


// // Ép kiểu dữ liệu
// // Nhập dữ liệu + chuyển sang kiểu Int
// let NumberA = parseInt(prompt("Hãy nhập vào số A: "))

// // Nhập dữ liệu + chuyển sang kiểu Float
// let NumberB = parseFloat(prompt("Hãy nhập vào số B: "))

// // Nhập dữ liệu + chuyển sang kiểu Number
// let NumberC = Number(prompt("Hãy nhập vào số C: "))


// // Toán tử tiền tố hậu tố
// let a = 2;
// let b = 3;
// let c = 4;
// let d = 5;

// a++ // Tăng a lên 1 đơn vị: a = 3 
// b-- // Giảm b đi 1 đơn vị: b = 2 
// ++c // Tăng c lên 1 đơn vị: c = 5 
// --b // Giảm d đi 1 đơn vị: d = 4

// Thứ tự thực hiện phép toán
let a = 1;
let b = 2;

let kq = a++ - ++b + 1;

// Thứ tự như sau:
// ++b => b = 3
// a = 1, b = 3 => 1 - 3 + 1 = -1
// kq = -1
// a++ => a = 2