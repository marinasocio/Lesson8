function makeRequest(method, url, cb) {
	const xhr = new XMLHttpRequest();

	xhr.open(method, url);

	xhr.addEventListener('load', () => {
		const resBody = JSON.parse(xhr.responseText);
		cb(resBody);
	});

	xhr.addEventListener('error', () => {
		console.log('error');
	});

	xhr.send();
}

makeRequest('GET', 'https://jsonplaceholder.typicode.com/users', (res) => {
	renderUsers(res);
});

function renderUsers(users) {
	users.forEach((user) => {
		const p = document.createElement('p');
		p.setAttribute('id', 'number');
		document.body.appendChild(p);

		var newButton = document.createElement('button');
		newButton.innerHTML = user.name;
		newButton.type = 'button';
		newButton.classList.add('btn', 'btn-info');
		newButton.setAttribute('data-toggle', 'collapse');
		newButton.setAttribute('data-target', '#collapseExample');
		newButton.setAttribute('aria-expanded', false);
		newButton.setAttribute('aria-controls', 'collapseExample');
		p.appendChild(newButton);

		var newDiv = document.createElement('div');
		newDiv.classList.add('collapse', 'in');
		newDiv.setAttribute('id', 'collapseExample');
		p.parentNode.insertBefore(newDiv, p.nextSibling);
		for (var key in user) {
			if (user.hasOwnProperty(key)) {
				console.log(key, user[key]);
				var newCard = document.createElement('div');
				if (key === 'address') {
					newCard.innerHTML = `${user[key].city} ${user[key].street}`;
				} else if (key === 'company') {
					newCard.innerHTML = `${user[key].name} ${user[key].catchPhrase}`;
				} else {
					newCard.innerHTML = user[key];
				}
				newCard.classList.add('card', 'card-body');
				newDiv.appendChild(newCard);
			}
		}
	});
}
