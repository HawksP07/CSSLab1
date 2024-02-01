// For the contact form
let username = document.getElementById("nameInput");
let phone = document.getElementById("inputPhone");
let email = document.getElementById("inputEmail");
let message = document.getElementById("inputMessage");

function handleFormSubmit(){
    console.log(username.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(message.value);

    setTimeout(changePage, 3000);

    return false;

}

function changePage(){
    window.location.replace("index.html");
}

// Check that the DOM is loaded
document.addEventListener("DOMContentLoaded", (event) => {
    // Collect the navbar contents in an array
    let navbarItems = Array.from(document.getElementsByClassName("nav-link"));
    navbarItems.forEach((item) => {
        // As we iterate, check if the content is products and change it.
        if(item.textContent === "Products") {
            item.textContent = "Projects";
        }
    });
});

// Inject all the text into the bodies of each page. 
// ==================================================
// For all of the pages below, ill be collecting the content elements in variables and 
// replacing their textContent attribute with the content I want on our page. 
document.addEventListener("DOMContentLoaded", function() {

    if (document.title === "Home - Austin and Bernie") {
        // HOME 
        let mainHeader = document.getElementById("main-header");
        let mainDescription = document.getElementById("main-description");
        mainHeader.textContent = "Welcome to the main page of Lab 1, authored by Austin and Bernie.";
        mainDescription.textContent = "Click the links in the navigation bar to learn more.";
    }
    else if (document.title === "Projects - Austin and Bernie") {
        // PROJECTS
        let projHeader = document.getElementById("proj-header");
        let proj1Title = document.getElementById("proj1-title");
        let proj1desc = document.getElementById("proj1-description");
        let proj2Title = document.getElementById("proj2-title");
        let proj2desc = document.getElementById("proj2-description");
        let proj3Title = document.getElementById("proj3-title");
        let proj3desc = document.getElementById("proj3-description");

        projHeader.textContent = "On this page, you will learn about our top 3 favorite projects.";

        proj1Title.textContent = "1. Tic Tac Toe - Semester 1";
        proj1desc.textContent = `This report required us to experiment with a C# technology that we had never used before. Many students, including Bernie, 
                                chose to use Unity. The requirements of the report ensured that I not only payed close attention to what I was learning, but 
                                also let me express my ability to self-learn.`;

        proj2Title.textContent = "2. Experimenting Report - Semester 3";
        proj2desc.textContent = `This project was an excellent introduction to event handling and GUI applications 
                                We used buttons to represent the tiles, and event handlers to record player info and positions. 
                                Passing the source of the event to identify which button was clicked was a great way to learn about OOP.`;

        proj3Title.textContent = "3. Deck Builder - Semester 3";
        proj3desc.textContent = `A project that took an extremely solid understanding of OOP concepts to complete. We needed to create classes representing cards, 
                                empty decks, pre-filled decks, and allow the user to create a custom deck by entering suits and numbers 1 at a time. This was where 
                                OOP concepts really sank in for me, and I understood how they could be used.`;
    }
    if (document.title === "Services - Austin and Bernie") {
        // SERVICES 
        let servHeader = document.getElementById("serv-header");
        let serv1Title = document.getElementById("serv1-title");
        let serv1desc = document.getElementById("serv1-description");
        let serv2Title = document.getElementById("serv2-title");
        let serv2desc = document.getElementById("serv2-description");
        let serv3Title = document.getElementById("serv3-title");
        let serv3desc = document.getElementById("serv3-description");

        servHeader.textContent = "While we each offer a plethora of skills, these are the top 3 between us.";

        serv1Title.textContent = "1. C# Application Building";
        serv1desc.textContent = `We have a strong understanding of OOP concepts, and recent experience with modern frameworks like .NET. Having completed OOP 1 and 2 with 
                                high grades, we expect to solve any C# problems put before us with flying colors.`;

        serv2Title.textContent = "2. Project Development and Modeling";
        serv2desc.textContent = `Thankfully, Durham College puts a strong emphasis on the Systems Development aspect of its courses. We have had the opportunity to work through 
                                real world use-case-scenerios; Learning how to create charts, models, and collect requirements from our business clients. These skills put us a 
                                step ahead of the rest in the market.`;

        serv3Title.textContent = "3. Web Development - Client side and Enterprise";
        serv3desc.textContent = `Since semester 2 we have been learning how to structure, design, and alter the behaviour of web pages. While we did spend the majority of the time 
                                learning PHP, it enhanced our understanding of CSS and HTML enough that, by the time we reached the JS portion of the course, we had a solid 
                                understanding of how it all comes together.`;
    }
    if (document.title === "About Us - Austin and Bernie") {
        // ABOUT US
        let aboutHeader = document.getElementById("about-header");
        let name1Title = document.getElementById("name1-title");
        let name1Desc = document.getElementById("name1-description");
        let name2Title = document.getElementById("name2-title");
        let name2Desc = document.getElementById("name2-description");

        aboutHeader.textContent = "A brief introduction to who we are behind the monitor";

        name1Title.textContent = "Bernie Warren";
        name1Desc.textContent = `I am 24, returning to college for the second time after the culinary industry was murdered by COVID-19. I live near Port Hope, with my partner 
                                and our daughter (5). My interests include games, nature, boxing, science, and history.`;

        name2Title.textContent = "Austin Pyzer";
        name2Desc.textContent = "***********";
    }
});

const humanResourceLink = document.createElement('li');
humanResourceLink.classList.add('nav-item');
humanResourceLink.innerHTML = '<a class="nav-link" href="#">Human Resources</a>';
document.querySelector('.navbar-nav').insertBefore(humanResourceLink, document.querySelector('.navbar-nav').children[4]);

const fixedNavbar = document.createElement('nav');
fixedNavbar.classList.add('navbar', 'navbar-light', 'bg-light', 'fixed-bottom');
fixedNavbar.innerHTML = `
<div class="container-fluid">
  <span class="navbar-text mx-auto">&copy; ${new Date().getFullYear()} Austin Pyzer. &copy; ${new Date().getFullYear()} Bernie Warren</span>
</div>
`;
document.body.appendChild(fixedNavbar);

// ================================================================================
// Text insertion completed/

// Add a new tab to the navbar between "About us" and "Contact us"
// USING SAME LOGIC AS CHANGING PRODUCTS TO PROJECTS
// Check that the DOM is loaded
// window.onload = function() {
//     // Collect the navbar contents in an array
//     let navbarItems = Array.from(document.getElementsByClassName("nav-link"));
//     navbarItems.forEach((item, index) => {
//         // As we iterate, check if the content is products and change it.
//         if(item.textContent === "About Us") {

//             // Get the parent element 
//             let ulElement = item.parentElement.parentElement;

//             // Create new list item 
//             let newLi = document.createElement("li");
//             // Add new li to the nav-item class
//             newLi.className = "nav-item";

//             // Create a new anchor link element
//             let newLink = document.createElement("a");
//             // Add it to the navlink class
//             newLink.className = "nav-link";
//             // set the parameters of the link 
//             newLink.href = "index.html";                // NOTE linking back to home because human resources.html is not a requirement
//             newLink.textContent = "Human Resources";

//             // Append the link into the list item
//             newLi.appendChild(newLink);
//             // Position the new Li between about us and contact us.
//             ulElement.insertBefore(newLi, navbarItems[index+1].parentElement);

//         }
//     });
// };