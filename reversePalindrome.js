// 1. Convert the input into characters 
// 2. Loop them in reverse direction 
// 3. Concatenate the string 
// 4. Print the new string 
// [If the given string and reverse string are the same, it is a palindrome] 
// 1. Check if the reverse string and original string are the same 
// 2. Print true if same, else the false. 

// let str = "madam";

// let left = 0
// let right = str.length-1

// while(left<=right){
//     //0  =m 
//     if (str[left] !== str[right]){   
//         console.log("it is not palindrome");
//         break
//     }
//     left ++
//     right -- 
// }


// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length-1;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("madam"));

let str = "hello";

let left = 0;
let right = str.length - 1;
let isPalindrome = true;

while (left <= right) {
    if (str[left] !== str[right]) {   
        isPalindrome = false;
        break;  // stop immediately
    }
    left++;
    right--;
}

if (isPalindrome) {
    console.log("it is palindrome");
} else {
    console.log("it is not palindrome");
}



//let reversed = str.split('').reverse().join('');
//console.log(reversed);
