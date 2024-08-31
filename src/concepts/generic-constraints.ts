type PersonObject = {
  firstName: string,
  lastName: string,
  age: number
}

function addFullName<T extends PersonObject>(obj: T): T & {fullName: string} {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

console.log(addFullName({firstName: 'vikram', lastName: 'thakur', age: 20}));