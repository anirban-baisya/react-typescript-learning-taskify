import React from 'react';
import './App.css';

//*** */ differnt types in typescript :-

let name: string; // we can set no inside string type
let age: number | string; //if we want to contain both no and string inside age variable ; for this we have to use union | 
let isStudent: boolean;
let hobbies: string[]; // this is called array of string ; means this variable can contain only array of string
let role: [number, string]; // this is called tuple ; menas it contain fixed amount of value & the type during the declaration & this variable can contain one no , one string

//**now we see defing a obj type :-
// let person: Object; //but this not recomanded way to do this ; 
                    //because an obj can have lot of properties inside of it ex. name, age to takel with this we used something called type/interface keyword

type Person ={ //best practice to give type first later to capital
  name: string;
  age?: number; //after giving ? itwill optional property
}
let person: Person ={
  name: 'Anirban', // if i dont write age , it will give error that Property 'age' is missing in type '{ name: string; }' but required in type 'Person' , because age is mandatory ; to make it optional i have to add ? inside the type declearation
};

let lotsOfPeople: Person[] //another that contain array of person object


//** Now we how to declear a function type there are 2 ways :- */
// 1st way ----
// let printName: Function;

// 2nd way ----
let printName: (name: string) => void; //we can define here (name: string) that how many things func. going to contains ; in our case it not going to return anything thats why we use this   => void;
                                        //like  => void;  here the return type can me number, string, or a custome return type like this person  type Person ={ name: string; }

//name= 5 //it will give error
//role= [5, 5] // it will give this error -- Type 'number' is not assignable to type 'string'
// age= 5
// age= 'anirban'

function App() {
  return (
    <div className="App">
     
       Hi hello
         </div>
  );
}

export default App;
