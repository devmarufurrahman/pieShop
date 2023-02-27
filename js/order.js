let buttons = document.querySelectorAll("button[data-order]");
buttons.forEach((e) => {
	e.addEventListener("click", function (e) {
		let button = e.currentTarget;
		let container = button.parentNode;

		const order = {
			id: (id = button.getAttribute("data-order")),
			title: container.querySelector(".title").innerText,
			price: container.querySelector(".price").innerText,
			p: container.querySelector(".p").innerText,
		};

		localStorage.setItem("order", JSON.stringify(order));

		const url = window.location.href.replace("pie.html", "order.html");
		window.location.href = url;
	});
});

window.addEventListener("DOMContentLoaded", function (e) {
	let order = localStorage.getItem("order");
	let pieOrder = JSON.parse(order);

	if (order) {
		let data = document.querySelector("#pie");
		console.log(data);
		let title = data.querySelector(".title");
		let price = data.querySelector(".price");
		let p = data.querySelector(".p");
		let orderInput = document.querySelector("#pie-order");

		title.innerText = pieOrder.title;
		price.innerText = pieOrder.price;
		p.innerText = pieOrder.p;

		const img = data.querySelector("img");
		img.setAttribute("src", `../img/${pieOrder.id}.png`);
		img.setAttribute("alt", pieOrder.title);
	}
});
