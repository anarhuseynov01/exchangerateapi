class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputfirst  = document.getElementById('outputFirst')
        this.outputsecond  = document.getElementById('outputSecond')
        this.result = document.getElementById('outputResult')
    }

    changeFirst(){
        this.outputfirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent
    }

    changeSecond(){
        this.outputsecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent
    }

    displayresult(response){
        this.result.value = response;
    }
}