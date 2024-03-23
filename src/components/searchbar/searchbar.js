import React from 'react'

export default function searchbar() {
  return (
    <div className="main">
    <div className="search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
      />
    </div>
  </div>
  )
}

