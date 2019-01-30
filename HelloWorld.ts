class HelloWorld {

    firstName = ' ';
    lastName: string;

    constructor(firstName: string, lastName: string){
       this.firstName = firstName;
       this.lastName = lastName;
    }

    sayHello(){
        console.log('Hello world!' +' My name is ' + this.firstName + ' ' + this.lastName);
    }
}


const myHelloWorldClassInstance = new HelloWorld('Chad', 'Nickel');

myHelloWorldClassInstance.sayHello();
