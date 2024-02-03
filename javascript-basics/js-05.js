//function....is called by a name
//a block of codethat can be executed when it is called.

function nameOfTheFunction()
{
    //console.log('Hello World')
}
//Call the function
nameOfTheFunction()

function printName()
{
   // console.log('siri')
}
function printAge()
{
    //console.log(40)
}
function addNumbers()
{
    var x = 10;
    var y =20;
    return x + y
}
var a = addNumbers();
//console.log(a)
//console.log(printAge())

var x = [1,2,3,4,5,6,7,8,9]
//console.log(x.length)

function myName()
{
    //console.log('Siree')
}
myName()

function addNumbers()
{
    return 10 + 20
}
//console.log(addNumbers(100,200))

//Method parameters
function addNumbers(x, y){
    return(x+y)
}
console.log(addNumbers(100,200))//invoke the function arguments 100 and 200
console.log(11 + -4)





function concactWords(hi,by,ci)
{
    return(hi+  '' +   by +  '' + ci)
}
console.log(concactWords('Hello','world','How are you'))


function squareNumber()
{
    return x * x
}
var x = 10
console.log(squareNumber(x))

function returnLargestNumber(a,b)
{
    if(a>b){
        return a
    }
    else {
        return b
    }
    
}
console.log(returnLargestNumber(10,20))