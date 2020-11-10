import { Qualified } from './enum'

export interface CandidateInterface {
  id: number
  avatar?: string
  createdAt: string
  fullName?: string
  qualified: Qualified.No | Qualified.Yes | Qualified.InReview
  phone?: string
  email?: string
  jobTitle: string
  country?: string
  jobLocation: string
}

export interface CandidatesInterface {
  count: number
  items: CandidateInterface[]
  total: number
}
