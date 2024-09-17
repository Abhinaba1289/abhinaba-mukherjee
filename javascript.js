const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
const navbarLinks = navbarLinksContainer.querySelectorAll(".navbar-link"); // Selecting all nav items
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
  navbarMenu.classList.toggle("is-expanded", isNavbarExpanded); // Toggle class to show/hide navbar
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

// Adding event listeners to nav items
navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Remove the 'is-expanded' class after clicking on a nav item
    navbarMenu.classList.remove("is-expanded");
    navbarToggle.setAttribute("aria-expanded", false); // Reset the toggle state
    isNavbarExpanded = false;
  });
});





document.addEventListener('DOMContentLoaded',function(){
  // array with texts to type in typewriter
  var dataText = [ "Proficient in C++, HTML, CSS, JavaScript, and MySQL", "Passionate about Coding & Development.","Aspiring Full Stack Developer"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("#sub-text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 50);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1000);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 1000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});



// code hub




// new codw is keep ir same


fetchInformation("Abhinaba1289");



//  let fetch the API
async function fetchInformation(name) {
    var result;
    try {
        USERNAME = name;
        const data = await fetch(`https://api.github.com/users/${USERNAME}`);
        result = await data.json();
        // console.log(result);

    } catch (error) {
        console.log("Error Found:", error);
    }

    renderInformation(result);
}



//  user data inporting function
const errorPage = document.querySelector(".error-page");
function renderInformation(UserData) {


    if (UserData?.message === "Not Found") {
        errorPage.classList.add("error-visible");
        setTimeout(() => {
            errorPage.classList.remove("error-visible");
        }, 3000);

    }
    else {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const userImage = document.querySelector("[data-getImage]");
        const userName = document.querySelector("[data-name]");
        const UserIDLink = document.querySelector("[data-userIDLink]");
        const JoinDate = document.querySelector("[data-joinDate]");
        const aboutUser = document.querySelector("[data-aboutUser]");
        const repos = document.querySelector("[data-repos]");
        const followers = document.querySelector("[data-followers]");
        const following = document.querySelector("[data-following]");
        const location = document.querySelector("[data-location]");
        const BlogLink = document.querySelector("[data-bloglink]");
        const twitter = document.querySelector("[data-twitter]");
        const company = document.querySelector("[data-company]");

        userImage.src = UserData?.avatar_url;
        userName.innerText = UserData?.name;
        UserIDLink.href = UserData?.html_url;
        UserIDLink.innerText = UserData?.login;
        datesegments = UserData.created_at.split("T").shift().split("-");
        JoinDate.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
        aboutUser.innerText = UserData?.bio;
        repos.innerText = UserData?.public_repos;
        followers.innerText = UserData?.followers;
        following.innerText = UserData?.following;
        location.innerHTML = UserData?.location;
        twitter.innerHTML = UserData?.twitter_username;
        company.innerHTML = UserData?.company;
        BlogLink.innerHTML = UserData?.blog;

        // check that they have that particular link or not
        if (UserData?.twitter_username === null) {
            twitter.innerHTML = " Not Avaliable";
        }
        if (UserData?.company === null) {
            company.innerHTML = " Not Avaliable";
        }
        if (UserData?.blog === "") {
            BlogLink.innerHTML = " Not Avaliable";
        }
        if (UserData?.location === null) {
            location.innerHTML = " Not Avaliable";
        }
    }
    

}









