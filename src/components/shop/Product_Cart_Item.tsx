import Link from "next/link";
import Image from "next/image";

import RoupaFloar from "@/types/RoupaFloar";
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemQuantity } from "@/store/selectors/cartSelectors";
import { addToCart, removeFromCart, decrementQuantity } from "@/store/slices/cartSlice";

interface ProductCartItemProps {
    item: RoupaFloar;
}

const Product_Cart_Item = ({ item }: ProductCartItemProps) => {
    const quantity = useSelector((state: RootState) => selectCartItemQuantity(state, item));
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(item));
    };

    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity(item));
    };

    return (
        <li className="Carrinho_Item">
            <div className="Carrinho_Item_Image_Container">
                <Image
                    width={240}
                    height={240}
                    className="Carrinho_Item_Image"
                    src={"https:" + item.fields.images[0].fields.file.url}
                    alt="Produto"
                />
            </div>

            <div className="Carrinho_Item_info">
                <h3 className="Carrinho_Item_Title">{item.fields.name}</h3>
                <p className="Carrinho_Item_Price">{"R$ " + item.fields.price + ",00"}</p>
                <Link href={"/loja/produto/" + item.fields.slug} className="Dark_Pill">
                    Ver Detalhes
                </Link>
                <div className="Carrinho_Item_Quantity_Container Dark_Pill">
                    <button className="Btn Round RemoveCartProduct_Btn Carrinho_Item_Btn" onClick={handleRemoveFromCart}>
                        <span className="material-symbols-outlined">cancel</span>
                    </button>
                    <button className="Btn Round Carrinho_Item_Btn" onClick={handleDecrementQuantity}>
                        <span className="material-symbols-outlined">remove</span>
                    </button>
                    <p className="Carrinho_Item_Quantity_Value">{quantity}</p>
                    <button className="Btn Round Carrinho_Item_Btn" onClick={handleAddToCart}>
                        <span className="material-symbols-outlined">add</span>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default Product_Cart_Item;
