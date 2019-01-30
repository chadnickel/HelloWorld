var HelloWorld = (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = ' ';
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello world!' + ' My name is ' + this.firstName + ' ' + this.lastName);
    };
    return HelloWorld;
})();
var myHelloWorldClassInstance = new HelloWorld('Chad', 'Nickel');
myHelloWorldClassInstance.sayHello();
