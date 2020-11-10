import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { CandidateInterface } from './../../models/interfaces'
import avatar from './avatar.png'

interface OwnProps {
  data: CandidateInterface
}

const getScore = (
  candidate: CandidateInterface
): { type: string; score: number } => {
  let type = 'Good'
  let score = 0

  if (candidate.fullName) {
    score += 10
  }

  if (candidate.email) {
    score += 10
  }
  if (candidate.country) {
    score += 10
  }

  if (candidate.phone) {
    score += 20
  }

  if (candidate.avatar) {
    score += 50
  }

  if (score < 30) {
    type = 'Good'
  }
  if (score > 30 && score < 70) {
    type = 'Could be better'
  }

  if (score > 70) {
    type = 'Excellent'
  }

  return { type, score }
}

export const Item: React.FC<OwnProps> = ({ data }) => {
  const formatDate = new Date(data.createdAt).toDateString()

  return (
    <div className="card m-3">
      <div className="card-header">
        Applied on {formatDate}
        for {data.jobTitle}
        in {data.jobLocation}
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-5 d-flex">
            <img src={data.avatar || avatar} alt="avatar" className="img" />
            <div className="ml-3">
              <h5 className="card-title">{data.fullName}</h5>
              <p className="card-text">{data.country}</p>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <CircularProgressbar
              value={getScore(data).score}
              text={`${getScore(data).score}%`}
              className="progressBar"
            />
            <div className="ml-4">
              <p className="card-text scoreText">Aplication Score</p>
              <p className="card-text scoreText">
                <b>{getScore(data).type}</b>
              </p>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div>
              {data.qualified ? (
                <button type="button" className="btn btn-outline-success m-1">
                  Qualified
                </button>
              ) : (
                <button type="button" className="btn btn-outline-danger m-1">
                  Not Qualified
                </button>
              )}

              <button type="button" className="btn btn-outline-secondary m-1">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
