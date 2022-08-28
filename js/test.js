const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(typeof(stuInfo))
console.log(stuInfo.name);
const stuInfoOb = JSON.parse(stuInfo);
console.log(stuInfoOb.name);