//Advance Typescript Concepts

//1. Pick

interface User {
    id: number;
    name: string;
    age: number;
    email:string;
    password:string;
}

//const user:User =// database call  User.findOne({where:{email:"abc@gmail.com"}})
//let we need to update the User but only name, age and password can be updated then there we need to create another interface but we can use Pick method from typescript to do so.

type UpdateProp = Pick<User, 'name' | 'age' | 'password'>;

//function updateUser (updatedProp:UpdateProp)

//2. Partial
//If we have to create a type with optional then we can use partial
//here a user can update only name but not age and so on

type UpdateoptionalProp = Partial<UpdateProp>

//now the updateprop has converted to an optional prop 



//3. Readonly
// if we have to make object or array inside fiels as redonly we can use this in ts.

/*eg: const user =- {
name:"asdf",
age:21
}

user.name = "asdfhaslkjdfh"


or 

const a = [1, 2, 3, 4,]
a[0] = 2;//it doesnot throw error


 Here, they are const but inside values can be updated 
 it cant be updated as:
 const a =[1, 2,4 ]
a=[4,6,7]//This cannot be done it throw an error
 */

type ReadonlyUser = Readonly<User>
//now User objects value cannot be changed inside which make them readonly
//or
type Person ={
   readonly name:string;
    readonly age:number;
}
const user:Person = {
    name:"asdf",
    age:21
}
//or we can do as
type Person2 ={
    readonly name:string;
     readonly age:number;
 }
const user2:Readonly<Person2> = {
    name:"asdf",
    age:21
}
// user.name = "asdfhaslkjdfh" //it throws error as name is readonly

//mostly useful while storing api keys so that by mistake no key values are changes

/*
eg:
const config:Readonly<config>{
api:"afdasdfasdfasdfasdfasfd"
key:"asdfasdfasfdadf"
}
 */




//4. Record


type Users = {
    [key:string]:{
        id:number;
        username:string;
    }
}


//or
//using record

type Users2 = Record<string, {
    id:number;
    username:string;
}>

//more specific
type Userr ={
    name:string;
    age:number;
}
type Usr =Record<string, Userr>

 //creating an object and assigning values
const users = {
    "asdfaf":{
        id:1,
        username:"asdfasf"
    },
    "Asdfas":{
        id:2,
        username:"asdfasf"
    }
}

//in this way records are used:



//5. Map

const usser:Usr ={
"asdfasdfs":{age:21, name:"safdasfddf"},
"sedf":{age:32, name:"safdasfddf"}

}

//to access we use normally
usser["sedf"].age;


//using Map
type Us ={
    age:number,
    name:string
}

const uuser = new Map<string, Us>(); //we can also specify the return users type by this technique

uuser.set("asdfasdfs", {age:21, name:"safdasfddf"});
uuser.set("sedf", {age:32, name:"safdasfddf"});

const u = uuser.get('sedf');
// we can use set, get, delete
uuser.delete("sedf")


// 6. Exclude
//we can exclude the itemsa that we dont need in new one type


type eventtype = 'click' | "scroll" | "mousemove";

type excludeevevnt = Exclude<eventtype, 'scroll'> //here we exclude scroll

//now we have only click and mousemove





