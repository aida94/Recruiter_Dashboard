import axios from 'axios'

import { CandidatesData } from './../models/candidate'

/**
 * Get Candidates
 * @param qualified boolean
 * @param page boolean
 * @returns {PromiseCandidatesData>}
 */
export const getCandidates = async (
  qualified?: boolean,
  page?: number
): Promise<CandidatesData> => {
  const { data } = await axios.get(
    'https://5f98ad0a50d84900163b7c41.mockapi.io/api/candidates',
    {
      params: {
        qualified,
        page: 1,
        limit: 10,
      },
    }
  )
  return data as CandidatesData
}
