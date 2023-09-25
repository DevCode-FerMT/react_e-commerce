import { products as initialProducts } from './mocks/products.json'
import { Prdocuts } from "./components/Products"
import { useState } from 'react'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'

function App() {
  const { filters, filterProducts, setFilters } = useFilters()
  const [products] = useState(initialProducts)
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Prdocuts products={filteredProducts} />
      {
        IS_DEVELOPMENT && <Footer filters={filters} />
      }
    </>
  )
}

export default App
