export interface Candidate {
  id: number
  avatar: string
  createdAt: Date
  fullName: string
  qualified: string
  phone: string
  email: string
  jobTitle: string
  country: string
  jobLocation: string
}

export interface CandidatesData {
  count: number
  items: Candidate[]
  total: number
}
