// Declaring symbol 

const mySym = Symbol("newSym1")

JsUser = {
    name:"Robin",
    age: 26,
    location: "Panvel",
    email:"robin@adobe.com",
    isLoggedIn: true,
    [mySym] : "mykey1"
}

//console.log(JsUser.name)
//console.log(JsUser['name'])

//console.log(typeof JsUser[mySym]);

// JsUser.location = "Noida";
// console.log(JsUser)
// Object.freeze(JsUser)
// JsUser.location = "Delhi";
// console.log(JsUser)


JsUser.greetings = function(){
    console.log("Hello Js User");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JsUser ${JsUser.name}`);
}

JsUser.gender = "male";

(JsUser.greetingsTwo());