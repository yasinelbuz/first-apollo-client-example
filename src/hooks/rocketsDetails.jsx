import { useQuery, gql } from "@apollo/client";

const useRocketsDetails = (options) => {
	const GET_ROCKETS_DETAILS = gql`
		query Rocket($rocketId: ID!) {
			rocket(id: $rocketId) {
				description
				id
				name
				type
				engines {
					number
					type
					propellant_1
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_ROCKETS_DETAILS, options);
	return [loading, error, data];
};

export default useRocketsDetails;
