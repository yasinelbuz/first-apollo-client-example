import React from "react";
import useRockets from "./../hooks/rockets";
import { Link } from "react-router-dom";

export default function RocketsList() {
	const [loading, error, data] = useRockets();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<>
			{data.rockets.map((rocket) => (
				<div key={rocket.id} className='rocket-box'>
					<Link to={`/rocketDetails/${rocket.id}`}>
						<h2>{rocket.name}</h2>
					</Link>
					<pre>{rocket.type}</pre>
					<div>{rocket.description}</div>
					<a href={rocket.wikipedia} target='_blank'>
						{rocket.wikipedia}
					</a>
				</div>
			))}
		</>
	);
}
