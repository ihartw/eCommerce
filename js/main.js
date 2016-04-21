function Guitar(model, color, year, image, brand) {
	this.model = model;
	this.color = color;
	this.year = year;
	this.image = image;
	this.brand = brand;
}

var guitArray = []

var fender = new Guitar('Stratocaster', 'Fiesta Red', 1961, "img/strat.png", "Fender")
var gibson = new Guitar('Explorer', "Black", 1976, "img/explorer.png", "Gibson")
var halen = new Guitar('Striped Series', "Original", 1982, "img/van.jpg", "EVH")
var martin = new Guitar('OOO-15M', "Mahogany", 1980, "img/martinn.png", "Martin")
var gretsch = new Guitar('Hollow Body', "black", 2001, "img/gretsch.jpg", "Gretsch")
var paul = new Guitar('Custom 24', "Flamed Sunburst", 2015, "img/prs.png", "PRS")

guitArray.push(fender)
guitArray.push(gibson)
guitArray.push(halen)
guitArray.push(martin)
guitArray.push(gretsch)
guitArray.push(paul)

for(i = 0; i < guitArray.length; i++) {
	var tModel = document.createTextNode(guitArray[i].model)
	var tBrand = document.createTextNode(guitArray[i].brand)
	var tColor = document.createTextNode("Color: " + guitArray[i].color)
	var tYear = document.createTextNode("Year: " + guitArray[i].year)
	var tButton = document.createTextNode("BUY NOW")
	var tImage = guitArray[i].image

	var newCol = document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var modelH1 = document.createElement("H1")
	var brandH4 = document.createElement("H4")
	var colorH4 = document.createElement("H4")
	var yearH4 = document.createElement("H4")
	var enLarge = document.createElement("BUTTON")
	var image = document.createElement("IMG")

	modelH1.appendChild(tModel)
	brandH4.appendChild(tBrand)
	colorH4.appendChild(tColor)
	yearH4.appendChild(tYear)
	enLarge.appendChild(tButton)
	enLarge.className = "btn btn-primary"


	image.src = tImage
	image.className = "zoom"
	image.setAttribute("data-magnify-src", tImage)

	newCol.className = "col-sm-4"
	newDiv.className = "guitar" + i + "thumbnail"
	newDiv.appendChild(modelH1)
	newDiv.appendChild(brandH4)
	newDiv.appendChild(image)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(yearH4)
	newDiv.appendChild(enLarge)
	newCol.appendChild(newDiv)

	document.getElementById("guitars").appendChild(newCol)

}









