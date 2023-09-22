import { Filters } from './Filters.jsx'

export function Header({ changeFilters }) {
    return (
        <header>
            <h1>E-Commerce</h1>
            <Filters onChange={changeFilters} />
        </header>
    )
}