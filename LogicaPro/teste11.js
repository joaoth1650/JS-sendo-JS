function gradingStudents(grades) {
  // Write your code here
   for (let index = [0]; index < grades.length; index++) {
      if (index < 40 ) {
        console.log('FALHOU MIZERAVELMENTE')
      } else {
        console.log('PASSOU MIZERAVI')
      }
   }
}
 console.log(gradingStudents([73, 67, 38, 33]))
 // [75, 67, 40, 33]