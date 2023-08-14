const div=document.querySelector("div");
const form=document.querySelector("form");
const button=document.querySelector("button");

//event capturing/trickling : just add true---from parent to child
//event.target //this.target //event.currentTarget
//event bubbling: from child to parent

div.addEventListener("click",function(){
    alert("div is clicked");
});
form.addEventListener("click",function(){
    alert("form is clicked");
});

//EVENT captuting
button.addEventListener("click",function(){
    alert("button is clicked")
    ,{
        capture:true,

    }
});

//what is event delegation?
//if there are multiple events to be triggerd then it that case we use event delegation
//and apply event listener on the parent
