// let studentGrade = 90
// function studentGD(studentGrade){
//     switch(studentGrade) {
//         case studentGrade>100:
//             console.log("pass");
//             break
//         case 40:
//             console.log("pass");
//                 break
//          default:
//             console.log("fail");

//     }

// }studentGD(90)

function getGrade(score) {
    switch(true) {
        case score > 90:
            console.log("Grade A");
            break;

        case score > 75:
            console.log("Grade B");
            break;

        case score > 50:
            console.log("Grade C");
            break;

        default:
            console.log("Fail");
    }
}

getGrade(85);