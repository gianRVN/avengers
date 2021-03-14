export const changeAllProductsAdd = () => {
  console.log('masuk action')
  return (
    {
      type: "CHANGE_ALL_PRODUCTS_ADD"
    }
  )
}

export const closeAllProductsAdd = () => {
  return (
    {
      type: "CLOSE_ALL_PRODUCTS_ADD",
    }
  )
}