export const createCards = (res) => {
	const cards = res.map((result) => {
		const card = document.createElement("div");
		card.classList.add("card");

		const image = document.createElement("img");
		image.src = result.imgUrl;
		card.appendChild(image);

		const cardText = document.createElement("div");
		cardText.classList.add("card-text");
		card.appendChild(cardText);

		const paragraph = document.createElement("p");
		paragraph.textContent = result.name;
		card.appendChild(paragraph);

		const price = document.createElement("span");
		price.textContent = result.price;
		card.appendChild(price);


		return card;
	});

	return cards;
};

export const createCategoryOptions = (categories) => {
	const select = document.getElementById("select-categories");

	categories.forEach((category) => {
		const option = document.createElement("option");
		option.text = category.catName;
		option.value = category.catValue; // Valor escondido para cogerlo en el onchange
		select.appendChild(option);
	});

	return select;
}