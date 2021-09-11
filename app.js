let fromdata;
var name1 = "check";
var gmail = "check@gmail.com";
// var list=document.getElementById("list")
function signup() {

    b = document.getElementById("email").value;
    c = document.getElementById("password").value;
    d = document.getElementById("confirmPassword").value;
    var checkdata = true;

    if (c === d) {
        fromdata = JSON.parse(localStorage.getItem("fromdata")) || [];

        for (let i = 0; i < fromdata.length; i++) {
            if (fromdata[i].b === b) {
                alert("you already logged in");
                checkdata = false;
                break;
            }
        }
        if (checkdata) {
            fromdata.push({
                a: document.getElementById("users").value,
                b: document.getElementById("email").value,
                c: document.getElementById("password").value,
                d: document.getElementById("confirmPassword").value,
            });


            localStorage.setItem("fromdata", JSON.stringify(fromdata));
            alert("You successfully signup");
            window.location.href = "login.html";
        }
    }

    else {
        alert("password does not same the confirm password");
    }

}
function logingg() {
    window.location.href = "login.html";
}
function sign() {
    window.location.href = "signup.html";
}
function login() {

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var emailcheck = true;
    var passwordcheck = true;
    fromdata = JSON.parse(localStorage.getItem("fromdata")) || [];


    for (let i = 0; i < fromdata.length; i++) {
        if (fromdata[i].b === email) {
            emailcheck = false;

            if (fromdata[i].c === pass) {

                localStorage.setItem("name1", JSON.stringify(fromdata[i].a))
                localStorage.setItem("gmail", JSON.stringify(email))
                window.location.href = "index.html";
                passwordcheck = false;
                break;
            }

        }
    }
    if (emailcheck) {
        alert("The email is incorrect");

    }
    else if (passwordcheck) {
        alert("The password is incorrect");
    }
}
var list = document.getElementById("list");



// var list = document.getElementById("list");


function addlist() {


    var team=JSON.parse(localStorage.getItem("team")) ||[]

    var teamname = document.getElementById("teamname")
    var teamcate=document.getElementById("teamcate")
    var emaillist = document.getElementById("emaillist")
    var ul =document.createElement("ul")
    ul.setAttribute("class", "abc")
    ul.setAttribute("id", "list")
    var li = document.createElement('li')

    var li1 = document.createElement('li')
    var li2 = document.createElement('li')
    li.setAttribute("class", "aisi")

    var litext = document.createTextNode(teamname.value)
    var listext = document.createTextNode(teamcate.value)
    var listingtext = document.createTextNode("Members :"+emaillist.value)





    li.appendChild(litext)
    li1.appendChild(listext)
    li2.appendChild(listingtext)

    ul.appendChild(li)
    ul.appendChild(li1)
    ul.appendChild(li2)
    team_create.appendChild(ul)
    

    team.push({
        gmail:gmail,
        gmail:document.getElementById("list").value
    })
    localStorage.setItem("team",JSON.stringify(team))

    document.getElementById("my_form").style.display = "none";
}



function open_form_button1() {
    document.getElementById("my_form").style.display = "flex";

}
function logout() {
    window.location.href = "login.html";
}
function newfunction() {
    name1 = JSON.parse(localStorage.getItem("name1"))
    gmail = JSON.parse(localStorage.getItem("gmail"))
    var info = document.getElementById("info")
    info.innerHTML = name1;
    console.log(name1)
}