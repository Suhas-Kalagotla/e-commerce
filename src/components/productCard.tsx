interface Product {
    id: string ; 
    name :string; 
    description :string;
    price:number; 
    imageUrl: string? 
}

interface ProductCardProps{
    product :Product; 
}

export default function ProductCard:React.FC<ProductCardProps>({product}){
    return(
       <div> {product.id} </div> 
    ); 
}
