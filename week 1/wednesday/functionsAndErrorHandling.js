// 1
function extractNumbers(arr)
{
    try {
        if (!Array.isArray(arr)){
            throw new Error("input is not array")
        }
        const validNumber = arr.filter(num => typeof num === "number");
        return validNumber;  
    }
    catch(err)
    {
        console.error("this is not an array:", err.message);
        return;
    }
}
// console.log(extractNumbers([1, 2, null]));
// console.log(extractNumbers(5));

// 2
function sumNumbersSafe(arr)
{
    let sum = 0;
    try{
        const numbers = extractNumbers(arr)
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    catch(err){
        console.error(err.message);
        return 0; 
    }
}
// console.log(sumNumbersSafe([1, 2, 3, 4, 5]));
// console.log(sumNumbersSafe([1, 2, 3, 4, 5, null]));
// console.log(sumNumbersSafe("dd"));

// 3
function filterLargeSums(arrList, minTotal)
{
    return arrList.filter(arr => sumNumbersSafe(arr) > minTotal);
}

const nestedArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, false, null],
  [1, "hello", 2, null, 3]
];

// console.log(JSON.stringify(nestedArray));
// console.log(filterLargeSums(nestedArray, 1));

// 4
function summaryStats(arrList){
    const large = filterLargeSums(arrList, 5);
    const stats = [];
    for (const arr of large){
        const numbers = extractNumbers(arr);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const average = sum / numbers.length;
        stats.push({ sum, average });
    }
    return stats;
}
// summaryStats(nestedArray).forEach(({ sum, average }, i) => {
//     console.log(`array ${i + 1}: sum = ${sum}, average = ${average}`);
// });

// 5
function safeCalculator(a, b, operation){
    try {
        if (typeof a !== typeof b){
            throw new Error("a or b are not numbers");
        }
        switch (operation){
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                if (b !== 0){
                    return a / b;
                }
                console.log("cannot divide by zero");
        }
    } 
    catch (error) {
        console.log(error);
    }
}
// console.log(safeCalculator(7, 5, "multiply"));
