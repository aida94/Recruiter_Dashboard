import axios from 'axios'

import { CandidatesData } from './../models/candidate'

/**
 * Get Candidates
 * @param qualified boolean
 * @param page boolean
 * @returns {PromiseCandidatesData>}
 */
export const getCandidates = async (
  page: number,
  qualified?: boolean
): Promise<CandidatesData> => {
  const { data } = await axios.get(
    'https://5f98ad0a50d84900163b7c41.mockapi.io/api/candidates',
    {
      params: {
        qualified,
        page,
        limit: 3,
      },
    }
  )
  return data as CandidatesData
}
