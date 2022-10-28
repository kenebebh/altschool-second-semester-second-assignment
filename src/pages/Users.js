import React, { useEffect, useState } from "react";
import "../App.css";
import ReactPaginate from "react-paginate";

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
    fetch("https://randomuser.me/api/?results=50")
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
        <div className="cards">
          <div className="card">
            <h2 className="card-name">{res.name.first}</h2>
            <img
              className="card-image"
              key={index}
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
      <h1>This is my users page</h1>
      <>
        <div className="">pagination</div>

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
      </>
    </div>
  );
}
export default Users;
