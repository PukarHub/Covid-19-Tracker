// variables
const sendBtn = document.querySelector('#sendBtn')
const messageIn = document.querySelector('#messageIn')
const messageOut = document.querySelector('#messageOut')

// eventlisteners
sendBtn.addEventListener('click', sendMessage)

 

function sendMessage(){
    let content = messageIn.value;
    if(content === ''){
        alert('please enter valid message about Covid-19.Current value is empty')
      }else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }

    const li = document.createElement('li')
    
    
    

}