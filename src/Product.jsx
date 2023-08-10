function Product({ id, title, price, content, deleteCard }) {

    return (<div>
        <div className="card">
            <div className="card-content">
                <h2 className="card-header">
                    {title}
                </h2>
                <p className="content">
                    {content}
                </p>
                <div className="price">
                    Fiyat: {price}TL
                </div>
                <button className="btn" onClick={() => deleteCard(id)}>
                    Hazırlandı
                </button>
            </div>
        </div>
    </div>);
}

export default Product;