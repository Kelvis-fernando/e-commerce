import { productService } from "../../services/productsService";

const useProducts = () => {
  const products = [
    {
      id: "hash1",
      title: "Coffee",
      brand: "Coffee ++",
      image:
        "https://cdn.shopify.com/s/files/1/0421/4764/3548/products/Classico_FazendasMoido.jpg?v=1641680479&width=1100",
      price: "90.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash2",
      title: "Coffee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitcompletoTM_1200px_1512x.png?v=1654696542",
      price: "120.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash3",
      title: "Kit capsulas + Cofee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_Truf_1512x.png?v=1678811237",
      price: "249.99",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash1",
      title: "Coffee",
      brand: "Coffee ++",
      image:
        "https://cdn.shopify.com/s/files/1/0421/4764/3548/products/Classico_FazendasMoido.jpg?v=1641680479&width=1100",
      price: "90.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash2",
      title: "Coffee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitcompletoTM_1200px_1512x.png?v=1654696542",
      price: "120.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash3",
      title: "Kit capsulas + Cofee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_Truf_1512x.png?v=1678811237",
      price: "249.99",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash1",
      title: "Coffee",
      brand: "Coffee ++",
      image:
        "https://cdn.shopify.com/s/files/1/0421/4764/3548/products/Classico_FazendasMoido.jpg?v=1641680479&width=1100",
      price: "90.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash2",
      title: "Coffee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitcompletoTM_1200px_1512x.png?v=1654696542",
      price: "120.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash3",
      title: "Kit capsulas + Cofee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_Truf_1512x.png?v=1678811237",
      price: "249.99",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash1",
      title: "Coffee",
      brand: "Coffee ++",
      image:
        "https://cdn.shopify.com/s/files/1/0421/4764/3548/products/Classico_FazendasMoido.jpg?v=1641680479&width=1100",
      price: "90.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash2",
      title: "Coffee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitcompletoTM_1200px_1512x.png?v=1654696542",
      price: "120.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash3",
      title: "Kit capsulas + Cofee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_Truf_1512x.png?v=1678811237",
      price: "249.99",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash1",
      title: "Coffee",
      brand: "Coffee ++",
      image:
        "https://cdn.shopify.com/s/files/1/0421/4764/3548/products/Classico_FazendasMoido.jpg?v=1641680479&width=1100",
      price: "90.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash2",
      title: "Coffee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitcompletoTM_1200px_1512x.png?v=1654696542",
      price: "120.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
    {
      id: "hash3",
      title: "Kit capsulas + Cofee",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_Truf_1512x.png?v=1678811237",
      price: "249.99",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
    },
  ];

  // productService();

  return { products };
};

export default useProducts;
