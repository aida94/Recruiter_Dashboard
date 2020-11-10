import React, { useState, useEffect } from 'react'

import { CandidateInterface } from './../../models/interfaces'
import { getCandidates } from './../../services/apiService'
import { Item } from './../Item/item'
import { Pagination } from './../Pagination/pagination'

interface OwnProps {
  candidates: CandidateInterface[]
  total: number
  page: number
  setPage: (nr: number) => void
}

export const Candidates: React.FC<OwnProps> = ({
  candidates,
  total,
  page,
  setPage,
}) => (
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
