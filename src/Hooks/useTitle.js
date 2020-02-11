import {useEffect} from "react";
import {getPrice} from "../FoodDialog/FoodDialog";

export function useTitle({openFood, orders}) {
    const total = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    useEffect(() => {
        if (openFood) {
            document.title = openFood.name;
        } else {
            document.title =
                orders.length === 0
                    ? `Закажи еду!`
                    : `Заказ на ${total} cомони`;
        }
    });
}
