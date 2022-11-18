const dropdownimg = document.createElement("img");
dropdownimg.src = "res/arrow.png";
dropdownimg.style = "width:9px;height:7px";
var items = document.querySelectorAll(".drop li");
Array.prototype.forEach.call(items, function(item) {
item.insertBefore(dropdownimg, item.firstChild);
})
