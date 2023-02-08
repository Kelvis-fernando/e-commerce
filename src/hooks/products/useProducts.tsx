const useProducts = () => {
  const products = [
    {
      id: "hash1",
      title: "Calça",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/08/01/16593361381d953439c5c8802d66405227843c262d_thumbnail_600x.webp",
      price: "90",
    },
    {
      id: "hash2",
      title: "Camisa",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840225ab8c221f17d85b6ad7b25796083b5461_thumbnail_600x.webp",
      price: "120",
    },
    {
      id: "hash3",
      title: "Camiseta",
      brand: "Shein",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/31/162242635943a1e6f0d3bb47dba81d60c760bfe1ac_thumbnail_600x.webp",
      price: "60",
    },
    {
      id: "hash4",
      title: "Moletom",
      brand: "YouCom",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/09/30/1632987976631008a0883de7aec6420544845d2375_thumbnail_405x.webp",
      price: "150",
    },
    {
      id: "hash1",
      title: "Calça",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/08/01/16593361381d953439c5c8802d66405227843c262d_thumbnail_600x.webp",
      price: "90",
    },
    {
      id: "hash2",
      title: "Camisa",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840225ab8c221f17d85b6ad7b25796083b5461_thumbnail_600x.webp",
      price: "120",
    },
    {
      id: "hash3",
      title: "Camiseta",
      brand: "Shein",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/31/162242635943a1e6f0d3bb47dba81d60c760bfe1ac_thumbnail_600x.webp",
      price: "60",
    },
    {
      id: "hash4",
      title: "Moletom",
      brand: "YouCom",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/09/30/1632987976631008a0883de7aec6420544845d2375_thumbnail_405x.webp",
      price: "150",
    },
    {
      id: "hash1",
      title: "Calça",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/08/01/16593361381d953439c5c8802d66405227843c262d_thumbnail_600x.webp",
      price: "90",
    },
    {
      id: "hash2",
      title: "Camisa",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840225ab8c221f17d85b6ad7b25796083b5461_thumbnail_600x.webp",
      price: "120",
    },
    {
      id: "hash3",
      title: "Camiseta",
      brand: "Shein",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/31/162242635943a1e6f0d3bb47dba81d60c760bfe1ac_thumbnail_600x.webp",
      price: "60",
    },
    {
      id: "hash4",
      title: "Moletom",
      brand: "YouCom",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/09/30/1632987976631008a0883de7aec6420544845d2375_thumbnail_405x.webp",
      price: "150",
    },
    {
      id: "hash1",
      title: "Calça",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/08/01/16593361381d953439c5c8802d66405227843c262d_thumbnail_600x.webp",
      price: "90",
    },
    {
      id: "hash2",
      title: "Camisa",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840225ab8c221f17d85b6ad7b25796083b5461_thumbnail_600x.webp",
      price: "120",
    },
    {
      id: "hash3",
      title: "Camiseta",
      brand: "Shein",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/31/162242635943a1e6f0d3bb47dba81d60c760bfe1ac_thumbnail_600x.webp",
      price: "60",
    },
    {
      id: "hash4",
      title: "Moletom",
      brand: "YouCom",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/09/30/1632987976631008a0883de7aec6420544845d2375_thumbnail_405x.webp",
      price: "150",
    },
    {
      id: "hash1",
      title: "Calça",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/08/01/16593361381d953439c5c8802d66405227843c262d_thumbnail_600x.webp",
      price: "90",
    },
    {
      id: "hash2",
      title: "Camisa",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840225ab8c221f17d85b6ad7b25796083b5461_thumbnail_600x.webp",
      price: "120",
    },
    {
      id: "hash3",
      title: "Camiseta",
      brand: "Shein",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/31/162242635943a1e6f0d3bb47dba81d60c760bfe1ac_thumbnail_600x.webp",
      price: "60",
    },
    {
      id: "hash4",
      title: "Moletom",
      brand: "YouCom",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/09/30/1632987976631008a0883de7aec6420544845d2375_thumbnail_405x.webp",
      price: "150",
    },
    {
      id: "hash1",
      title: "Calça",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/08/01/16593361381d953439c5c8802d66405227843c262d_thumbnail_600x.webp",
      price: "90",
    },
    {
      id: "hash2",
      title: "Camisa",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840225ab8c221f17d85b6ad7b25796083b5461_thumbnail_600x.webp",
      price: "120",
    },
    {
      id: "hash3",
      title: "Camiseta",
      brand: "Shein",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/31/162242635943a1e6f0d3bb47dba81d60c760bfe1ac_thumbnail_600x.webp",
      price: "60",
    },
    {
      id: "hash4",
      title: "Moletom",
      brand: "YouCom",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/09/30/1632987976631008a0883de7aec6420544845d2375_thumbnail_405x.webp",
      price: "150",
    },
    {
      id: "hash1",
      title: "Calça",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/08/01/16593361381d953439c5c8802d66405227843c262d_thumbnail_600x.webp",
      price: "90",
    },
    {
      id: "hash2",
      title: "Camisa",
      brand: "Zara",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840225ab8c221f17d85b6ad7b25796083b5461_thumbnail_600x.webp",
      price: "120",
    },
    {
      id: "hash3",
      title: "Camiseta",
      brand: "Shein",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/31/162242635943a1e6f0d3bb47dba81d60c760bfe1ac_thumbnail_600x.webp",
      price: "60",
    },
    {
      id: "hash4",
      title: "Moletom",
      brand: "YouCom",
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/09/30/1632987976631008a0883de7aec6420544845d2375_thumbnail_405x.webp",
      price: "150",
    },
  ];

  return { products };
};

export default useProducts;
