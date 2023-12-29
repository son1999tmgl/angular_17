@changeNam
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

function changeNam(constructor: Function) {
    console.log(123);
    console.log(constructor.prototype);


}

const animalInstance = new Animal('Lion');