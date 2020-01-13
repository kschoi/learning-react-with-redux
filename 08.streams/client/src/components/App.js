import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/" exact component={StreamList} />
				<Route path="/create" exact component={StreamCreate} />
				<Route path="/show" exact component={StreamShow} />
				<Route path="/edit" exact component={StreamEdit} />
				<Route path="/delete" exact component={StreamDelete} />
			</BrowserRouter>
		</div>
	);
};

export default App;
