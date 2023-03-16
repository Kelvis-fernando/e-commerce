import { productService } from "../../services/productsService";

const useProducts = () => {
  const products = [
    {
      id: 1,
      title: "Ganesha Kit Coffee++",
      brand: "Coffee ++",
      image:
        "https://cdn.shopify.com/s/files/1/0421/4764/3548/products/Classico_FazendasMoido.jpg?v=1641680479&width=1100",
      price: "90.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
      classification: "Especial",
      notes: "Frutado",
      itensity: "Suave",
      origin: "Cerrado mineiro",
      typeRoast: "Média",
    },
    {
      id: 2,
      title: "Baggio kit café em pó",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitcompletoTM_1200px_1512x.png?v=1654696542",
      price: "120.00",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
      classification: "Especial",
      notes: "Frutado",
      itensity: "Suave",
      origin: "Cerrado mineiro",
      typeRoast: "Média",
    },
    {
      id: 3,
      title: "Kit Capsulas",
      brand: "Baggio",
      image:
        "https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_Truf_1512x.png?v=1678811237",
      price: "249.99",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a aperiam quos non doloribus ",
      classification: "Especial",
      notes: "Frutado",
      itensity: "Suave",
      origin: "Cerrado mineiro",
      typeRoast: "Média",
    },
  ];

  // productService();

  return { products };
};

export default useProducts;
