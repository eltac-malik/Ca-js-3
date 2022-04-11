let rest = document.getElementById("result")
let count = 0;
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")
let plus = document.getElementById("plus")

plus.addEventListener("click",increase = () =>
{
    count++;
    rest.innerHTML = count
})

minus.addEventListener("click",decrease = () =>{
    count--;
    if (count !=0)
    {
        rest.innerHTML= count
    }
    else
    {
        alert("Sifirdan asagi eded daxil etmek mumkun deyil")
    }
})

reset.addEventListener("click", reset = ()=>
{
    count = 1;
    rest.innerHTML = count
})