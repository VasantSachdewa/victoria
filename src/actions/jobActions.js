import Axios from 'axios';
import {
	REQUEST_JOB,
	REQUEST_JOB_FAILED,
	REQUEST_JOB_SUCCESS
} from '../constants/jobConstants';


export const listJobs = (pageNum=1) => async(dispatch) => {
	dispatch({
		type: REQUEST_JOB
	});
	try {
		const {data} = await Axios.get(
			`https://0eyhxcqz8d.execute-api.ap-southeast-1.amazonaws.com/kalee/jobs/?page=${pageNum}&pageSize=8`);
		dispatch({
			type: REQUEST_JOB_SUCCESS,
			payload: data.results,
			next: data.next,
			count: data.count,
			pageNum: pageNum
		});
	} catch (error) {
		dispatch({type: REQUEST_JOB_FAILED});
	}
};
