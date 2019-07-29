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

makeRequest('GET', 'https://jsonplaceholder.typicode.com/users', res => {
	renderUsers(res);
});

function renderUsers(users) {
	users.forEach(user => {
		const p = document.createElement('p');
		document.body.appendChild(p);

		var newButton = document.createElement('button');
		newButton.innerHTML = user.name;
		newButton.type = 'button';
		newButton.classList.add ('btn', 'btn-info');
		newButton.setAttribute('data-toggle', 'collapse');
		newButton.setAttribute('data-target', '#collapseExample');
		newButton.setAttribute('aria-expanded', false);
		newButton.setAttribute('aria-controls', 'collapseExample');
		p.appendChild(newButton);
		
		var newDiv = document.createElement('div');
		newDiv.classList.add ('collapse', 'in');
		newDiv.setAttribute('id', 'collapseExample');
		p.appendChild(newDiv);
		for (var key in user) {
			if (user.hasOwnProperty(key)){
				console.log(key,user[key]);
				var newCard = document.createElement('div');
				newCard.innerHTML = `${user[key] || ''} ${user[key].street || ''} ${user[key].name || ''}`;
				// newCard.innerHTML = `${user[key] || ''} ${user[key].address && user[key].address.street ? user[key].address.street: ''}`;
				newCard.classList.add ('card', 'card-body');
				newDiv.appendChild(newCard);
			}
		}
		
	});
}

