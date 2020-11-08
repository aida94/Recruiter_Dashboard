import React from 'react'

import { Candidate } from './../../models/candidate'

interface OwnProps {
  data: Candidate
}

export const Item: React.FC<OwnProps> = ({ data }) => {
  console.log(data)

  return (
    <div className="card m-3">
      <div className="card-header">{data.createdAt}</div>
      <div className="card-body">
        <h5 className="card-title">{data.fullName}</h5>
        <p className="card-text">dumy text</p>
      </div>
    </div>
  )
}
