var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemlist = Array.from(document.getElementsByTagName("li"));
var deletebuttons = Array.from(document.getElementsByClassName("delete"));

itemlist.forEach(function (item) {
	item.addEventListener("click", function () {
		item.classList.toggle("done");
	})
});

deletebuttons.forEach(function (deletebutton) {
	deletebutton.addEventListener("click", function () {
		deletebutton.parentElement.remove();
	})
});

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.classList.add("delete");
	li.appendChild(button);
	ul.appendChild(li);
	// Adding the eventListener to the newly created list item
	li.addEventListener("click", function () {
		li.classList.toggle("done");
	});
	// Adding the eventListener to the newly created button
	button.addEventListener("click", function () {
		button.parentElement.remove();
	});
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

