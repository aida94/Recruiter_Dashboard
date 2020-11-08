import axios from 'axios'

import { Candidate } from './../models/candidate'

/**
 * Get Candidates
 * @param qualified boolean
 * @returns {Promise<Candidate[]>}
 */
export const getCandidates = async (
  qualified: boolean
): Promise<Candidate[]> => {
  const { data } = await axios.get(
    'https://5f98ad0a50d84900163b7c41.mockapi.io/api/candidates',
    {
      params: {
        qualified,
      },
    }
  )
  return data as Candidate[]
}
