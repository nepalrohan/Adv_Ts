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
