let image,
	description,
	name,
	cost = [];

const data = fetch('/api/fashion')
	.then(function (resp) {
		return resp.json();
	})
	.then(function (data) {
		image = data.image;
		description = data.description;
		name = data.name;
		cost = data.cost;
	});

export default data;
