import React, { useState, useEffect } from 'react'

import { CandidateInterface } from './../../models/interfaces'
import { getCandidates } from './../../services/apiService'
import { Item } from './../Item/item'
import { Pagination } from './../Pagination/pagination'

interface OwnProps {
  candidates: CandidateInterface[]
}

export const Candidates: React.FC<OwnProps> = ({ candidates }) => {
  // const [candidates, setCandidates] = useState<Candidate[]>()
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)

  // useEffect(() => {
  //   getCandidates(page).then((data) => {
  //     if (tabName === 'qualified') {
  //       setCandidates(data.items.filter((c) => c.qualified))
  //     } else if (tabName === 'unqualified') {
  //       setCandidates(data.items.filter((c) => !c.qualified))
  //     } else {
  //       setCandidates(data.items)
  //     }
  //     setTotal(data.total)
  //   })
  // }, [tabName, page])

  return (
    <div>
      {candidates?.map((item, index) => (
        <div key={index}>
          <Item data={item} />
        </div>
      ))}

      {candidates && candidates.length > 0 ? (
        <Pagination total={total} page={page} setPage={setPage} />
      ) : null}
    </div>
  )
}
