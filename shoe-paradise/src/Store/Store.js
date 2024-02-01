// import React from "react";
import { NotificationManager } from "react-notifications";
// import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
import { combineReducers, createStore } from "redux";
import { v4 } from "uuid";

let CardsData = {
  orders: [],
  searched: "",
  products: [
    {
      id: v4(),
      name: "CLOUDFOAM PURE SHOES",
      href: "#",
      price: "$256",
      dis: "5%",
      cut: "$45",
      description:
        "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
      options: "8 colors",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct1Maain.png?alt=media&token=57390b99-b996-41f8-a184-472b5c21bc90",
      imageAlt:
        "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
      id: v4(),
      name: "Basic Tee",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct2Main.png?alt=media&token=8a15e1a3-6514-4d4f-ab80-135efb35b59c",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "Basic Tee",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct6main.avif?alt=media&token=1926d8ed-373d-4989-9462-a9d2e1f0ccd4",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "DAILY 3.0 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "ADILETTE SANDALS",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "RACER TR23 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "RUNFALCON 2.0 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "KAPTIR 3.0 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "ADILETTE SANDALS",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "RACER TR23 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "RUNFALCON 2.0 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "RACER TR23 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: v4(),
      name: "RUNFALCON 2.0 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2",
      imageAlt: "Front of plain black t-shirt.",
    },
    {
      id: 2,
      name: "KAPTIR 3.0 SHOES",
      href: "#",
      price: "$32",
      dis: "5%",
      cut: "$45",
      description:
        "Look like a visionary CEO and wear the same black t-shirt every day.",
      options: "Black",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655",
      imageAlt: "Front of plain black t-shirt.",
    },
    // More products...
  ],
};

function ProductsSection(oldData = CardsData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.products],
    orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}

let initialAuthSection = {
  loggedUser: null,
  users: [],
};

function authSection(oldData = initialAuthSection, newData) {
  oldData = { ...oldData };
  if (newData.type === "USER_CREATED") {
    oldData.users.push(newData.payload);
    NotificationManager.success("Congratulations,you are signed in", "Signed");
  } else if (newData.type === "USER_LOGGED_IN") {
    oldData.loggedUser = newData.payload;
  } else if (newData.type === "USER_LOGGED_OUT") {
    localStorage.removeItem("someToken");
    oldData.loggedUser = null;
  }
  return oldData;
}

let allData = combineReducers({
  ProductsSection,
  authSection,
});
let store = createStore(allData);

export default store;
