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

    delete(key){
        this.list = this.list.filter(function(item,index){
            console.log(index, key);
            return index != key;
        });
    }

    update(data){
        this.list[this.itemId] =  data;
    }
}