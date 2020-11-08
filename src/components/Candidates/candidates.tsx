import React, { useState, useEffect } from 'react'

import { Candidate } from './../../models/candidate'
import { getCandidates } from './../../services/apiService'
import { Item } from './../Item/item'
import { Pagination } from './../Pagination/pagination'

interface OwnProps {
  tab: string
}

export const Candidates: React.FC<OwnProps> = ({ tab }) => {
  const [candidates, setCandidates] = useState<Candidate[]>()

  useEffect(() => {
    getCandidates()
      .then((data) => {
        if (tab === 'qualified') {
          setCandidates(data.items.filter((c) => c.qualified))
        } else if (tab === 'unqualified') {
          setCandidates(data.items.filter((c) => !c.qualified))
        } else {
          setCandidates(data.items)
        }
      })
      .catch((err) => console.log(err))
  }, [tab])

  return (
    <div>
      {candidates?.map((item, index) => (
        <div key={index}>
          <Item data={item} />
        </div>
      ))}

      {candidates && candidates.length > 1 ? <Pagination /> : null}
    </div>
  )
}
