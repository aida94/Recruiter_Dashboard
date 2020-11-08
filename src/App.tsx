import React, { useState, useEffect } from 'react'

import { getCandidates } from './services/apiService'

const App = () => {
  console.log(getCandidates(false))

  return <div />
}

export default App
