'use strict'

{
  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  const filter = (arrayAllStudents, arrayFailedStudents) => arrayAllStudents
    .filter((item) => !(arrayFailedStudents.includes(item)));

  console.log(filter(allStudents, failedStudents));
}