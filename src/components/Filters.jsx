import { useState } from 'react'
import './Filters.css'
export function Filters({ onChange }) {

    const [priceFilter, setPriceFilter] = useState(0)

    const handlePriceFilter = (event) => {
        setPriceFilter(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleCategoryFilter = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Min price</label>
                <input type="range" id="price" min="0" max="1000" onChange={handlePriceFilter} />
                <span>${priceFilter}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={handleCategoryFilter}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}