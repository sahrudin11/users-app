const endpoint = "https://reqres.in/api/users?per_page=12";
const container = document.getElementById("result");
const searching = document.getElementById("search");
const resultCount = document.getElementById("result-count");
const btnClicked = document.getElementById("clicked");
let allUsers = [];

const showUserList = () => {
  const list = allUsers
    .map((user) => {
      return `
                <div class='user-group'>
                    <div class="img-profile">
                        <img src="${user.avatar}" alt="avatar-${user.last_name}">
                    </div>
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <p>${user.email}</p>
                </div>
            `;
    })
    .join("");
  container.innerHTML = list;
};

const findUserList = (key) => {
  const list = allUsers
    .map((user) => {
      return user.first_name.toLowerCase().includes(key.toLowerCase())
        ? `
                <div class='user-group'>
                    <div class="img-profile">
                        <img src="${user.avatar}" alt="avatar-${user.first_name}">
                    </div>
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <p>${user.email}</p>
                </div>
            `
        : "";
    })
    .join("");
  container.innerHTML = list;
  const userGroup = document.getElementsByClassName("user-group");
  resultCount.innerHTML = userGroup.length + " user(s) found";
};

const findUsers = searching.addEventListener("keyup", function () {
  this.value !== null ? findUserList(this.value) : showUserList();
});

const getUserData = () => {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    })
    .then(function (userList) {
      allUsers = userList.data;
      showUserList();
    });
};

let count = 1;
const clicedBtn = btnClicked.addEventListener("click", () => {
  fetch("https://www.instagram.com/the_shrdn/followers/")
    .then((res) => {
      return response.json();
    })
    .catch((err) => console.log(err));
});

window.onload = () => {
  getUserData();
};
