interface Email{
    firstname: string,
    lastname: string,
    address: string
    occupation?: job,
    isVisitor: boolean
}
type job = 'Engineer' | 'Developer';

function getEmail({firstname, lastname, address, isVisitor}: Email, force?: boolean): string | undefined{
    if(isVisitor && !force ){
        return undefined
    }
    else{
        return `${firstname}.${lastname}@${address}.com`        
    }
}

function isValid(input_object: any): boolean{
    if('firstname' in input_object  &&
       'lastname' in input_object &&
       'address' in input_object)
    {
        return true;
    }else{
        return false;
    }
}

function getEmailIsValid(input_object: any): void{
   if(isValid(input_object)){
       console.log(getEmail(input_object));
   }
   else{
       console.log('The email is invalid.');
   }
}

getEmailIsValid({
    firstname: 'aungkhant',
    lastname: 'koko',
    address:'gmail',
    isVisitor: false
});
/*
console.log(getEmail({
    firstname: 'aungkhant',
    lastname: 'koko',
    address: 'gmail',
    occupation:'Developer'
}));
*/

interface Person {
    firstname: string,
    age: number,
    married: boolean
}

var person_1: Person = {
    firstname: 'Aung Khant',
    age: 19,
    married: true
}


console.log(person_1);

async function Naming(){
    return 'asyc';
}