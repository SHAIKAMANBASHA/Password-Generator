const btn=document.getElementById("genPass")
const range=document.querySelector("#range")
const rangeval=document.querySelector("#rangeVal")
const newpass=document.getElementById("newPass")
const upp=document.querySelector("#capLet")
const low=document.querySelector("#samLet")
const num=document.querySelector("#number")
const sym=document.querySelector("#symbol")
const copy=document.querySelector("#copyBtn")
range.addEventListener('change',()=> {
    rangeval.innerText=range.value
})
btn.addEventListener('click',()=>{
    let capital='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let small ='abcdefghijklmnopqrstuvwxyz'
    let number = '0123456789'
    let symbols = '~^!@#s%^a*()_+}{'
    let latest=""
    let final=""
    if(upp.checked){
        final+=capital
    }
    if(low.checked){
        final+=small
    }
    if(num.checked){
        final+=number
    }
    if(sym.checked){
        final+=symbols
    }
    if(final===''){
        alert("Please enter alteast one number")
       
    }
    else{
    for(let i=0;i<range.value;i++){
        rand=Math.floor(Math.random()*final.length)
        latest+=final.charAt(rand)
        newpass.innerText=latest

    }
}

    
})
copy.addEventListener('click',()=>{

    window.navigator.clipboard.writeText(newpass.innerText)
})
