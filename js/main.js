function toDo() {
	var toDoInput = document.getElementById('toDoInput').value
	console.log(toDoInput)

	var newText = document.createTextNode(toDoInput)
	var newElement = document.createElement('li')

	newElement.appendChild(newText)
	document.getElementById('list').appendChild(newElement)
}