
let inpNewTask = $("#inpNewTask");
let ulTasks = $("#ulTasks");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnClear = $("#btnClear");
let btnSort = $("#btnSort");

//let TaskArray = [];
function addItem(){
        //adding new html element and setting properties to it
        let listItem = $('<li>',{
            'class' : 'list-group-item', 
            text : inpNewTask.val()
        })
        listItem.click(() => listItem.toggleClass('done'))
        ulTasks.append(listItem); 
        inpNewTask.val("")
        toggeleDisabled()
}

function cleanDone(){
    $("#ulTasks .done").remove()
    toggeleDisabled();
}

function doSort(){
    $("#ulTasks .done").appendTo(ulTasks)
}

function toggeleDisabled(isDisabled){
 
        btnAdd.prop('disabled',inpNewTask.val()=='')
        btnReset.prop('disabled',inpNewTask.val()=='')
        btnSort.prop('disabled',ulTasks.children().length < 1)
        btnClear.prop('disabled',ulTasks.children().length < 1)
    
}

inpNewTask.keypress((e)=>{
    if(e.which ==  13) //e.which is keycode , enter has keycode = 13
        addItem()
})

inpNewTask.on('input',toggeleDisabled)
btnAdd.click(addItem);
btnReset.click(() => {
    inpNewTask.val("")
    toggeleDisabled()
})

btnClear.click(cleanDone)

btnSort.click(doSort)