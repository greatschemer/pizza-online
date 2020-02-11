import React from 'react';
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
  return openOrderDialog ? <>
    <DialogShadow/>
    <Dialog>
      <DialogContent>
        <h2>🚚 Заказ уже в пути! </h2>
        <p>
          Ваш заказ принят и скоро будет доставлен.
        </p>
      </DialogContent>
      <DialogFooter>
        <ConfirmButton onClick={() => {
          setOrders([]);
          setOpenOrderDialog();
        }}>
          OK
        </ConfirmButton>
      </DialogFooter>
    </Dialog>
  </> : <div/>
}
