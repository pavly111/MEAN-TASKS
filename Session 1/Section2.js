//1️⃣ Check if Array is Sorted

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); 
console.log(isSorted([5, 4, 3, 2, 1]));


//2️⃣ Return Numbers Greater Than a Value

function greaterThan(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > value) {
            console.log(arr[i]);
        }
    }
}

greaterThan([1, 2, 3, 4, 5], 3);
greaterThan([12, 5, 8, 1, 10], 7);


//3️⃣ Plus One (LeetCode)

function plusOne(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        if (sum === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            digits[i] = sum;
            carry = 0;
            break;
        }
    }
    if (carry === 1) {
        digits.unshift(1);
    }
    return digits;
}

console.log(plusOne([1, 2, 3])); 
console.log(plusOne([4, 3, 2, 1])); 
console.log(plusOne([9]));

//4️⃣ Remove Duplicates from Sorted Array (LeetCode)

function removeDuplicates(nums) {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    for (let i = k; i < nums.length; i++) {
        nums[i] = '_';
    }
console.log(k);
    return nums;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));