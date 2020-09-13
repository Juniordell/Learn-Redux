import React, { useEffect, useState } from 'react';

import api from '../../api'

const Dogs: React.FC = () => {
    const [ randomDog, setRandomDog ] = useState({})

    useEffect(() => {
        setRandomDog(api.get('/image/random'))
    }, [])

  return (
      <div>
          { randomDog }
      </div>
  );
}

export default Dogs;