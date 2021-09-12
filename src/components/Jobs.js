import React from 'react';
import styled from 'styled-components';


function Jobs(props) {
	const { job } = props
	return (
		<JobBox key={job.id}>
			<Logo>
				<LogoImg src='/images/jobsdb_log.png'></LogoImg>
			</Logo>
			<Content>
				<JobTitle>
					<span>{job.job_title}</span>
				</JobTitle>
				<JobDescription>
					<span>Description:</span>
					{job.job_description.map(job_description => {
						return <DescriptionList>{job_description}</DescriptionList>
					})}
				</JobDescription>
				<Salary>
					<span className="salary-text">Salary:<br/></span>
					<span>None-None</span>
				</Salary>
				<MoreDetails>
					<a href={job.page_url}><button>More Details</button></a>
				</MoreDetails>
			</Content>
		</JobBox>
	);
}

const JobBox = styled.div`
	height: 500px;
	width: 250px;
	border: .1rem solid silver;
	background-color: #f8f8f8;
	border-radius: .5rem;
	margin: 15px 15px;
`


const Logo = styled.div`
	padding: 2px;
	height: 70px;
	width: 100%;
`

const LogoImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: .5rem;
`

const Content = styled.div``

const JobTitle = styled.div`
	display: flex;
	padding-top: 2%;
	justify-content: center;
	height: 60px;

	span {
		font-weight: bold;
		font-size: 15px;
		padding: 5px;
	}
`

const JobDescription = styled.div`
	padding-top: 10%;
	padding-left: 2%;
	height: 270px;

	span {
		font-weight: bold;
		font-size: 14px;
	}
`

const DescriptionList = styled.li`
	padding-top: 3%;
	font-size: 14px;
`

const Salary = styled.div`
	padding-left: 2%;
	height: 50px;
	line-height: 25px;
	font-size: 14px;
	
	
	.salary-text {
		font-weight: bold;
		font-size: 14px;
	}
`

const MoreDetails = styled.div`
	padding-top: 10px;
	padding-bottom: 2.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;

	a {
		width: 100%;
		height: 100%;
	}

	button{
		background-color: #203040;
		width: 100%;
		height: 100%;
		border-radius: .5rem;
		color: #fefbef;
		cursor: pointer;
	}
`

export default Jobs;
