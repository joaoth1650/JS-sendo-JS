function graddingStudents(grades){
  for (var index=0; index<grades.length; index++){
  if(grades[index] >= 38){
    if(grades[index] % 5 == 3){
        grades[index] += 2;
   } else if(grades[index] % 5 == 4) {
    grades[index] += 1
   }
  }
 }
 return grades;
}
console.log(graddingStudents([44,26,59,61,78]))

// (grade[index] % 5 == 4 || 3) ? grade[index] +=1 : grade[index] += 2;