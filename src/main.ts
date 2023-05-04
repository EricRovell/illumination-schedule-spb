import App from "./App.svelte";
import "./app.css";

const app = new App({
	target: document.getElementById("app")
});

const registerServiceWorker = async () => {
	if ("serviceWorker" in navigator) {
		try {
			await navigator.serviceWorker.register("/service-worker.js", {
				scope: "/"
			});
		} catch (error) {
			console.error(`Service worker registration failed with ${error}`);
		}
	}
};

registerServiceWorker();

export default app;
