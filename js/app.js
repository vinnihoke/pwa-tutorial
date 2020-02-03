// This checks if the Browser supports Service Workers
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then((reg) => console.log("Service worker registered", reg))
		.catch((err) => console.log("Service worker not registered", err))
}