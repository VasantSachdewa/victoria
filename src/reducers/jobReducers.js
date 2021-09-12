import {
	REQUEST_JOB,
	REQUEST_JOB_FAILED,
	REQUEST_JOB_SUCCESS
} from '../constants/jobConstants';

const jobsReducer = (state={loading:true, jobs: []}, action) => {
	switch(action.type) {
		case REQUEST_JOB:
			return {loading: true};
		case REQUEST_JOB_SUCCESS:
			return {
				loading:false,
				jobs: action.payload,
				next: action.next,
				count: action.count,
				pageNum: action.pageNUm
		
			};
		case REQUEST_JOB_FAILED: {
			return {loading: false, error: action.payload}
		}
		default:
			return state
	}
}; 

export default jobsReducer;