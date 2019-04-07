/**
 * Created by COMPUTER POINT on 4/5/2019.
 */

var userName = [];
var passWord = [];
function Register() {

    var newUserName = document.getElementById("username").value ;
    var newPassWord = document.getElementById("password").value ;
    userName.push(newUserName);
    passWord.push(newPassWord);

    if ( newUserName === ""){
        alert("Enter Valid user name")
    }
    if ( newPassWord === ""){
        alert("Enter a Valid password")
    }
    alert ("Registeration successful")
    document.getElementById("username").value = null;
    document.getElementById("password").value = null;




}

function login (){

    var userLoginName = document.getElementById("usernamelog").value ;
    var userPassWord = document.getElementById("passwordlog").value ;
    if ( userLoginName === ""){
        alert("Enter Valid user name");

    }

    if ( userPassWord === ""){
        alert("Enter a Valid password")

    }
    for (i = 0 ; i <= userName.length; i++){
        if ( userName[i] === userLoginName && passWord [i] === userPassWord){
            alert("login successful")
            break
        }
        else {

            alert("Sorry!")
        }


    }
    document.getElementById("usernamelog").value = null;

    document.getElementById("passwordlog").value = null;


}