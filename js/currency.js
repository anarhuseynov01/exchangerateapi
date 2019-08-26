class Currency{

    constructor(firstcurrency,secondcurrency){
        this.amount = null;
        this.firstcurrency = firstcurrency;
        this.secondcurrency = secondcurrency;
        this.url = 'https://api.exchangeratesapi.io/latest?base=';
    }

    exchange(){
        return new Promise((resolve,reject)=>{
            fetch(this.url + this.firstcurrency)
                .then(response => response.json())
                .then(data => {
                    const noderesult = data.rates[this.secondcurrency];
                    const mycost = Number(this.amount) * noderesult;
                    resolve(mycost);
                })
                .catch(err => reject(err))
        })
    }

    changeamount(amount){
        this.amount= amount;
    }
    

    changeFirstCurrency(newFirstCurrency) {
        this.firstcurrency = newFirstCurrency;
    }


    changeSecondCurrency(newSecondCurrency) {
        this.secondcurrency = newSecondCurrency;
    }
}