import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { CandidateInterface } from './../../models/interfaces'
import { getScore } from './../../utils/getScore'
import avatar from './avatar.png'

import './item.css'

interface OwnProps {
  data: CandidateInterface
}

export const Item: React.FC<OwnProps> = ({ data }) => {
  const formatDate = new Date(data.createdAt).toDateString()

  return (
    <div className="card my-4">
      <div className="card-header text-muted">
        Applied on
        <span className="mx-1 font-italic font-weight-bold">{formatDate}</span>
        for
        <span className="mx-1 font-weight-bold">{data.jobTitle}</span>
        in
        <span className="mx-1 font-weight-bold">{data.jobLocation}</span>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-5 d-flex mb-3">
            <img src={data.avatar || avatar} alt="avatar" className="img" />
            <div className="ml-3">
              <h5 className="card-title">{data.fullName}</h5>
              <p className="card-text">{data.country}</p>
            </div>
          </div>

          <div className="col-7 col-md-3 d-flex my-4 my-md-0">
            <div className="row">
              <div className="col-5">
                <CircularProgressbar
                  value={getScore(data).score}
                  text={`${getScore(data).score}%`}
                  className="progressBar"
                />
              </div>

              <div className="col-7 p-2">
                <p className="card-text">
                  Aplication Score
                  <br />
                  <span className="card-text text-muted">
                    <b>{getScore(data).type}</b>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-5 col-md-4 d-flex justify-content-end my-4 my-md-0">
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
