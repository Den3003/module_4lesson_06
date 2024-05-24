'use strict' 

{
  const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

  const addPrefix =(arr, prefix) => arr.map((item) => `${prefix} ${item}`);
    
  console.log(addPrefix(names, 'Mr'));
}