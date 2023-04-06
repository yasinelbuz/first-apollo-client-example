import React from "react";
import { useParams } from "react-router-dom";
import useRocketsDetails from "../hooks/rocketsDetails";

export default function RocketDetails() {
	const { id } = useParams();
	const [loading, error, data] = useRocketsDetails({
		variables: { rocketId: id },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	const rocket = data.rocket;

	return (
		<>
			<div key={rocket.id} className='rocket-box'>
				<h2>{rocket.name}</h2>
				<pre>{rocket.type}</pre>
				<div>{rocket.description}</div>
				<pre>
					<span>{rocket.engines.number}</span>
					<span>{rocket.engines.type}</span>
					<span>{rocket.engines.type}</span>
				</pre>
			</div>
		</>
	);
}
