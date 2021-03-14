import '../../assets/styles/orders/orders.css'

function ProductCollections(){
  return(
    <>
      <div className="container-orders">
        <h1>Product Collections</h1>
        <hr></hr>
        <table className="table-orders">
          <tr>
            <th>Orders</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>Shirt</td>
            <td>Rp 100.000</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Pants</td>
            <td>Rp 100.000</td>
            <td>50</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default ProductCollections