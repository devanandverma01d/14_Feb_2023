class A {
    //There are three member of a 'Class'-
    //1.property
    name;//<---- This is only declaration of a property
    surname = '';  //<--This is declaration and initialisation  of a property with empty value
    address = "Bhopal";  //<--This is declaration and initialisation of a property  with a value 
    //2.Constructor  (--> Constructor is nothinng but a special method which is used to initialize a newly created property of a class.)
    state;
    // this.member-->(through this way we can access the property of a class)
    //---->( '.'(dot) is a "Member Selection Operator")
    constructor() {
        this.name = "Devanand";
        this.surname = "Verma";
        this.fathersName = "Shivprasad Verma";
    }



    //3.Method
    showData() {
        console.log(this.name + this.surname + this.fathersName + this.address)
    }
    setState(data) {
        this.state = data
    }
    showState() {
        console.log(this.state);
    }

}
class B extends A {
    //There are three member of a Class-
    //1.property
    friend1;
    friend2 = '';
    //2.Constructor
    constructor(fr3) {
        super();
        this.friend1 = 'Vipin';
        this.friend2 = 'Prashant';
        this.friend3 = fr3;
    }
    //3.method
    listMyFriend() {
        console.log(this.friend1);
        console.log(this.friend2);
        console.log(this.friend3);
    }
}


// let objectName =new ClassName()
let obj1 = new A()
// this 'obj' is an external object.
// object.member = dot ('.') is a member selection operator.
obj1.showData()


let obj2 = new B('Ankit');
obj2.listMyFriend();
obj2.showData();
obj2.setState({
    name: "Harish",
    surname: "Singh",
    address: "Bhopal"
})
obj2.showState()