const ui = new Ui();
const items = new Items();
const storage = new Storage();
const validate = new Validate();

window.addEventListener('load', function(){
    ui.refreshList(items.list);
});

ui.addBtn.addEventListener('click', addItem);

ui.itemList.addEventListener('click', function(e){
    if(e.target.className === 'fa fa-pencil'){
        ui.targetItemId = e.target.parentNode.parentNode.id;
        activateEditItem();
    }
});

ui.backBtn.addEventListener('click', function(e){
    ui.updateBtn.classList.add('hide');
    ui.deleteBtn.classList.add('hide');
    ui.backBtn.classList.add('hide');
    ui.addBtn.classList.remove('hide');
    ui.food.value = '';
    ui.calories.value = '';
    e.preventDefault();
});

ui.clearBtn.addEventListener('click', clearAll);

ui.deleteBtn.addEventListener('click', function(e){
    items.delete(items.itemId);
    console.log(items.list);
    storage.refresh(items.list);
    ui.refreshList(items.list);
    deactivateEditItem();
    e.preventDefault();
});

ui.updateBtn.addEventListener('click',function(e){
    if(!validate.validateName() || !validate.validateCalories()){
        return false;
    }
    items.update({name: ui.food.value, calories: ui.calories.value});
    storage.refresh(items.list);
    ui.refreshList(items.list);
    e.preventDefault();
});

function addItem(e){
    if(!validate.validateName() || !validate.validateCalories()){
        return false;
    }
    let food = ui.food.value;
    let calories = ui.calories.value;
    items.add({name:food, calories:calories});
    ui.refreshList(items.list);
    storage.refresh(items.list);

    e.preventDefault();
}

function clearAll(){
    ui.itemList.innerHTML = '';
    ui.totalCalories.innerHTML = 0;
    storage.clear();
    validate.removeStatus();
    deactivateEditItem();

}

function activateEditItem(){
    ui.updateBtn.classList.remove('hide');
    ui.deleteBtn.classList.remove('hide');
    ui.backBtn.classList.remove('hide');
    ui.addBtn.classList.add('hide');
    let idOnly = ui.targetItemId.substr(5);
    items.itemId = parseInt(idOnly);
    ui.food.value = items.list[items.itemId].name;
    ui.calories.value = items.list[items.itemId].calories;
}

function deactivateEditItem(){
    ui.updateBtn.classList.add('hide');
    ui.deleteBtn.classList.add('hide');
    ui.backBtn.classList.add('hide');
    ui.addBtn.classList.remove('hide');
    items.itemId = '';
}