let container = document.querySelector('.container')
let form = document.querySelector('.form');
let input = document.querySelector('input');
let addBtn = document.querySelector('.add');
let toDo = document.querySelector('.toDo')

function createTodo(){
     var para = document.createElement('p');
     para.innerHTML = `${input.value}` + `<button class="delBtn" >X</button>`;
     para.class = 'para';
     para.style = 'width : 25% ; text-align : left; border : 1px solid blue; background-color: rgb(0, 162, 255);'
     var delBtn = para.querySelector('.delBtn');     
     toDo.appendChild(para);
}

addBtn.addEventListener('click', function(){
    if(input.value!='') {
        createTodo();
    }
    input.value='';
})

window.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        if(input.value!='') {
            createTodo();
        }
        input.value='';
    }
})

toDo.addEventListener('click', onClick);
 function onClick(event) {
     var tmp = event.target;
     console.log(tmp)
     if (tmp.class='para') {
         tmp.style['background-color'] = 'greenyellow';
         tmp.style['border'] = "green";
         if(!tmp.innerHTML.includes('(complete)')) tmp.innerHTML+='(complete)';
     }
     if (tmp.class='delBtn') toDo.removeChild(tmp.parentNode)
 }

 
