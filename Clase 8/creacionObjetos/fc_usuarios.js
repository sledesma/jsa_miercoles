function User(source) {
	Object.assign(this, this, source);
}
User.prototype = {
	log: function () {
		console.log(this);
	},
};

function UserList() {
	this.add = function (user) {
		if (user instanceof User) {
			this.push(user);
		}
	};

	this.addAll = function (userList) {
		for (let i = 0; i < userList.length; i++) {
			const el = userList[i];
			this.add(el);
		}
	};
}
UserList.prototype = Array.prototype;

fetch("https://jsonplaceholder.typicode.com/users")
	.then((r) => r.json())
	.then((data) => {
		const userList = data.map((item) => new User(item));
		const ul = new UserList();
		ul.addAll(userList);

		console.log(ul);
	});
