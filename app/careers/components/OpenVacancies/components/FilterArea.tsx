'use client'
import React from 'react'

type FilterAreaProps = {
  availableFilters: string[]
  selectedFilters: string[]
  onFilterChange: (discipline: string) => void
  onAllChange: (checked: boolean) => void
}

const FilterArea: React.FC<FilterAreaProps> = ({
  availableFilters,
  selectedFilters,
  onFilterChange,
  onAllChange,
}) => {
  return (
    <div className="p-4 rounded-lg bg-white/30 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-semibold mb-4 text-white">Filter by Discipline</h3>
      <ul className="space-y-2">
        {/* "All" Option */}
        <li>
          <label className="flex items-center cursor-pointer text-white">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.length === 0}
              onChange={(e) => onAllChange(e.target.checked)}
            />
            All
          </label>
        </li>
        {availableFilters.map((discipline, index) => (
          <li key={index}>
            <label className="flex items-center cursor-pointer text-white">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedFilters.includes(discipline)}
                onChange={() => onFilterChange(discipline)}
              />
              {discipline}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterArea
