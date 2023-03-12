const theItem = $("#itemName")

$(".btn").on("click",function(){
    event.preventDefault()
    console.log(theItem.val())
})

function getItemInfo() {
    event.preventDefault();
    let newItem = {
        item: theItem.val(),
        is_done: 0
    }
    console.log(newItem)
    submitItem(newItem)
    window.location.href = "/"
    
}

function submitItem(currentNewItem) {
    $.post("/api/newItem", currentNewItem, () => {

    })
}

$.get("/api/getAllItems").then(function(data) {
   console.log("this is all items currently",data)
  });