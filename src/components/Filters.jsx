import { useState } from 'react'
import './Filters.css'
import { useId } from 'react'

export function Filters({ onChange }) {

    const [priceFilter, setPriceFilter] = useState(0)
    const priceFilterId = useId()
    const categoryFilterId = useId()

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
                <label htmlFor={priceFilterId}>Min price</label>
                <input type="range" id={priceFilterId} min="0" max="1000" onChange={handlePriceFilter} />
                <span>${priceFilter}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" id={categoryFilterId} onChange={handleCategoryFilter}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}