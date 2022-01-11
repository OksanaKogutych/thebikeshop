export default class Modal {
    constructor (modal, closeBtn) {
        this.modal = document.querySelector(modal);
        this.closeBtn = document.querySelector(closeBtn);
        this.displayModal = this.displayModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeViaWindow = this.closeViaWindow.bind(this);
    }

    displayModal() {
        if (localStorage.getItem('window') == null) {                    
                this.modal.classList.add("show")
                document.querySelector("body").style.overflow = 'hidden';
            
        }

    }

    closeModal () {
        
          this.modal.classList.remove("show");
          localStorage.setItem('window', 'close');
          
          document.querySelector("body").style.overflow = 'visible';
           

    }
    
    closeViaWindow (e) { 
        if(e.target == this.modal){
            this.modal.classList.remove("show")
            localStorage.setItem('window', 'close')
            document.querySelector("body").style.overflow = 'visible';
          }

    }

    init () {
        this.closeBtn.addEventListener('click', this.closeModal);        
        document.addEventListener('DOMContentLoaded', this.displayModal);
        this.modal.addEventListener('click', this.closeViaWindow)
    }

}