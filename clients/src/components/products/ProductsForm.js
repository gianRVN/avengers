function ProductsForm(){
  return(
    <>
     <form>
      <input type="text" id="name" name="name" placeholder="name"></input><br></br>
      <input type="text" id="price" name="price" placeholder="price"></input><br></br>
      <input type="text" id="quantity" name="quantity" placeholder="quantity"></input><br></br>
      <input type="submit" value="Submit" onClick={(e) => {e.preventDefault()}}></input>
    </form> 
    </>
  )
}

export default ProductsForm