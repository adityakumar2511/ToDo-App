let inpt = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
  let li = document.createElement("li");
  li.innerText = inpt.value;
  li.classList.add("li");

  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("dlt");
  li.appendChild(delbtn);
  delbtn.addEventListener("click", function(){
    li.remove();
  })

  ul.append(li);
  inpt.value = "";
})