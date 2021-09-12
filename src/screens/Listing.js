import React, {useEffect} from "react";
import styled from 'styled-components';
import { listJobs } from "../actions/jobActions";
import Jobs from "../components/Jobs";
import { useSelector, useDispatch} from "react-redux";
import ReactPaginate from "react-paginate";


function Listing() {
	const getJobs = state => state.jobs
	const jobsSelector = useSelector(getJobs)
	const dispatch = useDispatch()
	const {jobs, loading, error, next, count} = jobsSelector  

	useEffect(() => {
		dispatch(listJobs())
	}, [])

	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		dispatch(listJobs(selectedPage))
	}

	return (
		<Main>
			<JobsWraper>
				{
					loading ? <div></div> :
					jobs.map((job) => {
						console.log(job)
						return (<Jobs key={job.id} job={job}></Jobs>)
					})
				}
			</JobsWraper>
			<PaginationWraper>
			    <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(count/8)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
			</PaginationWraper>
		</Main>
	); 

};


const Main = styled.main`
	display: flex;
	flex-wrap: wrap;
	height: calc(100vh - 80px);
	justify-content: center;
	padding-top: 50px;
	height: 1300px;
`

const JobsWraper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	height: 1000px;
`

const PaginationWraper = styled.div`
	display: flex;
	justify-content: center;
	height: 100px;

	.pagination {
		display: flex;
		list-style: none;
		outline: none;
		justify-content: center;
	}

	.pagination > .active > a{
		background-color: #203040 ;
		border-color: #203040 ;
		color: white;
	}

	.pagination > li > a{
		border: 1px solid #203040 ;
		padding: 5px 10px;
		outline: none;
		cursor: pointer;
	}		

	.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
		background-color: #203040 ;
		border-color: #203040;
		outline: none ;
	}

	.pagination > li > a, .pagination > li > span{
		color: #203040
	}
	
	.pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
		border-radius: unset
	}

`

export default Listing