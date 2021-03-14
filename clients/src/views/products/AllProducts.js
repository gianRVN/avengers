import '../../assets/styles/products/allProducts.css'
import AllProductsAdd from '../../components/products/AllProductsAdd'
import ProductsForm from '../../components/products/ProductsForm'
import { useSelector, useDispatch } from 'react-redux'
import { changeAllProductsAdd, closeAllProductsAdd } from '../../store/actions/products/allProductsAdd'
import { changeAllProductsImport, closeAllProductsImport } from '../../store/actions/products/allProductsImport'

function AllProducts(){
  const dispatch = useDispatch()
  const { isShowedAllProductAdd, isAllowedAllProductAdd } = useSelector(state => state.allProductsAdd)
  const { isShowedAllProductImport, isAllowedAllProductImport } = useSelector(state => state.allProductsImport)
  const addProduct = () => {
    console.log('masuk')
    dispatch(closeAllProductsImport())
    dispatch(changeAllProductsAdd())
  }
  const importProduct = () => {
    dispatch(closeAllProductsAdd())
    dispatch(changeAllProductsImport())
  }
  
  console.log(isShowedAllProductAdd, "pppppp")
  return(
    <>
      <div className="all-products-container">
        <div className="all-products-flex">
          <span onClick={() => addProduct()} className={isShowedAllProductAdd ? "all-products-active" : "all-products-menu"}>Add Product</span>
          <span onClick={() =>importProduct()} className={isShowedAllProductImport ? "all-products-active" : "all-products-menu"}>Import Product</span>
        </div>
          {isShowedAllProductAdd && 
            <div> 
              {isAllowedAllProductAdd && 
                <div>          
                  <h1>Add Product</h1>
                  <ProductsForm/>
                </div>
              }
            </div>  
          }
          {isShowedAllProductImport && 
            <div>           
              {isAllowedAllProductImport &&
              <div> 
                <h1>Import Product</h1>
                <ProductsForm/>
              </div>  
              }
              {!isAllowedAllProductImport && 
                <h3>You need to be a pro member to import product</h3>
              }
            </div>
          }
          <AllProductsAdd/>
      </div>
    </>
  )
}

export default AllProducts