class Items{
    constructor(){
        this.list = [];
        this.itemId = '';
        if(localStorage.getItem('food') !== null){
            this.list = JSON.parse(localStorage.getItem('food'));
        }

    }

    add(data){
        this.list.push(data);
    }

    delete(){
        delete this.list[this.itemId];
    }

    update(data){
        this.list[this.itemId] =  data;
    }
}