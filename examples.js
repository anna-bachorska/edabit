function hello() {
    return "hello edabit.com";
}

hello();
console.log(hello);


function lessThanOrEqualToZero(num) {
	if (num <= 0) {
        return true;
    }
    else {
        return false;
    } 
}

console.log(lessThanOrEqualToZero(2));
console.log(lessThanOrEqualToZero(-2));
console.log(lessThanOrEqualToZero(0));

function isEvenOrOdd(num) {
	if (num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(isEvenOrOdd(2));
isEvenOrOdd(3);

function countWords(str) { 
    return str.split(' ').length;
  }

  console.log(countWords('Just an example here move along'));
  console.log(countWords('This is a test'));
  console.log(countWords("What an easy task, right"));

  function getLastItem(arr) {
	
    let lastItem = arr[arr.length - 1];

    return (lastItem);
  }

  console.log(getLastItem([1, 2, 3]));
  console.log(getLastItem(["cat", "dog", "duck"]));
  console.log(getLastItem([true, false, true]));



  function findSmallestNum(arr) {
    return Math.min(...arr);
  }

  console.log(findSmallestNum([-76, 1.345, 1, 0]));

  function getAbsSum(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            a = a + (arr[i] * -1)
        }
        else {
            a = a + arr[i];
        }
      }
    return a;
  }

  console.log(getAbsSum([2, -1, 4, 8, 10]));



function getAbsSum2(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
       a = a + Math.abs(arr[i]);
      }
    return a;
  }

  console.log(getAbsSum2([2, -1, 4, 8, 10]));