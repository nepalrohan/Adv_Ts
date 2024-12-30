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


