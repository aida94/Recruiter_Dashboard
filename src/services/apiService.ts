import axios from 'axios'

import { CandidatesInterface } from './../models/interfaces'
import { candidates } from './mockData'

/**
 * Get Candidates
 * @param qualified boolean
 * @param page boolean
 * @returns {PromiseCandidatesInterface>}
 */
export const getCandidates = async (
  page: number,
  qualified?: string
): Promise<CandidatesInterface> => {
  const { data } = await axios.get(
    'https://5f98ad0a50d84900163b7c41.mockapi.io/api/candidates',
    {
      params: {
        qualified,
        page,
        // limit: 3,
      },
    }
  )
  return data as CandidatesInterface

  // return candidates as CandidatesInterface
}
