import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
	const [responses, setResponses] = useState([]);

	useEffect(() => {
		(async resource => {
			const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
			setResponses(data);
		})(resource);
	}, [resource]);

	return responses;
};

export default useResources;
