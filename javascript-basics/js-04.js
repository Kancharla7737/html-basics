var person = {
    name: 'john',//string
    age: 30,//int
    address: '525 Nelson rising Ln',
    city: 'San Francisco',
    state: 'CA',
    zip: 94235,
}

var person1 = {
    name: 'abc',
    age: 20,
    address:{//object type(another object)
        address1:'511 Nel ris lane',
        city1:'sfo',
        state1:'ca',
    }
}

console.log(person1);
console.log('age of person1 is:' +person1.age)


console.log('person1\'s name is:' +person1.name)

//TWO WAYS OFaccessing a property of an object
//dot notation- object.proprty
//bracket notation object['property']

//string is nothing but collection of characters inside a pair of quotes
//'president\'s name'

//mumbai....lowervase
//MUMBAI....Uppercase
//Mumbai....First letter Upper case...Title case
//firstName....Camelcase
//nameOfThePerson...Camelcase(it is the preferred way of creating objects)



