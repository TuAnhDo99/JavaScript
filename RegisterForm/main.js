let container = document.querySelector('.container');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let confirm = document.querySelector('.confirm');
let headform = document.querySelector('.head-form');


let usrNameLabel = document.createElement('label');
usrNameLabel.innerHTML = 'Username:';
username.appendChild(usrNameLabel);

var br = document.createElement('br');
username.appendChild(br);


let usrNameForm = document.createElement('input');
usrNameForm.type = 'text';
usrNameForm.required;
username.appendChild(usrNameForm)

var br = document.createElement('br');
username.appendChild(br);

let pwdLabel = document.createElement('label');
pwdLabel.innerHTML = 'Password:';
password.appendChild(pwdLabel);


var br = document.createElement('br');
password.appendChild(br);

let pwdForm = document.createElement('input');
pwdForm.type = 'password';
pwdForm.required;
password.appendChild(pwdForm);

var br = document.createElement('br');
password.appendChild(br);

let confirmPwdLabel = document.createElement('label');
confirmPwdLabel.innerHTML = 'Comfirm your password:';
confirm.appendChild(confirmPwdLabel);


var br = document.createElement('br');
confirm.appendChild(br);

let confirmPwdForm = document.createElement('input');
confirmPwdForm.type = 'password';
confirmPwdForm.required;
confirm.appendChild(confirmPwdForm)

var br = document.createElement('br');
confirm.appendChild(br);

let register = document.createElement('button');
register.type = 'submit';
register.innerHTML = 'Register';
container.appendChild(register);

let para1=document.createElement('p'); 
para1.innerHTML='Username is required';
para1.style= 'color:red';

let para2=document.createElement('p'); 
para2.innerHTML='Password is required';
para2.style= 'color:red';

let para3=document.createElement('p'); 
para3.innerHTML='Confirm password is required';
para3.style= 'color:red';

let para4=document.createElement('p');
para4.innerHTML='Password and confirm password do not match'
para4.style= 'color:red';

let para5=document.createElement('p');
para5.innerHTML='You have registered succesfully';
para5.style= 'color:green; text-align:center';

register.addEventListener('click', function(){
     if (usrNameForm.value.length==0) {
         username.appendChild(para1);
     } else if (username.contains(para1)) username.removeChild(para1);
     


     if (pwdForm.value.length==0) {
        password.appendChild(para2);
    } else if (password.contains(para2)) password.removeChild(para2);


    if (confirmPwdForm.value.length==0) {
        confirm.appendChild(para3);
    } else if (confirm.contains(para3)) confirm.removeChild(para3);

    if (pwdForm.value!=confirmPwdForm.value) {
       confirm.appendChild(para4);
    } else if (confirm.contains(para4)) confirm.removeChild(para4);

    if (!container.contains(para1) && !container.contains(para2) && !container.contains(para3) &&! container.contains(para4)){
        headform.appendChild(para5);
    } else if (headform.contains(para5)) headform.removeChild(para5);

})

 

          


