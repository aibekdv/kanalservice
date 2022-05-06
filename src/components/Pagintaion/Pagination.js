import React from 'react'

const Pagination = ({ jump, maxPage, prev, next, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className="page-item " onClick={prev}>
            <span className="page-link pe-pointer" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
          {
            pageNumbers.map(el => (
              <li
                className={`page-item ${currentPage === el && 'active'}`}
                onClick={() => jump(el)}
                key={el}
              >
                <span className="page-link pe-pointer" >{el}</span>
              </li>
            ))
          }
          <li className="page-item" onClick={next}>
            <span className="page-link pe-pointer" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination