class Ui {
    constructor(){
        this.food = document.getElementById('item-name');
        this.calories = document.getElementById('item-calories');
        this.itemList = document.getElementById('item-list');
        this.totalCalories = document.querySelector('.total-calories');
        this.addBtn = document.querySelector('.add-btn');
        this.updateBtn = document.querySelector('.update-btn');
        this.deleteBtn = document.querySelector('.delete-btn');
        this.clearBtn = document.querySelector('.clear-btn');
        this.backBtn = document.querySelector('.back-btn');
        this.targetItemId = '';
    }

    refreshList(items){
        let entries = '';
        let total = 0;
        let color = '';
        console.log(items);
        items.forEach(function(item,key){
            total += parseInt(item.calories);
            color = key % 2 === 0 ? 'indigo lighten-3' : 'indigo lighten-1';
            entries += `<li class="collection-item ${color}" id="item-${key}">
            <strong>${item.name}: </strong><em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
                <i class="fa fa-pencil white-text"></i>
            </a>
            </li>`;
        });
        this.itemList.innerHTML = entries;
        this.totalCalories.innerHTML = total;
        this.food.value = '';
        this.calories.value = '';
    }



}