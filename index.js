// תרגיל 2
console.log("hi");
function star(x, y) {
  let num = [];
  for (let i = 1; i <= x; i++) {
    if (i % y !== 0) {
      num[i - 1] = i;
    } else {
      num[i - 1] = "*";
    }
  }
  console.log(num.join(" "));
}

star(5, 2);

// תרגיל 3
function oddsum(x) {
  let sum = 0;
  for (let i = 1; i <= x; i += 2) {
    sum += i;
  }
  return sum;
}
const x = 40;
const y = oddsum(x);
console.log("The sumodd of " + x + " is " + y);
console.log("The sumodd of " + x + " is " + y);

// תרגיל 1
function whatType(x) {
  if (x === null) return "object";
  if (x === undefined) return "undefined";
  if (x.constructor === Number) return "number";
  if (x.constructor === String) return "string";
  if (x.constructor === Boolean) return "boolean";
  if (x.constructor === Function) return "function";
  if (x.constructor === Array) return "object";

  return "object";
}

let a = {};
let b = [];

console.log("תרגיל 1");
console.log(whatType(a));
console.log(whatType(b));


// תרגיל 4
function arrayDiv(x) {
  let a = [];
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      a.push(i);
      if (i !== x / i) {
        a.push(x / i);
      }
    }
  }
  return a;
}
console.log("תרגיל 4");
console.log(arrayDiv(24));

// תרגיל 5
function rishoni(x) {
  if (x <= 1) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}
console.log(rishoni(7));
console.log(rishoni(4));

//תרגיל 6
const car1 = {
  licensePlate: "1234567",
  brand: "Mazda",
  year: 1997,
  isRepaired: false,
};

const car2 = {
  licensePlate: "7654321",
  brand: "Toyota",
  year: 2005,
  isRepaired: true,
};

const car3 = {
  licensePlate: "1112223",
  brand: "Hyundai",
  year: 2012,
  isRepaired: true,
};

const garage = [car1, car2, car3];
function getGarageStatus() {
  garage.forEach((car) => {
    const statusText = car.isRepaired ? "repaired" : "not repaired";
    console.log(
      `Car license plate ${car.licensePlate}, brand ${car.brand}, year ${car.year} - ${statusText}`
    );
  });
}

function repairCar(plate) {
  let found = false;
  let car = garage.find(car => car.licensePlate === plate)
  if ( !car){  
      console.error(
      `Error: car with license plate ${plate} does not exist in the garage`
    );
    return;
  }
  car.isRepaired = true;
  console.log(`Car ${plate} was repaired successfully`);
}

function getAverageYear() {
  if (garage.length === 0) return 0;
  let sum = 0;
  garage.forEach(car =>{
       sum += car.year
  })
  return Math.floor(sum / garage.length);
}

getGarageStatus();
repairCar("1234567");
repairCar("123");
getGarageStatus();
console.log("Average production year:", getAverageYear());

//תרגיל 7
function removeDup(arr) {
  return [...new Set(arr)];
}

console.log(removeDup([1, 1, 2, 2, 3, 4, 4, 4]));


// תרגיל 8
function sumNum(num) {
  while (num >= 10) {
    let sum = 0;
    const str = String(num);
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    num=sum;
  }
  return num;
}

console.log(sumNum(38));
console.log(sumNum(1234));

// תרגיל 9
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    const s = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
    console.log(s || i);
  }
}

fizzBuzz(30);


//תרגיל 10
// function longestStart(strings) {
//   if (strings.length === 0) return "";
//   const firstWord = strings[0];
//   let index;
//   for (index = 0; index < firstWord.length; index++) {
//       if (strings.every)
//   }
//   return prefix;
// }

console.log(longestStart(["flower", "flight", "flow"]));


//תרגיל 11
function sumTwo(arr, x) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const complement = x - value;

    if (complement in seen) {
      return [seen[complement], i];
    }
    seen[value] = i;
  }
  return 0;
}

console.log(sumTwo([3, 2, 4], 6)); // [1, 2]


//תרגיל 12
const gradeMap = new Map([
  ["A", "95-100"],
  ["B", "90-94"],
  ["C", "85-89"],
  ["D", "80-84"],
  ["E", "75-79"],
  ["F", "0-74"],
]);

function getGradeRange1(letter) {
  return gradeMap.get(letter.toUpperCase()) || "grade does not exist";
}


function getGradeRange(letter) {
  switch (letter.toUpperCase()) {
    case "A":
      return "95-100";
    case "B":
      return "90-94";
    case "C":
      return "85-89";
    case "D":
      return "80-84";
    case "E":
      return "75-79";
    case "F":
      return "0-74";
    default:
      return "grade does not exist";
  }
}

console.log(getGradeRange("A"));
console.log(getGradeRange("c"));
console.log(getGradeRange("Z"));
console.log(getGradeRange1("A"));
console.log(getGradeRange1("c"));
console.log(getGradeRange1("Z"));


