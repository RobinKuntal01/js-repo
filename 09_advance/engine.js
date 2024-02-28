const requestUrl = "https://api.github.com/users/RobinKuntal01"

const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl) 
console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(this.onreadystatechange === 4){
        const data = JSON.parse(this.responeText)
        console.log(data.login);
    }
}


 xhr.send()

