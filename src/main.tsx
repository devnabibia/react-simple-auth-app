import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<React.StrictMode>
			<HashRouter>
				<App />
			</HashRouter>
		</React.StrictMode>
	</Provider>
);
