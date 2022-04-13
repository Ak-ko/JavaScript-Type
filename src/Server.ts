
// One -> normal class
class Server {
    port: number;
    address: string;

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    startServer(): string{
        return "Server is implemented : ".concat(this.port.toString()).concat(":").concat(this.address);
    }
}

const server_one = new Server(8080, 'localhost');
console.log(server_one.startServer());
console.log(server_one.port);
console.log(server_one.address);

// Two -> extend with private
class BaseServer1 {
    private port: number;
    private address: string;

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    greeting(): void{
        console.log('hello world.')
    }
}

class ServerSub1 extends BaseServer1{
    constructor(port: number, address: string){
        super(port, address);
    }
}

const server_sub_one = new ServerSub1(1000, 'localhost');
server_sub_one.greeting();


// Three -> extend by using protected
class BaseServer2 {
    protected port: number;
    protected address: string;

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    greeting(): void{
        console.log('hello world.')
    }
}

class ServerSub2 extends BaseServer2{
    constructor(port: number = 1020, address: string = "another host"){
        super(port, address); // just copy from baseserver2's props
    }
}

const server_sub_two = new ServerSub2();
server_sub_two.greeting();
console.log(server_sub_two);

// Four -> doing abstract class and abstract method
abstract class BaseServer3 {
    protected port: number;
    protected address: string;

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    greeting(): void{
        console.log('hello world.')
    }

    abstract goodBye(): void;
}

class ServerSub3 extends BaseServer3{
    constructor(port: number, address: string){
        super(port, address);
    }

    goodBye(): void {
        console.log('Good Bye');
    }
}

const server_sub_three = new ServerSub3(3000, 'localhost');
server_sub_three.goodBye();

// Five -> implementing using interface
interface SampleServer {
    startServer(): void;
    endServer(): void;
}

class BaseServer4 implements SampleServer{
    public port: number;
    public address: string;

    constructor(port, address){
        this.port = port;
        this.address = address;
    }

    startServer(){
        console.log(`Server is started at ${this.port} : ${this.address}`);
    }
    
    endServer() {
        console.log('Server is ended, Good Bye!')
    }
}

const server_base_four: SampleServer = new BaseServer4(4000, 'localhost');
server_base_four.startServer();
server_base_four.endServer();