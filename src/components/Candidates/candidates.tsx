import React, { useState, useEffect } from 'react'

import { CandidateInterface } from './../../models/interfaces'
import { getCandidates } from './../../services/apiService'
import { Item } from './../Item/item'

interface OwnProps {
  candidates: CandidateInterface[]
}

export const Candidates: React.FC<OwnProps> = ({ candidates }) => (
  <div>
    {candidates?.map((item, index) => (
      <div key={index}>
        <Item data={item} />
      </div>
    ))}
  </div>
)
