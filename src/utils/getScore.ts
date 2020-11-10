import { CandidateInterface } from './../models/interfaces'

export const getScore = (
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
