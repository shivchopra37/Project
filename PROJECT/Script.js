async function api1(){
    const response=await fetch("https://cat-fact.herokuapp.com/facts");
    console.log(response);
    const data=await response.json();
    console.log(data);
    return data[4]["text"];
}
const text=api1();
let element=document.querySelector("p");
async function display(){
 element.innerText=await api1();
}
display();