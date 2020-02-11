import React from "react";
import styled from "styled-components";
import {
    DialogContent,
    DialogFooter,
    ConfirmButton
} from "../FoodDialog/FoodDialog";
import {formatPrice} from "../Data/FoodData";
import {getPrice} from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({editable}) =>
    editable
        ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
        : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 50px 120px 60px 20px;
  justify-content: space-between;
  font-size: 15px;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export function Order({orders, setOrders, setOpenFood}) {
    const total = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    return (
        <OrderStyled>
            {orders.length === 0 ? (
                <OrderContent>Вы ничего не выбрали.</OrderContent>
            ) : (
                <OrderContent>
                    {" "}
                    <OrderContainer> Ваш заказ: </OrderContainer>{" "}
                    {orders.map((order, index) => (
                        <OrderContainer key={index} editable>
                            <OrderItem
                                onClick={() => {
                                    setOpenFood({...order, index});
                                }}
                            >
                                <div>{order.quantity} шт.</div>
                                <div>{order.name}</div>
                                <div>{formatPrice(getPrice(order))}</div>
                                <div
                                    style={{cursor: "pointer"}}
                                    onClick={e => {
                                        e.stopPropagation();
                                        deleteItem(index);
                                    }}
                                >
                                    ❌
                                </div>
                            </OrderItem>
                            <DetailItem>
                                {order.toppings
                                    .filter(t => t.checked)
                                    .map(topping => topping.name)
                                    .join(", ")}
                            </DetailItem>
                            {order.choice && <DetailItem>{order.choice}</DetailItem>}
                        </OrderContainer>
                    ))}
                    <OrderContainer>
                        <OrderItem>
                            <div/>
                            <div>Всего</div>
                            <div>{formatPrice(total)}</div>
                        </OrderItem>
                    </OrderContainer>
                </OrderContent>
            )}
            <DialogFooter>
                <ConfirmButton>Заказать</ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    );
}
