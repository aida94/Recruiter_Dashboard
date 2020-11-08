import React from 'react'

interface OwnProps {
  tab: string
}

export const Candidates: React.FC<OwnProps> = ({ tab }) => {
  console.log(1)

  return <div>Candidates {tab}</div>
}
