const rights:any = document.querySelector("#reserved");

function right(){
    const date = new Date();
    let currentYear:string = date.toISOString().slice(0,4);
    rights.innerHTML = currentYear + `  © Prize, Made by <a style="color:white" href="https://cgwebsite.fr/" target="_blank">CGWEB</a>`
}

window.addEventListener('load', right);



function sizeWidth () {
    let width = window.innerWidth;
    // console.log(width);
}

window.addEventListener('resize', sizeWidth)

// if(window.scrollY >200){
//     console.log('okok')
// }
const nav:any = document.querySelector('#nav')
// function sizeScrollHeight () {
    
// }


window.addEventListener('scroll', ()=>{
    let height = window.scrollY;
    // console.log(height);
   
    if(height > 10){
        nav.classList.add("nav-active")
    }else{
        nav.classList.remove("nav-active")
    }
})

// nav active  
const btnNav = document.querySelectorAll(".link");
console.log(btnNav)

for(let i = 0; btnNav.length > i; i++){

}
btnNav.forEach( (element:any)  => {

    element.addEventListener('click', (e:any)=>{
        // je cherche l'élement qui à la classe button-work donc notre classe active et je spprime cette classe  
      const btnfind:any =  document.getElementsByClassName('active-link')
        // console.log(btnfind[0])
        if(btnfind){
            btnfind[0].classList.remove('active-link');

        }

        element.classList.add('active-link')
        // console.log(e.srcElement.attributes.class)

    })
});

// form 

const form:any = document.querySelector('#form')
const firstName:any = document.querySelector('#firstname');
const lastName:any = document.querySelector('#lastname');
const email:any = document.querySelector('#email');
const message:any = document.querySelector('#message');

form?.addEventListener('submit', (e:any)=>{
    e.preventDefault();
   
    console.log(firstName.value.length)
    let firstNameValue:string = firstName.value;
    let nameWithoutSpace = firstNameValue.trim();
    let lastNameValue:string = lastName.value;
    let lastnameWithoutSpace = lastNameValue.trim();
    let emailValue = email.value; 
    let messageValue = message.value 

    // firstNameValue.replace(/\s/g, '')
    let checkName:boolean = /^[a-zA-Z-é-ï ]+$/.test(nameWithoutSpace);
    let checkLastName:boolean = /^[a-zA-Z-é-ï ]+$/.test(lastnameWithoutSpace);
    let checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)

    const errorFirstname:any = document.querySelector('#error-firstname');
    const errorLastname:any = document.querySelector('#error-lastname');
    const errorEmail:any =  document.querySelector('#error-email');
    const errorMessage:any = document.querySelector('#error-message');
    // let pError:any = document.createElement('p');
    console.log(checkName);
    if(nameWithoutSpace.length < 3 || !checkName ){
        // console.log('il y a une erreur')
    //    pError.innerHTML= 'il y a une erreur';
    //    pError.classList.add('error-style')
       errorFirstname.innerHTML= `
       <p class='error-style'>Le prenom doit contenir aucun chiffre et faire plus de 3 caractères </p>
       `

        return false
    }else{
        errorFirstname.innerHTML= ""
    }

    if(lastNameValue.length < 2 || !checkLastName){
        errorLastname.innerHTML= `
        <p class='error-style'>Le nom doit contenir aucun chiffre et faire plus de 2 caractères </p>
        `
 
         return false
    }else{
        errorLastname.innerHTML= ""
    }

    if(!checkEmail){
        errorEmail.innerHTML= `
        <p class='error-style'>Ceci n'est pas un email valide</p>
        `
        return false
    }else{
        errorEmail.innerHTML="";
    }
if(messageValue.length < 10 ){
    errorMessage.innerHTML= `
    <p class='error-style'>Le message doit contenir au moins 10 caractères</p>
    `
    return false 
}else{
    errorMessage.innerHTML="";
}


let user:object = {
    Firstname: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    message: messageValue
}
console.log(user)

form.reset();

})