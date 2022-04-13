var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getEmail({ firstname, lastname, address, isVisitor }, force) {
    if (isVisitor && !force) {
        return undefined;
    }
    else {
        return `${firstname}.${lastname}@${address}.com`;
    }
}
function isValid(input_object) {
    if ('firstname' in input_object &&
        'lastname' in input_object &&
        'address' in input_object) {
        return true;
    }
    else {
        return false;
    }
}
function getEmailIsValid(input_object) {
    if (isValid(input_object)) {
        console.log(getEmail(input_object));
    }
    else {
        console.log('The email is invalid.');
    }
}
getEmailIsValid({
    firstname: 'aungkhant',
    lastname: 'koko',
    address: 'gmail',
    isVisitor: false
});
var person_1 = {
    firstname: 'Aung Khant',
    age: 19,
    married: true
};
console.log(person_1);
function Naming() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'asyc';
    });
}
