/* Add your JavaScript to this file */
addEventListener('load', ()=>{

    let form = document.querySelector('form')
    let email = document.querySelector('#email')
    let submitBtn = document.querySelector('.btn')
    let message = document.querySelector('.message')
    
    addEventListener('submit', (e) =>{
        e.preventDefault()
        if(!email.value == ''){
            message.textContent = `Thank you! your email address ${email.value} has been added to our mailing list`
            email.value = ''
        }else{
            message.textContent = 'Please enter a valid email address'
            email.value = ''
        }
    })
})