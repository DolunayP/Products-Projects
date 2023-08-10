import Product from './Product'

function Products({ products, deleteCard }) {
    return (<div>
        <h1 className='header'>
            Ürünler
        </h1>
        <div className='card-box'>
            {
                products.map((product) => {
                    return (<Product deleteCard={deleteCard} key={product.id} {...product} />)
                })
            }
        </div>
    </div>);
}

export default Products;