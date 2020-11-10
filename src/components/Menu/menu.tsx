import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { Candidates } from '../Candidates/candidates'

import { CandidateInterface } from './../../models/interfaces'
import { Qualified } from './../../models/enum'
import { getCandidates } from './../../services/apiService'

import './menu.css'

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(Qualified.Yes)
  const [candidates, setCandidates] = useState<CandidateInterface[]>([])
  const [total, setTotal] = useState<number>(0)
  const [currentpage, setCurrentPage] = useState<number>(1)

  const [candidateNr, setCandidateNr] = useState({
    inReview: 0,
    qualified: 0,
    unqualified: 0,
  })

  useEffect(() => {
    getCandidates(currentpage).then((data) => {
      const inReviewCan = data.items.filter(
        (c) => c.qualified === Qualified.InReview
      )
      const qualifiedCan = data.items.filter(
        (c) => c.qualified === Qualified.Yes
      )
      const unqualifiedCan = data.items.filter(
        (c) => c.qualified === Qualified.No
      )

      setCandidateNr({
        inReview: inReviewCan.length,
        qualified: qualifiedCan.length,
        unqualified: unqualifiedCan.length,
      })

      if (activeTab === Qualified.Yes) {
        setCandidates(qualifiedCan)
        setTotal(qualifiedCan.length)
      } else if (activeTab === Qualified.No) {
        setCandidates(unqualifiedCan)
        setTotal(unqualifiedCan.length)
      } else if (activeTab === Qualified.InReview) {
        setCandidates(inReviewCan)
        setTotal(inReviewCan.length)
      }
    })
  }, [activeTab, currentpage])

  return (
    <div>
      <div className="my-5 d-flex justify-content-start">
        <div
          className={classNames(
            'tabItem',
            activeTab === Qualified.InReview ? 'active' : ''
          )}
          onClick={() => setActiveTab(Qualified.InReview)}
        >
          <span
            className={classNames(
              'badge badge-pill mr-1',
              activeTab === Qualified.InReview ? 'badge-info' : 'badge-light'
            )}
          >
            {candidateNr.inReview}
          </span>
          To review
        </div>

        <div
          className={classNames(
            'tabItem',
            activeTab === Qualified.Yes ? 'active' : ''
          )}
          onClick={() => setActiveTab(Qualified.Yes)}
        >
          <span
            className={classNames(
              'badge badge-pill mr-1',
              activeTab === Qualified.Yes ? 'badge-info' : 'badge-light'
            )}
          >
            {candidateNr.qualified}
          </span>
          Qualified
        </div>

        <div
          className={classNames(
            'tabItem',
            activeTab === Qualified.No ? 'active' : ''
          )}
          onClick={() => setActiveTab(Qualified.No)}
        >
          <span
            className={classNames(
              'badge badge-pill mr-1',
              activeTab === Qualified.No ? 'badge-info' : 'badge-light'
            )}
          >
            {candidateNr.unqualified}
          </span>
          Unqualified
        </div>
      </div>

      <Candidates
        candidates={candidates}
        total={total}
        page={currentpage}
        setPage={setCurrentPage}
      />
    </div>
  )
}
