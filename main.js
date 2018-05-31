const myPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => { resolve('Ok') }, 2000)
});

// myPromise()
// 	.then(response => {
// 		console.log(response);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})

async function execPromise() {
	let response = await myPromise();

	console.log(response);
}

const execPromiseArrow = async () => {
	let response = await myPromise();

	console.log(response);
}

execPromise();
execPromiseArrow();
