import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
	const responses = useResources(resource);

	return (
		<ul>
			{responses.map(record => (
				<li key={record.id}>{record.title}</li>
			))}
		</ul>
	);
};

export default ResourceList;
