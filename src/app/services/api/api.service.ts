import {Injectable} from '@angular/core';
import {Address} from "../../models/address.model";
import {Restaurant} from "../../models/restaurant.model";
import {Category} from "../../models/category.model";
import {Item} from "../../models/item.model";
import {Order} from "../../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  banners = [
    {banner: 'assets/imgs/burger.jpg'},
    {banner: 'assets/imgs/muesli.jpg'},
    {banner: 'assets/imgs/pancakes.jpg'},
  ];
  restaurants: Restaurant[] = [
    {
      uid: '121d3d',
      cover: 'assets/imgs/roesti.jpg',
      name: 'eCHo',
      short_name: 'echo',
      cuisines: ['Swiss, French, Italian'],
      rating: 4.4,
      delivery_time: 20,
      distance: 1.2,
      price: 22,
    },
    {
      uid: '121c3d',
      cover: 'assets/imgs/vegetarian-food.jpg',
      name: 'Santa Lucia',
      short_name: 'santa lucia',
      cuisines: ['Italian', 'Vegetarian', 'Vegan'],
      rating: 4.3,
      delivery_time: 30,
      distance: 1.5,
      price: 27,
    },
    {
      uid: '121d3e',
      cover: 'assets/imgs/shrimps.jpg',
      name: 'Le Tsé Fung',
      short_name: 'le tsé fung',
      cuisines: ['Asian', 'Seafood', 'Spicy'],
      rating: 4.8,
      delivery_time: 30,
      distance: 3.9,
      price: 28,
    },
  ];

  allRestaurants: Restaurant[] = [
    {
      uid: '121d3d',
      cover: 'assets/imgs/roesti.jpg',
      name: 'eCHo',
      short_name: 'echo',
      cuisines: ['Swiss, French, Italian'],
      rating: 4.4,
      delivery_time: 20,
      price: 22,
    },
    {
      uid: '121c3d',
      cover: 'assets/imgs/vegetarian-food.jpg',
      name: 'Santa Lucia',
      short_name: 'santa lucia',
      cuisines: ['Italian', 'Vegetarian', 'Vegan'],
      rating: 4.3,
      delivery_time: 30,
      price: 27,
    },
    {
      uid: '121d3e',
      cover: 'assets/imgs/shrimps.jpg',
      name: 'Le Tsé Fung',
      short_name: 'le tsé fung',
      cuisines: ['Asian', 'Seafood', 'Spicy'],
      rating: 4.8,
      delivery_time: 30,
      price: 28,
    },
  ];

  categories: Category[] = [
    {
      id: '121d32f3d',
      name: 'Italian',
      uid: '121c3d',
    },
    {
      id: '1232ssda1d3d',
      name: 'Asian',
      uid: '121d3e',
    },
    {
      id: '331321d3d',
      name: 'Swiss',
      uid: '121d3d',
    }
  ];
  restaurants1: Restaurant[] = [
    {
      uid: '121d3d',
      cover: 'assets/imgs/roesti.jpg',
      name: 'eCHo',
      short_name: 'echo',
      cuisines: ['Swiss, French, Italian'],
      address: {
        id: '1dsfsasdd',
        user_id: '1dsfsaassd',
        title: 'Home',
        address: 'Bahnhofstrasse 1',
        city: 'Zurich',
        zip: '8001',
        canton: 'Zurich',
        lat: 47.378177,
        lng: 8.540192,
      },
      rating: 4.4,
      delivery_time: 20,
      price: 22,
    },
    {
      uid: '121c3d',
      cover: 'assets/imgs/vegetarian-food.jpg',
      name: 'Santa Lucia',
      short_name: 'santa lucia',
      cuisines: ['Italian', 'Vegetarian', 'Vegan'],
      address: {
        id: '1dsfsassdd',
        user_id: '1dsfsaassd',
        title: 'Home',
        address: 'Zwickelgasse 4',
        city: 'Zurich',
        zip: '8002',
        canton: 'Zurich',
        lat: 47.3768866,
        lng: 8.541694,
      },
      rating: 4.3,
      delivery_time: 30,
      price: 27,
    },
    {
      uid: '121d3e',
      cover: 'assets/imgs/shrimps.jpg',
      name: 'Le Tsé Fung',
      short_name: 'le tsé fung',
      cuisines: ['Asian', 'Seafood', 'Spicy'],
      address: {
        id: '1dsfsasd',
        user_id: '1dsfsaassd',
        title: 'Home',
        address: 'Rue de la Gare',
        city: 'Lausanne',
        zip: '1000',
        canton: 'Vaud',
        lat: 46.5196535,
        lng: 6.6322734,
      },
      rating: 4.8,
      delivery_time: 30,
      price: 28,
    },
  ];
  allItems: Item[] = [
    {
      category_id: '1232ssda1d3d',
      cover: 'assets/imgs/sushi.jpg',
      description: "lovely small sushi with spicy sauce",
      id: "i1sdsad",
      name: "Sushi",
      price: 22.7,
      rating: 4.5,
      status: true,
      uid: "121d3e",
      variation: false,
      veg: false,
    },
    {
      category_id: '1232ssda1d3d',
      cover: 'assets/imgs/shrimp-soup-bowl.jpg',
      description: "tan binh - vietnamese shrimp soup",
      id: "i1sdsa3d",
      name: "Shrimp Soup",
      price: 27.5,
      rating: 4.2,
      status: true,
      uid: "121d3e",
      variation: false,
      veg: false,
    },
    {
      category_id: '1232ssda1d3d',
      cover: 'assets/imgs/spring-rolls.jpg',
      description: "vegetarian spring rolls with peanut sauce and cucumber",
      id: "i1sdsa343d",
      name: "Spring Rolls",
      price: 16.2,
      rating: 4.7,
      status: true,
      uid: "121d3e",
      variation: false,
      veg: true,
    },
    {
      category_id: '1232ssda1d3d',
      cover: 'assets/imgs/power-veg-bowl.jpg',
      description: "healthy, spicy veg bowl with tofu, avocado, and peanuts",
      id: "i1sdsa2343d",
      name: "Spicy Veg Bowl",
      price: 18.1,
      rating: 4.8,
      status: true,
      uid: "121d3e",
      variation: false,
      veg: true,
    },
    {
      category_id: '121d32f3d',
      cover: 'assets/imgs/cheese.jpg',
      description: "Salty, organic cheese",
      id: "i2asdsd1",
      name: "Cheese",
      price: 34,
      rating: 4.8,
      status: true,
      uid: "121c3d",
      variation: true,
      veg: true,
    },
    {
      category_id: '121d32f3d',
      cover: 'assets/imgs/berries.jpg',
      description: "healthy, regional berries handpicked",
      id: "i3223sd1",
      name: "Berries",
      price: 15,
      rating: 4.2,
      status: true,
      uid: "121c3d",
      variation: true,
      veg: true,
    },
    {
      category_id: '121d32f3d',
      cover: 'assets/imgs/penne-arrabiata.jpg',
      description: "penne with spicy tomato sauce",
      id: "i3245612sd1",
      name: "Penne Arrabiata",
      price: 14,
      rating: 3.5,
      status: true,
      uid: "121c3d",
      variation: true,
      veg: true,
    },
    {
      category_id: '121d32f3d',
      cover: 'assets/imgs/pizza-prosciutto.jpg',
      description: "Pizza with prosciutto and arugula",
      id: "i34521232sd1",
      name: "Pizza Prosciutto",
      price: 25,
      rating: 4.5,
      status: true,
      uid: "121c3d",
      variation: true,
      veg: false,
    },
    {
      category_id: '121d32f3d',
      cover: 'assets/imgs/flat-green-pasta.jpg',
      description: "Flat green pasta with pesto and parmesan",
      id: "i321232sd1",
      name: "Flat Green Pasta",
      price: 23,
      rating: 4.7,
      status: true,
      uid: "121c3d",
      variation: true,
      veg: true,
    },
    {
      category_id: '331321d3d',
      cover: 'assets/imgs/fondue.jpg',
      description: "Fondue in bread bowl",
      id: "5i3322512sd1",
      name: "Swiss Fondue",
      price: 48,
      rating: 4.8,
      status: true,
      uid: "121d3d",
      variation: true,
      veg: true,
    },
    {
      category_id: '331321d3d',
      cover: 'assets/imgs/cow-rackets.jpg',
      description: "Meat rackets with potatoes and other vegetables",
      id: "5i32212sd1",
      name: "Meat Rackets",
      price: 42,
      rating: 4.3,
      status: true,
      uid: "121d3d",
      variation: true,
      veg: false,
    },
    {
      category_id: '331321d3d',
      cover: 'assets/imgs/salad.jpg',
      description: "Fresh salad with tomatoes, cucumbers, and lettuce",
      id: "5i327123sd1",
      name: "Fresh Salad",
      price: 18,
      rating: 4.1,
      status: true,
      uid: "121d3d",
      variation: true,
      veg: true,
    },
    {
      category_id: '331321d3d',
      cover: 'assets/imgs/tomato-cake.jpg',
      description: "Tomato cake with cheese and vegetables",
      id: "5i3221122sd1",
      name: "Tomato Cake",
      price: 36,
      rating: 4.4,
      status: true,
      uid: "121d3d",
      variation: true,
      veg: true,
    },
    {
      category_id: '331321d3d',
      cover: 'assets/imgs/aelplermagrone.jpg',
      description: "Mini Aelplermagronen with cheese, bacon and egg",
      id: "5i321122sd1",
      name: "Aelplermagronen",
      price: 45,
      rating: 4.7,
      status: true,
      uid: "121d3d",
      variation: true,
      veg: false,
    },
  ];
  addresses: Address[] = [
    {
      id: '1dsfsasd',
      user_id: '1dsfsaassd',
      title: 'Home',
      address: 'Rue de la Gare',
      city: 'Lausanne',
      zip: '1000',
      canton: 'Vaud',
      lat: 46.5196535,
      lng: 6.6322734,
    },
    {
      id: '1dsfsasdd',
      user_id: '1dsfsaassd',
      title: 'Work',
      address: 'Bahnhofstrasse 1',
      city: 'Zurich',
      zip: '8001',
      canton: 'Zurich',
      lat: 47.378177,
      lng: 8.540192,
    },
    {
      id: '1dsfsassdd',
      user_id: '1dsfsaassd',
      title: 'Home',
      address: 'Zwickelgasse 4',
      city: 'Zurich',
      zip: '8002',
      canton: 'Zurich',
      lat: 47.3768866,
      lng: 8.541694,
    }
  ]
  orders: Order[] = [
    {
      address: {
        title: 'Home',
        id: '1dsfsasd',
        user_id: '1dsfsaassd',
        address: 'Rue de la Gare',
        city: 'Lausanne',
        zip: '1000',
        canton: 'Vaud',
        lat: 46.5196535,
        lng: 6.6322734,
      },
      deliveryCharge: 18,
      grandTotal: 107,
      totalItems: 3,
      id: 'dsfhgf6kjNKN',
      order: [
        {
          category_id: '121d32f3d',
          cover: 'assets/imgs/cheese.jpg',
          description: "Salty, organic cheese",
          id: "i2asdsd1",
          name: "Cheese",
          price: 34,
          rating: 4.8,
          status: true,
          uid: "121c3d",
          variation: true,
          veg: true,
          quantity: 2
        },
        {
          category_id: '121d32f3d',
          cover: 'assets/imgs/cheese.jpg',
          description: "Salty, organic cheese",
          id: "i2asdsd1",
          name: "Cheese",
          price: 34,
          rating: 4.8,
          status: true,
          uid: "121c3d",
          variation: true,
          veg: true,
          quantity: 2
        },
      ],
      paid: 'COD',
      restaurant: {
        uid: '121c3d',
        cover: 'assets/imgs/vegetarian-food.jpg',
        name: 'Santa Lucia',
        short_name: 'santa lucia',
        cuisines: ['Italian', 'Vegetarian', 'Vegan'],
        address: {
          title: 'Home',
          id: '1dsfsasdd',
          user_id: '1dsfsaassd',
          address: 'Bahnhofstrasse 1',
          city: 'Zurich',
          zip: '8001',
          canton: 'Zurich',
          lat: 47.378177,
          lng: 8.540192,
        },
        rating: 4.3,
        delivery_time: 30,
        price: 27,
      },
      restaurant_id: '121c3d',
      status: 'created',
      time: "Jul. 7, 2022 13:00:23",
      total: 89,
      user_id: '1',
    },
    {
      address:
        {
          title: 'Work',
          id: '1dsfsassdd',
          user_id: '1dsfsaassd',
          address: 'Winkelriedstrasse 15',
          city: 'Zurich',
          zip: '8002',
          canton: 'Zurich',
          lat: 47.38361704352231,
          lng: 8.549818135160576,

        },
      deliveryCharge: 20,
      grandTotal: 109,
      id: 'dsfhgf6kjNKN',
      order: [
        {
          category_id: '121d32f3d',
          cover: 'assets/imgs/cheese.jpg',
          description: "Salty, organic cheese",
          id: "i2asdsd1",
          name: "Cheese",
          price: 34,
          rating: 4.8,
          status: true,
          uid: "121c3d",
          variation: true,
          veg: true,
          quantity: 2
        },
        {
          category_id: '121d32f3d',
          cover: 'assets/imgs/cheese.jpg',
          description: "Salty, organic cheese",
          id: "i2asdsd1",
          name: "Cheese",
          price: 34,
          rating: 4.8,
          status: true,
          uid: "121c3d",
          variation: true,
          veg: true,
          quantity: 4
        },
      ],
      paid: 'COD',
      restaurant: {
        uid: '121c3d',
        cover: 'assets/imgs/vegetarian-food.jpg',
        name: 'Santa Lucia',
        short_name: 'santa lucia',
        cuisines: ['Italian', 'Vegetarian', 'Vegan'],
        address: {
          title: 'Home',
          id: '1dsfsasdd',
          user_id: '1dsfsaassd',
          address: 'Bahnhofstrasse 1',
          city: 'Zurich',
          zip: '8001',
          canton: 'Zurich',
          lat: 47.378177,
          lng: 8.540192,
        },
        rating: 4.3,
        delivery_time: 30,
        price: 27,
      },
      restaurant_id: '121c3d',
      status: 'created',
      time: "Jul. 7, 2022 13:00:23",
      total: 89,
      user_id: '1',
      totalItems: 3,
    }
  ]

  constructor() {
  }
}