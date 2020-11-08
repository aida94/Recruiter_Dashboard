import React, { useState, useEffect } from 'react'

import { Candidates } from './../CandidatesList/candidates'

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('nav-review-tab')

  return (
    <div className="conainer mt-5">
      <nav className="mb-5">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className={`nav-item nav-link ${
              activeTab === 'nav-review-tab' ? 'active' : ''
            }`}
            id="nav-review-tab"
            data-toggle="tab"
            href="#nav-review"
            role="tab"
            aria-controls="nav-review"
            aria-selected="true"
            onClick={() => setActiveTab('nav-review-tab')}
          >
            To review
          </a>
          <a
            className={`nav-item nav-link ${
              activeTab === 'nav-qualified-tab' ? 'active' : ''
            }`}
            id="nav-qualified-tab"
            data-toggle="tab"
            href="#nav-qualified"
            role="tab"
            aria-controls="nav-qualified"
            aria-selected="false"
            onClick={() => setActiveTab('nav-qualified-tab')}
          >
            Qualified
          </a>
          <a
            className={`nav-item nav-link ${
              activeTab === 'nav-unqualified-tab' ? 'active' : ''
            }`}
            id="nav-unqualified-tab"
            data-toggle="tab"
            href="#nav-unqualified"
            role="tab"
            aria-controls="nav-unqualified"
            aria-selected="false"
            onClick={() => setActiveTab('nav-unqualified-tab')}
          >
            Unqualified
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade ${
            activeTab === 'nav-review-tab' ? ' show active' : ''
          }`}
          id="nav-review"
          role="tabpanel"
          aria-labelledby="nav-review-tab"
        >
          <Candidates tab="review" />
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === 'nav-qualified-tab' ? 'show active' : ''
          }`}
          id="nav-qualified"
          role="tabpanel"
          aria-labelledby="nav-qualified-tab"
        >
          <Candidates tab="qualified" />
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === 'nav-unqualified-tab' ? 'show active' : ''
          }`}
          id="nav-unqualified"
          role="tabpanel"
          aria-labelledby="nav-unqualified-tab"
        >
          <Candidates tab="unqualified" />
        </div>
      </div>
    </div>
  )
}
