img = document.querySelector("#img");
para = document.querySelector("#para");

const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();

getData = document.getElementById("getData");

getData.addEventListener("click", function () {
  xhr.open("GET", requestUrl);
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
     // img.setAttribute("src", `${data.avatar_url}`);
     img.src = `${data.avatar_url}`
      para.innerHTML = `${data.bio}`;
      // console.log(`${data.avatar_url}`);
    }
  };

  xhr.send();
});
