// One -> normal class
class Server {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    startServer() {
        return "Server is implemented : ".concat(this.port.toString()).concat(":").concat(this.address);
    }
}
const server_one = new Server(8080, 'localhost');
console.log(server_one.startServer());
console.log(server_one.port);
console.log(server_one.address);
// Two -> extend with private
class BaseServer1 {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    greeting() {
        console.log('hello world.');
    }
}
class ServerSub1 extends BaseServer1 {
    constructor(port, address) {
        super(port, address);
    }
}
const server_sub_one = new ServerSub1(1000, 'localhost');
server_sub_one.greeting();
// Three -> extend by using protected
class BaseServer2 {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    greeting() {
        console.log('hello world.');
    }
}
class ServerSub2 extends BaseServer2 {
    constructor(port = 1020, address = "another host") {
        super(port, address); // just copy from baseserver2's props
    }
}
const server_sub_two = new ServerSub2();
server_sub_two.greeting();
console.log(server_sub_two);
// Four -> doing abstract class and abstract method
class BaseServer3 {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    greeting() {
        console.log('hello world.');
    }
}
class ServerSub3 extends BaseServer3 {
    constructor(port, address) {
        super(port, address);
    }
    goodBye() {
        console.log('Good Bye');
    }
}
const server_sub_three = new ServerSub3(3000, 'localhost');
server_sub_three.goodBye();
class BaseServer4 {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    startServer() {
        console.log(`Server is started at ${this.port} : ${this.address}`);
    }
    endServer() {
        console.log('Server is ended, Good Bye!');
    }
}
const server_base_four = new BaseServer4(4000, 'localhost');
server_base_four.startServer();
server_base_four.endServer();
