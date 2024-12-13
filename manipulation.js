let c=document.createElement("button");
c.innerText="submit"

let acc=document.querySelector("button");
acc. after(c);
//insertuing heading at top

let heading=document.createElement("h3");
heading.innerText="hey buddy its insertion of element";
heading.style.backgroundColor="orange";

document.querySelector("body").prepend(heading);
