// add task button event
let add_task = document.querySelector(".add");
let add_container = document.querySelector(".add-container");
let input_container = document.querySelector(".input-container");
let task_container = document.querySelector(".task-container");
let card = document.querySelector(".card");
let task_counter =0;

add_task.addEventListener("click",()=>{
    if(input_container.style.display !="none"){
        let new_task = document.createElement("div");
        let task_input = document.querySelector(".task-input");
        task_container.style.display="block";
        new_task.classList.add("input-container");
        new_task.style.border="none";
        new_task.style.marginBottom="0.8vw";
        input_container.style.display="none";
        new_task.innerHTML=`<input class="task-input" type="text"><button class="delete"><img src="./img/delete_img.svg" alt=""></button>`;
        let new_task_input=new_task.querySelector("input");
        new_task_input.value=task_input.value;
        task_container.appendChild(new_task); 
        task_input.value='';
        task_counter++;  
    }
})

// delete button  event
card.addEventListener("click",(e)=>{
    if (e.target.closest(".delete") && e.target.closest(".input-container").id !="0") {
        let delete_button = e.target.closest(".delete");
        let input_container = delete_button.closest(".input-container");
        input_container.remove();
        task_counter--;
    }
    if(task_counter==0){
        input_container.style.display="flex";
        task_container.style.display="none";
    }
})

//add input
let add_input = document.querySelector(".add-button");
add_input.addEventListener("click",()=>{
    input_container.style.display="flex";
})

// sort
let sort=document.querySelector(".sort");
let sort_checker = 0;
sort.addEventListener("click",(e)=>{
    let input_container_list=Array.from(task_container.querySelectorAll(".input-container"));
    if(sort_checker === 0){
        input_container_list.sort((a,b)=>{
            a= a.querySelector(".task-input").value.toLowerCase();
            b= b.querySelector(".task-input").value.toLowerCase();
            if(a<b) return -1;
            else if(a>b) return 1;
            else return 0;
        });
        task_container.innerHTML = "";
        input_container_list.forEach((task)=>{
            task_container.appendChild(task);
        });
        sort_checker=1;
    }else if(sort_checker===1){
        input_container_list.sort((a,b)=>{
            a= a.querySelector(".task-input").value.toLowerCase();
            b= b.querySelector(".task-input").value.toLowerCase();
            if(a>b) return -1;
            else if(a<b) return 1;
            else return 0;
        })
        task_container.innerHTML = "";
        input_container_list.forEach((task)=>{
            task_container.appendChild(task);
        });
        sort.src="./img/sort_decrease_deactive.svg";
        sort_checker=2; 
    }else if(sort_checker===2){
        input_container_list.sort((a,b)=>{
            a= a.querySelector(".task-input").value.toLowerCase();
            b= b.querySelector(".task-input").value.toLowerCase();
            if(a<b) return -1;
            else if(a>b) return 1;
            else return 0;
        });
        task_container.innerHTML = "";
        input_container_list.forEach((task)=>{
            task_container.appendChild(task);
        });
        sort.src="./img/sort_default.svg";
        sort_checker=1;
    }
})


// hover
sort.addEventListener("mouseover", () => {
    if (sort_checker === 2) {
        sort.src = "./img/sort_decrease_active.svg";
    } else {
        sort.src = "./img/sort_increase_active.svg";
    }
});

sort.addEventListener("mouseout", () => {
    if (sort_checker === 2) {
        sort.src = "./img/sort_decrease_deactive.svg";
    } else {
        sort.src = "./img/sort_default.svg";
    }
});