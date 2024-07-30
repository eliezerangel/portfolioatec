function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function updateDateTime() {  
    let currentTime = new Date();      
    let currentHour   =  currentTime.getHours().toString().padStart(2, '0');
    let currentMinute =  currentTime.getUTCMinutes().toString().padStart(2, '0');
    let currentSecond =  currentTime.getSeconds().toString().padStart(2, '0');

    //let hour = currentHour+':'+currentMinute+':'+currentSecond;   
    //document.querySelector('#time').textContent = hour;
} 


function getDateTime() {  
    let currentDate = new Date();      
    //let currentDate = currentTime.getVarDate(); 
    document.querySelector('#datetime').textContent = currentDate; 
    //console.log('HORAS');
} 
  
function openModal(){  

    const exampleModal = document.getElementById('exampleModal');
    //console.log(exampleModal)

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

function recarregarPagina() {
    setTimeout(function() {
        location.reload(); // recarrega a página
    }, 4000); // 4000 milissegundos = 4 segundos
}

function showMessage(event){    
    event.preventDefault(); // Para evitar o envio do formulário
    
    var nome   = document.getElementById("name").value;
    var alerta = document.getElementById("alert_success");
    // Substitui o conteúdo usando innerHTML
    alerta.innerHTML = "Olá "+nome+"! Sua mensagem foi enviada com sucesso.";

    document.getElementById("alert_success").removeAttribute("hidden");
    topFunction();
    // Chama a função para recarregar a página após dois segundos
    recarregarPagina(); 
}
