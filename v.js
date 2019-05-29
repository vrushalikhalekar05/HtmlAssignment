// Get the modal
var color1=["red","white","blue","green","black","yellow"];
var image_list = ["1.jpeg","2.jpg","3.jpg","5.jpeg","6.jpg","8.jpg"]
var cnt=0;
var pos=0


var modal = document.getElementById('id01');
$( document ).ready(function()
{
    console.log("ready");


    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log( page );


    username = localStorage.getItem("user")
    if (page=="home.html"){
        if (username){
            document.getElementById("user_id").innerHTML = "Hi "+username + "..!"
            pos = localStorage.getItem(username+"_theme_img")
            //document.body.style.backgroundColor = color1[cnt];
           $('body').css('background-image',"url("+image_list[pos]+")")  
    var preview = document.querySelector('img'); //selects the query named img
    var filename= localStorage.getItem(username+"_filepic")
    preview.src=filename
        }
        else{
            alert("Please Login First")
            window.location.href = "indextry.html"
        }
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function register(){
var username = document.getElementById("name").value;
var password = document.getElementById("pw").value;
//localStorage.setItem("data",datatosave);

var pass = localStorage.getItem(username);
if(pass){
alert('already register\nUse Another One Please.');
}
else{
    localStorage.setItem(username,password);
    //console.log(localStorage.getItem(username));
    alert('Successflly Registered.');
    window.location.href = "indextry.html";
    }
}

function login_here() 
{
var username = document.getElementById("myname").value;
var password = document.getElementById("pass").value;
var pass = localStorage.getItem(username);
if(pass){
    localStorage.setItem("user",username)
    window.location.href = "home.html";
    //console.log(pass)
}
else{
    alert("plz register first")
    window.location.href = "register.html"
    }  
}

function settheme()
{   
document.body.style.backgroundColor = color1[cnt];
    document.getElementById("theme").innerHTML=cnt;
    cnt++;
    username = localStorage.getItem("user")
    localStorage.setItem(username+"_theme", cnt);
    if(cnt>=color1.length)
    {
        cnt=0;
    }
}


function logout()
{
    localStorage.removeItem("user")
    window.location.href="indextry.html"
}



function theme(){

    $('body').css('background-image',"url("+image_list[pos]+")")
    username = localStorage.getItem("user")
    localStorage.setItem(username+"_theme_img", pos);
    if(pos>=image_list.length)
    {
        pos=0;
    }
        
    pos++;
}

function previewFile(){

    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]')
    if (file){
    file = file.files[0]; //sames as here
    var reader = new FileReader();
    console.log(file)
    var filename=file["name"]
    preview.src=filename
    username = localStorage.getItem("user")

    localStorage.setItem(username+"_filepic",filename)
    }
    reader.onloadend = function () {
        preview.src = reader.result;
    }

    // if (file) {
    //     reader.readAsDataURL(file); //reads the data as a URL
    // } else {
    //     preview.src = "";
    // }
}

previewFile(); 
