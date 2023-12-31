const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 4,
      userRating: 3,
      promo: 'sale',
      newFurniture: true,
      imgSrc:
        'https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?w=1060&t=st=1691091913~exp=1691092513~hmac=69edab31759abb4a970ac9b079d43ab465a4892110676ffb30d8f1410acd2d9f',
      oldPrice: 35,
      isFavorite: true,
      promoted: true,
      brand: {
        name: 'brand1',
        img:
          'https://images.unsplash.com/photo-1529697216570-f48ef8f6b2dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      },
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      imgSrc:
        'https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=740&t=st=1691092051~exp=1691092651~hmac=29a0927b717ac30003578f5e65c4534743e810bf01a7dd0c73de41f0e4a92bd6',
      oldPrice: 35,
      isFavorite: false,
      promoted: true,
      brand: {
        name: 'brand2',
        img:
          'https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      },
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/empty-flat-interrior-with-elements-decoration_1303-23910.jpg?w=1060&t=st=1691092096~exp=1691092696~hmac=5553d73cef167f9636899c7c10ed201833aa7322872624cf09c9321d8bf79381',
      classFav: false,
      classCom: false,
      promoted: true,
      brand: {
        name: 'brand3',
        img:
          'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      },
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/wooden-sideboard-table-with-books-vase_53876-144976.jpg?w=740&t=st=1691092114~exp=1691092714~hmac=4da81c9eb3ac98a12bd76143084651df4ea2eef418c5371307a603cccc052917',
      classFav: true,
      classCom: true,
      brand: {
        name: 'brand4',
        img:
          'https://images.unsplash.com/photo-1606818616331-32cf3239c93c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      },
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?w=740&t=st=1691092130~exp=1691092730~hmac=e1e8b7e32370eff0e53577028449897d30995e7892d19157ac1f51e74487e57d',
      classFav: false,
      classCom: false,
      brand: {
        name: 'brand5',
        img:
          'https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      },
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/wood-sideboard-living-room-interior-with-copy-space_43614-828.jpg?w=996&t=st=1691092208~exp=1691092808~hmac=85e1fe43d3dbbcc62b3fbb904a884f10a85a76c57b75bd6007762511cb935c11',
      classFav: false,
      classCom: false,
      brand: {
        name: 'brand6',
        img:
          'https://images.unsplash.com/photo-1568738351265-c7065f5d4293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      },
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/tropical-authentic-dining-room-interior-design-with-gallery-wall_53876-126792.jpg?w=1060&t=st=1691092236~exp=1691092836~hmac=026d0da3e9327635a484530dd527724313df7118de8350051fffc6125ef37753',
      classFav: false,
      classCom: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/blank-picture-frame-by-pink-velvet-armchair_53876-134083.jpg?w=740&t=st=1691092258~exp=1691092858~hmac=9cf262221e75b129ee78c1d2c2ef3f9dc1b5ee905a2328fa4fecc16d79c612f4',
      classFav: false,
      classCom: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/4740494/pexels-photo-4740494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/2376971/pexels-photo-2376971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isOpen: false,
      imgSrc:
        'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isOpen: false,
      imgSrc:
        'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isOpen: false,
      imgSrc:
        'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ],
  cart: {
    products: [],
  },
  mode: 'laptop',
  comparableProducts: [],

  feedback: [
    {
      id: 1,
      name: 'John Smith',
      shortDescription: 'satisfied client',
      opinion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat tellus urna, quis malesuada libero ultricies quis. Sed pretium feugiat turpis in suscipit. Quisque et massa porttitor, porttitor leo at, convallis erat. Lorem ipsum dolor sit.',
      photo:
        'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Adam Adams',
      shortDescription: 'gratesful client',
      opinion:
        'Mauris viverra metus id lacus egestas, ut lacinia nunc iaculis. Vestibulum vel tincidunt arcu. Suspendisse dapibus lorem commodo libero mollis, vitae gravida libero molestie. Maecenas vitae tempor nunc. In ut diam et turpis gravida porta non a tortor. Morbi a iaculis ipsum.',
      photo:
        'https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Amanda Doe',
      shortDescription: 'disapointed client',
      opinion:
        'Nulla id diam interdum, sodales nulla a, eleifend diam. Sed placerat lectus id ipsum convallis vulputate. Nullam fringilla sapien ut ipsum posuere, posuere pellentesque mauris dapibus. Donec massa nibh, tincidunt quis interdum quis, cursus sit amet dui. Ut tincidunt lorem lobortis vulputate.',
      photo:
        'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ],
};

export default initialState;
