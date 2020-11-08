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
        setCandidates(data)
      })
      .catch((err) => console.log(err))
      .finally(() => console.log('finish'))
  }, [])

  console.log(candidates)

  return (
    <div>
      {candidates?.map((item, index) => (
        <div key={index}>
          <Item data={item} />
        </div>
      ))}

      <Pagination />
    </div>
  )
}
