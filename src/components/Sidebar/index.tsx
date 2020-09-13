import React, { useEffect } from 'react'

const Sidebar: React.FC = () => {

  useEffect(() => {

  }, [])
  return (
    <aside
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderStyle: 'solid',
        height: '100%',
        padding: 20,
      }}
    >
      <h1>Vídeos para assistir</h1>
    </aside>
  )
}

export default Sidebar
