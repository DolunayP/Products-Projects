import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Products from './Products'
import Loading from './Loading'

function App() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const handleDelete = (id) => {
    const afterDeleted = products.filter((product) => product.id !== id)
    setProducts(afterDeleted);
  }

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get("http://localhost:3000/products")
      setProducts(response.data);
      setLoading(false)

    } catch (error) {
      setLoading(false)

    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      {loading ? (<Loading />) : (<>
        {products.length === 0 ? (<div className='reflesh'> <h2>Tüm Ürünleri Hazırladınız, Yeni Siparişler Bekleniyor...</h2>
          <button className='btn' onClick={fetchProducts}>Hazırlananları Tekrar Göster</button>
        </div>) :
          (<Products products={products} deleteCard={handleDelete} />)}</>)

      }

    </div >
  )
}

export default App
