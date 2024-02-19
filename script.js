function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function updateDateTime() {  
    let currentTime = new Date();      
    let currentHour   =  currentTime.getHours().toString().padStart(2, '0');
    let currentMinute =  currentTime.getUTCMinutes().toString().padStart(2, '0');
    let currentSecond =  currentTime.getSeconds().toString().padStart(2, '0');

    let hour = currentHour+':'+currentMinute+':'+currentSecond;   
    document.querySelector('#time').textContent = hour;
} 


function getDateTime() {  
    let currentDate = new Date();      
    //let currentDate = currentTime.getVarDate(); 
    document.querySelector('#datetime').textContent = currentDate;
} 
  
function openModal(){  






    const exampleModal = document.getElementById('exampleModal');

    console.log(exampleModal)


    if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
    })
    }
}