'use strict'

{
  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  const filter = ([...arrayAllStudents], [...arrayFailedStudents]) => {
    const finishStudents= [];
    arrayAllStudents.forEach((item) => {
      if (!(arrayFailedStudents.includes(item)))
        finishStudents.push(item);
    })
    return finishStudents
  }
  console.log(filter(allStudents, failedStudents));
}