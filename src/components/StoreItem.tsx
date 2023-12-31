import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number
    name: string
    price: number
    image: string
}

export function StoreItem({ id, name, price, image }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={image}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-3">{name}</span>
                    {/* <span className="fs-2">{id}</span> */}
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100 bg-primary" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button className="bg-primary" onClick={() => increaseCartQuantity(id)}>+</Button>
                            <div className="" >
                                <span className="fs-3 ">{quantity}</span> In Cart
                            </div>
                            <Button className="bg-primary" onClick={() => decreaseCartQuantity(id)}>-</Button>
                        </div>
                        <Button className="bg-danger" variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove to Cart</Button>
                    </div>}
                </div>
            </Card.Body>
        </Card>
    )
}

