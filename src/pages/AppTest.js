import React, { useEffect, useState } from "react";
import "../App.css";
import ReactPaginate from "react-paginate";

const PER_PAGE = 6;

function AppTest() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
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
  // console.log("currentPageData", currentPageData);

  //total pages here = 50
  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
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
  );
}
export default AppTest;
