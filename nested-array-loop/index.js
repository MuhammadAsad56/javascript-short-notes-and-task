// //Nested Loop
// for (let i = 0; i < 2; i++) {
//     console.log("outer loop start");
  
//     for (let j = 0; j < 3; j++) {
//       console.log(`shehzad i: ${i}  j: ${j}`);
//     }
  
//     console.log("outer loop end");
//   }

// rows and column agr multiples hun aur rows and column tk jana hun
// let row = 2;
// let column = ["Shaheer","Salman","Kaif","Ali","Haroon","Hammad"];
// for (i = 1 ; i <= row; i++){
//     console.log(`Now row ${i} `)
//    for (j = 0; j < column.length; j++){
//     console.log(`row = ${i} column ${j + 1} me ${column[j]} se fees leli`)
//    }
//    console.log(`Row complete`)
// }


//   console.log(matrix2[0][0]);

//   console.log(matrix1[0][0] + matrix2[0][0]);
//   console.log(matrix1[0][1] + matrix2[0][1]);
//   console.log(matrix1[0][2] + matrix2[0][2]);

//   console.log(matrix1[1][0] + matrix2[1][0]);
//   console.log(matrix1[1][1] + matrix2[1][1]);
//   console.log(matrix1[1][2] + matrix2[1][2]);

//   console.log(matrix1[2][0] + matrix2[2][0]);
//   console.log(matrix1[2][1] + matrix2[2][1]);
//   console.log(matrix1[2][2] + matrix2[2][2]);

//   console.log(matrix1[3][0] + matrix2[3][0]);
//   console.log(matrix1[3][1] + matrix2[3][1]);
//   console.log(matrix1[3][2] + matrix2[3][2]);
let matrix1 = [
    [3, 4, 4, 1],
    [5, 2, 1, 1],
    [4, 4, 4, 1],
    [2, 2, 2, 2],
  ];
  let matrix2 = [
    [1, 1, 0, 1],
    [9, 0, 2, 1],
    [2, 6, 3, 1],
    [2, 2, 2, 2],
  ];
  let arr = []
for(i = 0; i < matrix1.length; i++){
  arr[i] = []
 
    for (j = 0; j < matrix1.length; j++){
        let sum = matrix1[i][j] * matrix2[i][j];
        arr[i].push(sum);
    }
  }
  console.log(arr)