
    fetch('https://randomuser.me/api/?results=3')
.then((rawdata)=>{
    return rawdata.json();
    
    
})
.then((data)=>{

data.results.forEach(function(user){

    // Create main card container
const card = document.createElement("div");
card.className = "card";

// Create image element
const img = document.createElement("img");
img.src = user.picture.large;
img.alt = "User Photo";

// Create user info container
const userInfo = document.createElement("div");
userInfo.className = "user-info";

// Create name
const name = document.createElement("h2");
name.textContent = user.name.first;

// Create last name
const lastName = document.createElement("p");
lastName.textContent = user.dob.age;

// Create gender label
const genderLabel = document.createElement("p");
genderLabel.textContent = user.gender;

// Append info to userInfo
userInfo.appendChild(name);
userInfo.appendChild(lastName);
userInfo.appendChild(genderLabel);

// Append image and info to card
card.appendChild(img);
card.appendChild(userInfo);

// Append card to body
document.body.appendChild(card);

console.log(user);
})
    
})
    
.catch((error)=>{
console.log(error);

});

