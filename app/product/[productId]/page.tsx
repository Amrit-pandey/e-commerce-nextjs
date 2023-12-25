import Container from "@/components/Container"
import ProductDetails from "@/components/products/ProductDetails"
import { product } from "@/utils/product"

interface IParams {
    productId?:string
}
const ProductPage = ({params}: {params: IParams}) => {
    console.log('params', params)
  return (
    <div className="p-8">
        <Container>
            <ProductDetails product={product}/>
        </Container>
    </div>
  )
}

export default ProductPage