function setUserName(username){
    // DB calls 
    this.username = username
}

function createUser(username, email, password) {
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

let robin = new createUser('robin', 'rsk@gmail.com', 123)
console.log(robin);