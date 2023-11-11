import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItem from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./index";
import {AiFillCloseCircle} from 'react-icons/ai'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  // const {isOpen closeCart} =useShoppingCart()
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header>
        <Offcanvas.Title >Cart</Offcanvas.Title>
        <Button onClick={closeCart} className="hover:text-white" ><AiFillCloseCircle size={30} className="text-blue-900" /></Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="bg-blue-100">
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-9 w-42 bg-blue-300 p-4 rounded-xl">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItem.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}