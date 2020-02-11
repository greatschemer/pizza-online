export function formatPrice(price) {
  return price.toLocaleString("tj-RU", {
    style: "currency",
    currency: "TJS"
  });
}

export const foodItems = [
  {
    name: "Сырная",
    img: "/img/pizza.png",
    section: "Пицца",
    price: 35
  },
  {
    name: "Пеперони",
    img: "/img/pizza2.jpeg",
    section: "Пицца",
    price: 38
  },
  {
    name: "Куринная",
    img: "/img/chicken-pizza.jpeg",
    section: "Пицца",
    price: 35
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Веганская",
    section: "Пицца",
    price: 28
  },
  {
    img: "/img/burger.jpeg",
    name: "Бургер",
    section: "Сэндвичи",
    price: 15
  },
  {
    img: "/img/gyro.jpeg",
    name: "Шаурма",
    section: "Сэндвичи",
    price: 12
  },
  {
    img: "/img/sandwich.jpeg",
    name: "Хот-дог",
    section: "Сэндвичи",
    price: 7
  },
  {
    img: "/img/fries.jpeg",
    name: "Картофель фри",
    section: "Другое",
    price: 5
  },
  {
    price: 5,
    name: "Газировка",
    section: "Напитки",
    choices: ["Кола", "Спрайт", "Фанта"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
