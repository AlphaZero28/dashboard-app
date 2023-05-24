import React, { useState } from 'react'

function DateFilter({ column }) {
  const { filterValue = [], setFilter } = column

  const handleStartDate = (e) => {
    console.log(e.target.value);
    console.log(typeof e.target.value);
    setFilter[0](e.target.value)
  }

  const handleEndDate = e => {
    setFilter[1](e.target.value)
  }

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    setFilter((prevFilterValue = []) => {
      const newFilterValue = [...prevFilterValue];
      newFilterValue[index] = value;
      return newFilterValue;
    });
  };

  return (
    <span>
      <input
        type="date"
        value={filterValue[0] || ''}
        // onChange={handleStartDate}
        onChange={(e) => handleInputChange(0, e)}
      />
      {filterValue[0]} {filterValue[1]}
      to
      <input
        type="date"
        value={filterValue[1] || ''}
        // onChange={handleEndDate}
        onChange={(e) => handleInputChange(1, e)}
      />

    </span>
  )
}

export default DateFilter