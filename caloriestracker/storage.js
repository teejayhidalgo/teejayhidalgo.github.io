class Storage{
    constructor(){
        
    }

    refresh(data){
        localStorage.setItem('food',JSON.stringify(data));
    }

    get(){
        return JSON.parse(localStorage.getItem('food'));
    }

    clear(){
        localStorage.clear('food');
    }
}