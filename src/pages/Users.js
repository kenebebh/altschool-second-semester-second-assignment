import React, { useEffect, useState } from 'react';
import '../App.css';
import ReactPaginate from 'react-paginate';
import Fallback from './Fallback';
import { ErrorBoundary } from 'react-error-boundary';

const PER_PAGE = 6;
function Users() {
	//set state for users current page
	const [currentPage, setCurrentPage] = useState(0);
	//set state for data pulled in from api - in this case stored in an array
	const [data, setData] = useState([]);

	//cause side effect in this case to fetch data
	useEffect(() => {
		fetchData();
	}, []);

	//grab json formatted object from api
	function fetchData() {
		fetch('https://randomuser.me/api/?results=50')
			.then((res) => res.json())
			.then((data) => {
				setData(data.results);
			});
	}
	// handlepageclick
	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}

	//0,10,20,30...
	const offset = currentPage * PER_PAGE;
	// console.log("offset", offset)

	const currentPageData = data
		.slice(offset, offset + PER_PAGE)
		.map((res, index) => {
			return (
				<div className="cards" key={index}>
					<div className="card">
						<h2 className="card-name">{res.name.first}</h2>
						<img
							className="card-image"
							alt={res.name.first}
							src={res.picture.medium}
						/>
					</div>
				</div>
			);
		});

	//total pages here = 50
	const pageCount = Math.ceil(data.length / PER_PAGE);

	return (
		<div className="Users">
			<ErrorBoundary FallbackComponent={Fallback}>
				<h1>This is my users page</h1>
				{currentPageData}
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					containerClassName="pagination"
					pageLinkClassName="page-num"
					previousLinkClassName="page-num"
					nextLinkClassName="page-num"
					activeLinkClassName="active"
				/>
			</ErrorBoundary>
		</div>
	);
}
export default Users;
