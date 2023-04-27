import React, { useEffect, useState } from 'react'

const test1 = () => {
    const [worker, setWorker] = useState("initial state");
    
    useEffect(() => {
      console.log(worker);
      setWorker("state changed")
      console.log(worker);
    }, [])
    

  return (
  <>
        <div>halaman test1</div>
        <div>{worker}</div>
  </>
  )
}

export default test1