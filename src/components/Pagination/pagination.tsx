import React from 'react'

interface OwnProps {
  total: number
  page: number
  setPage: (nr: number) => void
}

export const Pagination: React.FC<OwnProps> = ({ total, page, setPage }) => {
  const nrOfPages = Math.ceil(total / 3)
  const items = []

  for (let i = 0; i < nrOfPages; i++) {
    items.push(
      <li
        className="page-item"
        onClick={() => {
          setPage(i + 1)
        }}
      >
        <a className={`page-link ${page === i + 1 ? 'pageActive' : ''}`}>
          {i + 1}
        </a>
      </li>
    )
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">{items}</ul>
    </nav>
  )
}
