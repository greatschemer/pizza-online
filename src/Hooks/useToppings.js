import {useState} from "react";

export function useToppings(defaultTopping) {
    const [toppings, setToppings] = useState(
        defaultTopping || getDefaultToppings()
    );

    function checkTopping(index) {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    }

    return {
        checkTopping,
        toppings
    };
}

const toppingsList = [
    "Больше сыра",
    "Пепперони",
    "Колбаса",
    "Лук",
    "Перец",
    "Ананас",
    "Ветчина",
    "Шпинат",
    "Артишоки",
    "Грибы",
    "Анчоусы"
];

function getDefaultToppings() {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));
}
