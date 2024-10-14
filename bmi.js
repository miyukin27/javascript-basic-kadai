// 体重：68kg
// 身長：1.7m
// 計算式：[体重(kg)]÷[身長(m)×身長(m)]

// 変数の宣言・値の代入
let userWeight = 68;
let userHeigh = 1.7;

// BMI（体格指数）を計算し定数へ代入
const userBmi =  userWeight / userHeigh * userHeigh;

// BMI（体格指数）を出力
console.log(userBmi);