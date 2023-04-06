import { useQuery, gql } from "@apollo/client";

const useRockets = () => {
	const GET_ROCKETS = gql`
		query Rockets {
			rockets {
				id
				description
				name
				type
				wikipedia
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_ROCKETS);
	return [loading, error, data];
};

export default useRockets;
