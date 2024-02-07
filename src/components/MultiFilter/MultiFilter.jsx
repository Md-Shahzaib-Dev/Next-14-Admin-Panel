"use client";
import React, { useState } from 'react';

const MultiFilter = ({ items, onFilter }) => {
    const [filters, setFilters] = useState({
        dateRange: { startDate: null, endDate: null },
        name: '',
        email: '',
        sortBy: 'A-Z',
        gender: '',
        role: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        onFilter(filters);
    };

    return (
        <div>
            <h2>Custom Filters</h2>
            <label>
                Date Range:
                <input
                    type="date"
                    name="startDate"
                    value={filters.dateRange.startDate}
                    onChange={handleFilterChange}
                />
                <input
                    type="date"
                    name="endDate"
                    value={filters.dateRange.endDate}
                    onChange={handleFilterChange}
                />
            </label>
            <br />
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={filters.name}
                    onChange={handleFilterChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={filters.email}
                    onChange={handleFilterChange}
                />
            </label>
            <br />
            <label>
                Sort By:
                <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
                    <option value="A-Z">A to Z</option>
                    <option value="Z-A">Z to A</option>
                </select>
            </label>
            <br />
            <label>
                Gender:
                <select name="gender" value={filters.gender} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <br />
            <label>
                Role:
                <input
                    type="text"
                    name="role"
                    value={filters.role}
                    onChange={handleFilterChange}
                />
            </label>
            <br />
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default MultiFilter;
