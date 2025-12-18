// Helper para construir rutas de imágenes con el base path correcto
const getImagePath = (imageName) => {
  // En desarrollo, las imágenes están en public/
  // En producción, Vite las copia a la raíz de dist/
  const base = import.meta.env.BASE_URL || '/lucky-box/'
  // Asegurar que la ruta no tenga doble barra
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  return `${cleanBase}${imageName}`
}

export const products = [
  {
    id: 'digital-discovery',
    name: 'Caja Misteriosa Descubrimiento Digital',
    price: 25.95,
    image: getImagePath('producto1.webp'),
    description: 'Descubre tecnología de última generación en cada caja misteriosa',
    items: [
      {
        name: 'iPad Pro 11',
        rarity: 'legendario',
        price: 5437.5,
        probability: 0.0100
      },
      {
        name: 'Beats Studio 3 inalámbrico',
        rarity: 'épico',
        price: 1540.16,
        probability: 0.0100
      },
      {
        name: 'HomePod de Apple',
        rarity: 'épico',
        price: 1433.06,
        probability: 0.0100
      },
      {
        name: 'Apple TV 4k',
        rarity: 'raro',
        price: 923.06,
        probability: 0.0100
      },
      {
        name: 'Airpods',
        rarity: 'raro',
        price: 673.16,
        probability: 0.0100
      },
      {
        name: 'Ratón mágico 2',
        rarity: 'raro',
        price: 443.7,
        probability: 0.0100
      },
      {
        name: 'Cable de Lightning a USBC',
        rarity: 'poco común',
        price: 239.7,
        probability: 0.0100
      },
      {
        name: 'Funda inteligente para iPad Mini 4',
        rarity: 'poco común',
        price: 239.7,
        probability: 0.0100
      },
      {
        name: 'Adaptador de USBC a USB',
        rarity: 'poco común',
        price: 158.1,
        probability: 0.0845
      },
      {
        name: 'Auriculares plegables negros',
        rarity: 'poco común',
        price: 107.1,
        probability: 0.3514
      },
      {
        name: 'Cargador con enchufe USB de 4 puertos',
        rarity: 'poco común',
        price: 91.8,
        probability: 0.5388
      },
      {
        name: 'Altavoz Bluetooth Inalámbrico',
        rarity: 'poco común',
        price: 50.96,
        probability: 1.6864
      },
      {
        name: 'Popsocket',
        rarity: 'poco común',
        price: 50.96,
        probability: 1.6864
      },
      {
        name: 'Soporte dúo',
        rarity: 'poco común',
        price: 50.96,
        probability: 1.6864
      },
      {
        name: 'Auricular con cable en la oreja',
        rarity: 'poco común',
        price: 50.96,
        probability: 1.6864
      },
      {
        name: 'Cable micro USB corto',
        rarity: 'poco común',
        price: 50.96,
        probability: 1.6864
      },
      {
        name: 'Herramienta de limpieza para auriculares',
        rarity: 'poco común',
        price: 41.81,
        probability: 2.1776
      },
      {
        name: 'Foldable Phone Stand (Metal, Adjustable)',
        rarity: 'poco común',
        price: 35.7,
        probability: 2.5831
      },
      {
        name: 'Mini Smart Digital Alarm Clock',
        rarity: 'poco común',
        price: 33.15,
        probability: 2.7739
      },
      {
        name: 'Funda protectora S20 Ultra',
        rarity: 'poco común',
        price: 30.6,
        probability: 2.9787
      },
      {
        name: 'Funda de cristal Huawei',
        rarity: 'poco común',
        price: 28.05,
        probability: 4.7415
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 25.5,
        probability: 5.0916
      },
      {
        name: 'Funda De Silicona Compatible Con Airpods Amarillo',
        rarity: 'común',
        price: 24.98,
        probability: 5.1669
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 20.59,
        probability: 9.6799
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 20.4,
        probability: 9.7308
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 16.31,
        probability: 10.9080
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 15.3,
        probability: 11.2210
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 15.26,
        probability: 11.2327
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 12.23,
        probability: 12.2276
      }
    ]
  },
  {
    id: 'apple-selection',
    name: 'Caja Misteriosa Selección de Apple',
    price: 252.08,
    image: getImagePath('producto2.webp'),
    description: 'Descubre productos exclusivos de Apple en cada caja misteriosa',
    items: [
      {
        name: 'Mac Pro Tower Hero Splitter',
        rarity: 'épico',
        price: 35698.73,
        probability: 0.0001
      },
      {
        name: 'Pantalla Apple Pro XDR',
        rarity: 'épico',
        price: 29589.15,
        probability: 0.0001
      },
      {
        name: 'Mac Pro',
        rarity: 'épico',
        price: 28569.19,
        probability: 0.0001
      },
      {
        name: 'MacBook Pro Silver 1TB 16 Inch',
        rarity: 'épico',
        price: 18359.32,
        probability: 0.0001
      },
      {
        name: 'MacBook Pro Silver 14 Inch 1TB',
        rarity: 'épico',
        price: 16574.4,
        probability: 0.0001
      },
      {
        name: 'iPhone 16 Pro 1Tb Desierto Titanio',
        rarity: 'raro',
        price: 8159.7,
        probability: 0.0001
      },
      {
        name: 'iPhone 16 Pro 512gb Blanco Titanio',
        rarity: 'raro',
        price: 6884.74,
        probability: 0.0001
      },
      {
        name: 'iPhone 16 Pro Max 256Gb Negro Titanio',
        rarity: 'raro',
        price: 6374.78,
        probability: 0.0001
      },
      {
        name: 'iPhone Air Skyblue 1TB',
        rarity: 'raro',
        price: 5437.5,
        probability: 0.0001
      },
      {
        name: 'iPad Pro 11',
        rarity: 'raro',
        price: 5437.5,
        probability: 0.0001
      },
      {
        name: 'iPhone Air Lightgold 512Gb',
        rarity: 'raro',
        price: 4500,
        probability: 0.0001
      },
      {
        name: 'Apple Watch Ultra 2',
        rarity: 'raro',
        price: 3824.85,
        probability: 0.0001
      },
      {
        name: 'iPhone 14 más 128GB',
        rarity: 'raro',
        price: 3722.85,
        probability: 0.0001
      },
      {
        name: 'Apple Watch Serie 8',
        rarity: 'raro',
        price: 2549.93,
        probability: 0.0046
      },
      {
        name: 'Apple Watch Series 10 Denim Sport Band',
        rarity: 'poco común',
        price: 2141.92,
        probability: 0.0183
      },
      {
        name: 'Teclado mágico para iPad Pro',
        rarity: 'poco común',
        price: 1846.13,
        probability: 0.0499
      },
      {
        name: 'AirPods Pro',
        rarity: 'poco común',
        price: 1280.06,
        probability: 1.1334
      },
      {
        name: 'Apple TV 4k',
        rarity: 'poco común',
        price: 923.06,
        probability: 1.5733
      },
      {
        name: 'Cargador MagSafe Dúo',
        rarity: 'poco común',
        price: 826.16,
        probability: 4.4309
      },
      {
        name: 'Solo Loop trenzado',
        rarity: 'poco común',
        price: 520.2,
        probability: 4.8303
      },
      {
        name: 'HomePod Mini',
        rarity: 'poco común',
        price: 494.7,
        probability: 8.8375
      },
      {
        name: 'Folio inteligente para iPad Mini',
        rarity: 'poco común',
        price: 316.2,
        probability: 9.1479
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'poco común',
        price: 306,
        probability: 9.6340
      },
      {
        name: 'Correa deportiva para Apple Watch',
        rarity: 'poco común',
        price: 290.7,
        probability: 8.9223
      },
      {
        name: 'Bucle de manzana',
        rarity: 'poco común',
        price: 260.1,
        probability: 9.0777
      },
      {
        name: 'Llavero de cuero AirTag',
        rarity: 'poco común',
        price: 255,
        probability: 3.7142
      },
      {
        name: 'Sistema de TV de montaje profesional',
        rarity: 'común',
        price: 224.4,
        probability: 3.7142
      },
      {
        name: 'Apple Watch Rhinestone Band',
        rarity: 'común',
        price: 91.8,
        probability: 5.8178
      },
      {
        name: 'Funda para Airpods Mc Chips',
        rarity: 'común',
        price: 86.7,
        probability: 5.9191
      },
      {
        name: 'Correas elásticas compatibles con Apple Watch',
        rarity: 'común',
        price: 58.65,
        probability: 6.5085
      },
      {
        name: 'Funda para AirPods',
        rarity: 'común',
        price: 56.06,
        probability: 6.5657
      },
      {
        name: 'Wireless Charging Pad (Generic, Qi Standard)',
        rarity: 'común',
        price: 51,
        probability: 6.6792
      },
      {
        name: 'Apple Watch USB-C Charger',
        rarity: 'común',
        price: 45.9,
        probability: 6.7955
      }
    ]
  },
  {
    id: 'galaxy-z-flip',
    name: 'Caja Misteriosa Galaxy Z Flip',
    price: 66.3,
    image: getImagePath('producto3.webp'),
    description: 'Descubre dispositivos Galaxy Z Flip y accesorios en cada caja misteriosa',
    items: [
      {
        name: 'Galaxy Z Flip Plata 512Gb',
        rarity: 'épico',
        price: 7139.74,
        probability: 0.0115
      },
      {
        name: 'Galaxy Z Flip 6',
        rarity: 'épico',
        price: 6986.74,
        probability: 0.0131
      },
      {
        name: 'Galaxy Z Flip 6 Melocotón',
        rarity: 'épico',
        price: 6884.74,
        probability: 0.0143
      },
      {
        name: 'Galaxy Z Flip 6 Azul',
        rarity: 'épico',
        price: 6629.78,
        probability: 0.0176
      },
      {
        name: 'Galaxy Z flip 6 Amarillo',
        rarity: 'épico',
        price: 6629.78,
        probability: 0.0176
      },
      {
        name: 'Galaxy Z Flip Menta',
        rarity: 'épico',
        price: 6629.78,
        probability: 0.0176
      },
      {
        name: 'Galaxy Z Flip5 512gb',
        rarity: 'épico',
        price: 4589.85,
        probability: 0.0964
      },
      {
        name: 'Funda de silicona con anillo para Galaxy Z Flip 3',
        rarity: 'poco común',
        price: 214.2,
        probability: 3.6852
      },
      {
        name: 'Samsung Galaxy Z Flip 5 Case Cover Burgundy',
        rarity: 'poco común',
        price: 131.25,
        probability: 3.9487
      },
      {
        name: 'Samsung Galaxy Z Flip 4 Full Cover Shell',
        rarity: 'poco común',
        price: 105,
        probability: 4.0360
      },
      {
        name: 'Samsung Galaxy Z Flip 6 Brown Leather Case',
        rarity: 'poco común',
        price: 97.5,
        probability: 4.0613
      },
      {
        name: 'Plataforma de carga inalámbrica para Samsung',
        rarity: 'poco común',
        price: 91.8,
        probability: 4.0806
      },
      {
        name: 'Adaptador tipo C a 35 mm',
        rarity: 'común',
        price: 66.3,
        probability: 7.4999
      },
      {
        name: 'Funda Buds Case Con Cerradura Verde',
        rarity: 'común',
        price: 66.26,
        probability: 7.5001
      },
      {
        name: 'Funda Galaxy Buds',
        rarity: 'común',
        price: 48.45,
        probability: 15.9597
      },
      {
        name: 'Samsung Galaxy Watch Charger',
        rarity: 'común',
        price: 30.6,
        probability: 16.1987
      },
      {
        name: 'Samsung Galaxy Z Flip 6 Case with Screen Protector',
        rarity: 'común',
        price: 15.75,
        probability: 16.4003
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 12.75,
        probability: 16.4413
      }
    ]
  },
  {
    id: 'all-i-want-for-xmas',
    name: 'Caja Misteriosa Todo lo que Quiero para Navidad',
    price: 101.96,
    image: getImagePath('producto4.webp'),
    description: 'Descubre regalos navideños especiales en cada caja misteriosa',
    items: [
      {
        name: 'Explorador Rolex',
        rarity: 'legendario',
        price: 36718.69,
        probability: 0.0050
      },
      {
        name: 'billetes de avión',
        rarity: 'legendario',
        price: 15299.44,
        probability: 0.0120
      },
      {
        name: 'Galaxia S24 1T',
        rarity: 'épico',
        price: 8924.66,
        probability: 0.0206
      },
      {
        name: 'iPhone 16 Pro Max 1Tb Titanio Natural',
        rarity: 'épico',
        price: 8669.7,
        probability: 0.0212
      },
      {
        name: 'Epson Home Cinema Android Tv Edición',
        rarity: 'raro',
        price: 3580.09,
        probability: 0.0513
      },
      {
        name: 'Airpods Max Espacio Azul',
        rarity: 'raro',
        price: 3172.09,
        probability: 0.0579
      },
      {
        name: 'Miniproyector',
        rarity: 'raro',
        price: 3172.09,
        probability: 0.0579
      },
      {
        name: 'Estación de juegos 5',
        rarity: 'raro',
        price: 2804.89,
        probability: 0.0655
      },
      {
        name: 'Xbox Serie X',
        rarity: 'raro',
        price: 2560.13,
        probability: 0.0717
      },
      {
        name: 'Máquina de café expreso DeLonghi',
        rarity: 'raro',
        price: 1234.16,
        probability: 0.1488
      },
      {
        name: 'Casio Wave-Cceptor',
        rarity: 'raro',
        price: 1188.26,
        probability: 0.1545
      },
      {
        name: 'Mini refrigerador inteligente para el cuidado de la piel',
        rarity: 'raro',
        price: 1030.16,
        probability: 0.1783
      },
      {
        name: 'My First Christmas Tree, Kids Interactive Holiday Toy',
        rarity: 'poco común',
        price: 750,
        probability: 0.2448
      },
      {
        name: 'Pionero DDJ-SB3',
        rarity: 'poco común',
        price: 719.06,
        probability: 0.2554
      },
      {
        name: 'Lámpara Con Altavoz Bluetooth Cargador Inalámbrico',
        rarity: 'poco común',
        price: 673.16,
        probability: 0.2728
      },
      {
        name: 'Decoway 6FT Artificial Christmas Tree',
        rarity: 'poco común',
        price: 637.5,
        probability: 0.2881
      },
      {
        name: 'Cámara Sony Playstation5 HD',
        rarity: 'poco común',
        price: 448.8,
        probability: 0.4092
      },
      {
        name: 'Auriculares inalámbricos Bluetooth',
        rarity: 'poco común',
        price: 290.7,
        probability: 0.6317
      },
      {
        name: '6 FT Christmas Inflatable Santa Claus Outdoor Decorations',
        rarity: 'poco común',
        price: 262.5,
        probability: 0.6996
      },
      {
        name: 'The Original Charlie Brown Artificial Christmas Tree',
        rarity: 'poco común',
        price: 225,
        probability: 0.8162
      },
      {
        name: 'Outdoor Christmas Decorations, Waterproof 16-Tube Meteor',
        rarity: 'poco común',
        price: 183.75,
        probability: 0.9994
      },
      {
        name: 'Árbol de Navidad artificial',
        rarity: 'poco común',
        price: 163.2,
        probability: 1.1252
      },
      {
        name: 'Edición navideña de Monopoly',
        rarity: 'poco común',
        price: 142.8,
        probability: 1.2860
      },
      {
        name: 'Reindeer Car Kit Antlers',
        rarity: 'poco común',
        price: 131.25,
        probability: 1.3991
      },
      {
        name: 'Christmas Pillow Covers 18x18 Set of 4',
        rarity: 'poco común',
        price: 123.75,
        probability: 1.4839
      },
      {
        name: 'Santa Hat Christmas Beanie',
        rarity: 'poco común',
        price: 120,
        probability: 1.5303
      },
      {
        name: 'Blowata Christmas Light Necklace',
        rarity: 'poco común',
        price: 120,
        probability: 1.5303
      },
      {
        name: 'Visera unisex para adultos.',
        rarity: 'poco común',
        price: 115.01,
        probability: 1.5966
      },
      {
        name: 'Christmas Window Clings Snowflakes',
        rarity: 'poco común',
        price: 105,
        probability: 1.7489
      },
      {
        name: 'Hervidor Russell Hobbs',
        rarity: 'poco común',
        price: 102,
        probability: 1.8003
      },
      {
        name: 'Calcetines festivos',
        rarity: 'común',
        price: 56.1,
        probability: 11.8002
      },
      {
        name: '10 sombreros navideños',
        rarity: 'común',
        price: 51,
        probability: 12.9802
      },
      {
        name: 'Cable micro USB corto',
        rarity: 'común',
        price: 50.96,
        probability: 12.9898
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 15.3,
        probability: 43.2675
      }
    ]
  },
  {
    id: 'ps5-economica',
    name: 'Caja Misteriosa PS5 Económica',
    price: 18.71,
    image: getImagePath('producto5.webp'),
    description: 'Descubre accesorios y productos de PlayStation 5 en cada caja misteriosa',
    items: [
      {
        name: 'Sony PlayStation 5 Disc Version (Renewed)',
        rarity: 'épico',
        price: 2025,
        probability: 0.0020
      },
      {
        name: 'PlayStation DualSense Edge Wireless Controller',
        rarity: 'épico',
        price: 1147.46,
        probability: 0.0100
      },
      {
        name: 'Playstation Gift Card 150',
        rarity: 'raro',
        price: 764.96,
        probability: 0.0100
      },
      {
        name: 'PlayStation DualSense Controller - FORTNITE Edition',
        rarity: 'raro',
        price: 510,
        probability: 0.0100
      },
      {
        name: 'Cámara Sony Playstation5 HD',
        rarity: 'raro',
        price: 448.8,
        probability: 0.0100
      },
      {
        name: 'Sony PlayStation®5 - Mando inalámbrico DualSense™ Cosmic Red',
        rarity: 'raro',
        price: 418.2,
        probability: 0.0100
      },
      {
        name: 'PlayStation DualSense Charging Station',
        rarity: 'poco común',
        price: 178.5,
        probability: 0.0200
      },
      {
        name: 'Sony PlayStation®5 - Estación de carga DualSense™',
        rarity: 'poco común',
        price: 173.4,
        probability: 0.0500
      },
      {
        name: 'Mando a distancia Sony Playstation5',
        rarity: 'poco común',
        price: 163.2,
        probability: 0.0500
      },
      {
        name: 'PlayStation Media Remote',
        rarity: 'poco común',
        price: 152.93,
        probability: 0.0500
      },
      {
        name: 'Playstation Gift Card 25',
        rarity: 'poco común',
        price: 127.5,
        probability: 0.0500
      },
      {
        name: 'Joysticks de rendimiento DualSense de Playstation 5',
        rarity: 'poco común',
        price: 127.5,
        probability: 0.0500
      },
      {
        name: 'PlayStation Store Gift Card',
        rarity: 'poco común',
        price: 102,
        probability: 0.0500
      },
      {
        name: 'Echzove Anti-Slip PS5 Spider-Man Controller Cover Case',
        rarity: 'poco común',
        price: 101.25,
        probability: 0.0500
      },
      {
        name: 'OIVO PS5 Controller Charger Kit with Adapter',
        rarity: 'poco común',
        price: 93.75,
        probability: 0.0500
      },
      {
        name: '6 Port USB Hub for PS5',
        rarity: 'poco común',
        price: 90,
        probability: 0.1000
      },
      {
        name: 'PS5 Controller Charger with LED Light Dual Stand Charger Dock',
        rarity: 'poco común',
        price: 86.25,
        probability: 0.1000
      },
      {
        name: 'PS5 Dustproof Case Cover',
        rarity: 'poco común',
        price: 56.25,
        probability: 0.2112
      },
      {
        name: 'Cleaning Repair Tool Kit for PS4 PS5',
        rarity: 'poco común',
        price: 52.46,
        probability: 0.3338
      },
      {
        name: 'PlayStation Store Gift Card',
        rarity: 'poco común',
        price: 51,
        probability: 0.3983
      },
      {
        name: 'Horizontal Acrylic Stand for PS5',
        rarity: 'poco común',
        price: 48.75,
        probability: 0.5227
      },
      {
        name: '4 Thumbsticks Replacement with 12 Swap Joysticks',
        rarity: 'poco común',
        price: 41.25,
        probability: 1.2934
      },
      {
        name: 'SSD Screw/Ring Replacement with Screwdriver for PS5',
        rarity: 'poco común',
        price: 37.5,
        probability: 2.0347
      },
      {
        name: 'WXYINSPAS 1PC PS5 Screw For Base Vertical Stand',
        rarity: 'poco común',
        price: 37.46,
        probability: 2.0439
      },
      {
        name: 'Foweroty 8 Pack Precision Rings for PS5',
        rarity: 'poco común',
        price: 30,
        probability: 4.0352
      },
      {
        name: 'MatoSan PS5 Controller Grip Thumbstick Accessories',
        rarity: 'poco común',
        price: 26.21,
        probability: 7.7169
      },
      {
        name: 'Centre Sticker for PS5 Slim Blue',
        rarity: 'común',
        price: 18.71,
        probability: 3.5306
      },
      {
        name: 'Centre Sticker for PS5 Slim Red',
        rarity: 'común',
        price: 18.71,
        probability: 3.5306
      },
      {
        name: 'Centre Sticker for PS5 Slim Matte Black',
        rarity: 'común',
        price: 18.71,
        probability: 3.5306
      },
      {
        name: 'Playstation Logo Sticker Pack',
        rarity: 'común',
        price: 16.88,
        probability: 4.4082
      },
      {
        name: 'PS Triangle Thumbstick Cap',
        rarity: 'común',
        price: 15,
        probability: 11.6906
      },
      {
        name: 'PS Circle Thumbstick Cap',
        rarity: 'común',
        price: 14.96,
        probability: 9.7301
      },
      {
        name: 'PS Cross Thumbstick Cap',
        rarity: 'común',
        price: 14.93,
        probability: 10.7697
      },
      {
        name: 'PS Square Thumbstick Cap',
        rarity: 'común',
        price: 14.89,
        probability: 10.8096
      },
      {
        name: 'L1 R1 L2 R2 Trigger Shoulder Buttons Springs Set for PS5',
        rarity: 'común',
        price: 9.38,
        probability: 12.0000
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 3.19,
        probability: 10.7400
      }
    ]
  },
  {
    id: 'amazon',
    name: 'Caja Misteriosa Amazon',
    price: 153,
    image: getImagePath('producto6.webp'),
    description: 'Descubre productos de Amazon y tecnología en cada caja misteriosa',
    items: [
      {
        name: 'iPhone 16 Pro 1Tb Desierto Titanio',
        rarity: 'épico',
        price: 8159.7,
        probability: 0.0754
      },
      {
        name: 'Appe Watch Ultra 2 Ocean Loop',
        rarity: 'raro',
        price: 4028.85,
        probability: 0.1528
      },
      {
        name: 'Apple Watch Ultra 2',
        rarity: 'raro',
        price: 3824.85,
        probability: 0.1609
      },
      {
        name: 'Miniproyector',
        rarity: 'raro',
        price: 3172.09,
        probability: 0.1940
      },
      {
        name: 'Bottle Compressor Wine Cooler',
        rarity: 'raro',
        price: 2549.93,
        probability: 0.2414
      },
      {
        name: 'Red Light Therapy For Face',
        rarity: 'poco común',
        price: 1473.86,
        probability: 0.4176
      },
      {
        name: 'Amazon Fire Max 11 Tablet',
        rarity: 'poco común',
        price: 1172.96,
        probability: 0.5247
      },
      {
        name: 'Tableta Fire HD 10',
        rarity: 'poco común',
        price: 785.33,
        probability: 0.7837
      },
      {
        name: 'Tarjeta regalo de Netflix',
        rarity: 'poco común',
        price: 510,
        probability: 1.2067
      },
      {
        name: 'Amazon Echo Show 5',
        rarity: 'poco común',
        price: 459,
        probability: 1.3408
      },
      {
        name: 'pesa rusa',
        rarity: 'poco común',
        price: 443.7,
        probability: 1.3870
      },
      {
        name: 'Punto de eco',
        rarity: 'poco común',
        price: 290.7,
        probability: 2.1171
      },
      {
        name: 'Cable de Lightning a USBC',
        rarity: 'poco común',
        price: 239.7,
        probability: 2.5675
      },
      {
        name: 'Crocs Unisex',
        rarity: 'poco común',
        price: 229.5,
        probability: 2.6816
      },
      {
        name: 'Bolsa para mascotas CheateauDog',
        rarity: 'poco común',
        price: 229.5,
        probability: 2.6816
      },
      {
        name: 'Stanley Tumbler',
        rarity: 'poco común',
        price: 204,
        probability: 3.0168
      },
      {
        name: 'Reloj despertador con cargador inalámbrico',
        rarity: 'poco común',
        price: 163.2,
        probability: 3.7710
      },
      {
        name: 'Amazon Fire TV Stick 4K',
        rarity: 'común',
        price: 153,
        probability: 4.0224
      },
      {
        name: 'Ratón inalámbrico vertical',
        rarity: 'común',
        price: 153,
        probability: 4.0224
      },
      {
        name: 'Tarjeta regalo de Amazon Game Stop',
        rarity: 'común',
        price: 102,
        probability: 3.9802
      },
      {
        name: 'Tarjeta de regalo de Netflix',
        rarity: 'común',
        price: 76.5,
        probability: 5.3069
      },
      {
        name: 'SanDisk 16GB Flash Drive',
        rarity: 'común',
        price: 51,
        probability: 7.9603
      },
      {
        name: 'Funda protectora colorida para Apple iPhone',
        rarity: 'común',
        price: 35.66,
        probability: 11.3838
      },
      {
        name: 'Cable Lightning Rosa',
        rarity: 'común',
        price: 33.15,
        probability: 12.2466
      },
      {
        name: 'Funda Airpod Estilo Supremo',
        rarity: 'común',
        price: 30.56,
        probability: 13.2835
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 28.05,
        probability: 14.4733
      }
    ]
  },
  {
    id: 'steam-gift-cards',
    name: 'Caja Misteriosa Tarjetas de Regalo Steam',
    price: 4.91,
    image: getImagePath('producto7.webp'),
    description: 'Descubre tarjetas de regalo de Steam y créditos en cada caja misteriosa',
    items: [
      {
        name: 'Tarjeta de regalo de vapor 100',
        rarity: 'épico',
        price: 510,
        probability: 0.0100
      },
      {
        name: 'Tarjeta de regalo de vapor 50',
        rarity: 'épico',
        price: 255,
        probability: 0.0100
      },
      {
        name: 'Steam Gift Card 25',
        rarity: 'raro',
        price: 127.5,
        probability: 0.0291
      },
      {
        name: 'Steam Gift Card 10',
        rarity: 'raro',
        price: 51,
        probability: 1.3723
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'poco común',
        price: 20.4,
        probability: 6.4059
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'poco común',
        price: 7.65,
        probability: 12.1726
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 4.58,
        probability: 15.0000
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 2.55,
        probability: 12.2924
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 1.5,
        probability: 12.9597
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 1.31,
        probability: 13.0827
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 1.13,
        probability: 13.2068
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 0.75,
        probability: 13.4585
      }
    ]
  },
  {
    id: 'iphone-17',
    name: 'Caja Misteriosa iPhone 17',
    price: 97.5,
    image: getImagePath('producto8.webp'),
    description: 'Descubre iPhones 17 y accesorios Apple en cada caja misteriosa',
    items: [
      {
        name: 'iPhone 17 Pro Max 2TB',
        rarity: 'épico',
        price: 9750,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Pro Max 1TB',
        rarity: 'épico',
        price: 8250,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Pro 1TB',
        rarity: 'épico',
        price: 7500,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Pro Max 512gb',
        rarity: 'épico',
        price: 7125,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Pro 512gb',
        rarity: 'épico',
        price: 6337.5,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Pro Max 256GB',
        rarity: 'épico',
        price: 6000,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Pro 256gb',
        rarity: 'épico',
        price: 5456.25,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Blue 512gb',
        rarity: 'raro',
        price: 4125,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Sage 512GB',
        rarity: 'raro',
        price: 4125,
        probability: 0.0001
      },
      {
        name: 'iPhone 17 Lavander 256GB',
        rarity: 'raro',
        price: 3750,
        probability: 0.0001
      },
      {
        name: 'Airpods Max Verde',
        rarity: 'raro',
        price: 3172.09,
        probability: 0.0001
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'raro',
        price: 2549.93,
        probability: 0.0001
      },
      {
        name: 'AirPods Pro',
        rarity: 'raro',
        price: 1280.06,
        probability: 0.0005
      },
      {
        name: 'Cargador MagSafe Dúo',
        rarity: 'poco común',
        price: 826.16,
        probability: 0.0277
      },
      {
        name: 'Almohadilla de carga inalámbrica',
        rarity: 'poco común',
        price: 265.2,
        probability: 3.7199
      },
      {
        name: 'Tapa de batería iPhone',
        rarity: 'poco común',
        price: 260.1,
        probability: 3.8894
      },
      {
        name: 'Magsafe Wallet with Airtag Holder',
        rarity: 'poco común',
        price: 146.25,
        probability: 10.5148
      },
      {
        name: 'Apple AirTag',
        rarity: 'poco común',
        price: 132.6,
        probability: 11.8464
      },
      {
        name: 'Funda Compatible Airpods Ben Y Jerry',
        rarity: 'poco común',
        price: 107.1,
        probability: 14.6659
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'poco común',
        price: 102,
        probability: 15.3341
      },
      {
        name: 'Funda De Silicona Compatible Con Airpods Azul',
        rarity: 'común',
        price: 50.96,
        probability: 5.3564
      },
      {
        name: 'iPhone USB-C Charger Fast Charging Pack',
        rarity: 'común',
        price: 40.8,
        probability: 5.8537
      },
      {
        name: 'Cable Lightning Rosa',
        rarity: 'común',
        price: 33.15,
        probability: 6.2582
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 22.46,
        probability: 6.8707
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 9.94,
        probability: 7.6651
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 5.1,
        probability: 7.9959
      }
    ]
  },
  {
    id: 'nintendo-switch-2',
    name: 'Caja Misteriosa Nintendo Switch 2',
    price: 18.71,
    image: getImagePath('producto9.webp'),
    description: 'Descubre consolas Nintendo Switch 2 y accesorios en cada caja misteriosa',
    items: [
      {
        name: 'Nintendo Switch 2 System',
        rarity: 'épico',
        price: 1871.25,
        probability: 0.0100
      },
      {
        name: 'Nintendo Switch Lite Coral',
        rarity: 'épico',
        price: 1132.16,
        probability: 0.0100
      },
      {
        name: 'Nintendo Game Boy Advance SP renovado',
        rarity: 'raro',
        price: 815.96,
        probability: 0.0100
      },
      {
        name: 'Joy-Con Edición Fortnite - Limitada',
        rarity: 'raro',
        price: 775.16,
        probability: 0.0100
      },
      {
        name: 'Nintendo Switch 2 Dock Set',
        rarity: 'raro',
        price: 558.75,
        probability: 0.0100
      },
      {
        name: 'Nintendo Joy-Con 2 (L)/(R) Light Blue/Light Red',
        rarity: 'raro',
        price: 502.5,
        probability: 0.0100
      },
      {
        name: 'Nintendo Sound Clock: Alarmo',
        rarity: 'raro',
        price: 468.75,
        probability: 0.0100
      },
      {
        name: 'Nintendo Switch 2 Pro Controller',
        rarity: 'raro',
        price: 412.5,
        probability: 0.0100
      },
      {
        name: 'Nintendo Switch 2 All-In-One Carrying Case',
        rarity: 'raro',
        price: 371.25,
        probability: 0.0100
      },
      {
        name: 'Donkey Kong Bananza',
        rarity: 'raro',
        price: 330,
        probability: 0.0100
      },
      {
        name: 'Nintendo GameCube Controller',
        rarity: 'raro',
        price: 296.25,
        probability: 0.0102
      },
      {
        name: 'Nintendo Switch 2 Samsung 256GB microSD Express Card',
        rarity: 'raro',
        price: 281.25,
        probability: 0.0140
      },
      {
        name: 'Nintendo Joy-Con 2 (L) Light Blue',
        rarity: 'raro',
        price: 262.5,
        probability: 0.0207
      },
      {
        name: 'Nintendo Switch 2 Camera',
        rarity: 'raro',
        price: 258.75,
        probability: 0.0224
      },
      {
        name: 'Nintendo Joy-Con 2 (R) Light Red',
        rarity: 'raro',
        price: 251.25,
        probability: 0.0262
      },
      {
        name: 'Nintendo 64 Controller',
        rarity: 'raro',
        price: 247.5,
        probability: 0.0283
      },
      {
        name: 'Nintendo Switch 2 AC Adapter',
        rarity: 'raro',
        price: 187.5,
        probability: 0.0990
      },
      {
        name: 'Nintendo Switch 2 Carrying Case & Screen Protector',
        rarity: 'poco común',
        price: 183.75,
        probability: 0.1071
      },
      {
        name: 'Nintendo Joy-Con 2 Charging Grip',
        rarity: 'poco común',
        price: 176.25,
        probability: 0.1253
      },
      {
        name: 'Nintendo Joy-Con 2 Wheel (set of 2)',
        rarity: 'poco común',
        price: 123.75,
        probability: 0.3749
      },
      {
        name: 'Drag x Drive',
        rarity: 'poco común',
        price: 97.5,
        probability: 0.6486
      },
      {
        name: 'Nintendo Joy-Con 2 Straps (set of 2)',
        rarity: 'poco común',
        price: 74.96,
        probability: 1.0384
      },
      {
        name: 'Nintendo Switch 2 Welcome Tour',
        rarity: 'poco común',
        price: 56.21,
        probability: 1.5359
      },
      {
        name: 'Nintendo Mario Kart 7 Racing Collection Pull Back Racer',
        rarity: 'poco común',
        price: 45,
        probability: 1.9411
      },
      {
        name: '$10 Nintendo eShop Digital Gift Card',
        rarity: 'poco común',
        price: 37.5,
        probability: 2.2702
      },
      {
        name: 'Nintendo Switch Online 3-Month Membership',
        rarity: 'poco común',
        price: 33.71,
        probability: 2.4570
      },
      {
        name: '2.0 Screwdriver to Fix Nintendo Switch Joy-Con Joystick',
        rarity: 'poco común',
        price: 26.25,
        probability: 2.8713
      },
      {
        name: 'Silicone Rubber Skin Shell Cover Case for Switch Controller',
        rarity: 'poco común',
        price: 22.61,
        probability: 3.0979
      },
      {
        name: 'NES AV Audio Video Cable (Retro-Bit)',
        rarity: 'poco común',
        price: 20.89,
        probability: 3.2115
      },
      {
        name: 'Tempered Glass Pack for NS/Nintendo Switch 2',
        rarity: 'poco común',
        price: 19.69,
        probability: 3.6938
      },
      {
        name: '$5 Nintendo eShop Digital Gift Card',
        rarity: 'poco común',
        price: 18.75,
        probability: 3.7668
      },
      {
        name: 'Nintendo NES Custom Hard Case',
        rarity: 'común',
        price: 18.71,
        probability: 3.7697
      },
      {
        name: "America's Test Kitchen: Let's Get Cooking for Nintendo DS",
        rarity: 'común',
        price: 18.71,
        probability: 3.7697
      },
      {
        name: 'L/R SL SR ZL ZR L Button Ribbon Flex Cable Key Repair Sets',
        rarity: 'común',
        price: 13.09,
        probability: 11.9611
      },
      {
        name: 'Replacement 3.5mm Headphone Jack Port Socket for Switch NS Console',
        rarity: 'común',
        price: 11.21,
        probability: 12.4387
      },
      {
        name: 'Thumb Grips Cover for Joy-Con Switch Lite',
        rarity: 'común',
        price: 7.5,
        probability: 13.4413
      },
      {
        name: 'Nintendo DS Lite Clip On Headset - Black',
        rarity: 'común',
        price: 7.46,
        probability: 13.4518
      },
      {
        name: 'Nintendo JoyCon Strawberry Joystick Thumb Grips Cover',
        rarity: 'común',
        price: 6.56,
        probability: 13.7070
      }
    ]
  },
  {
    id: 'stumble-guys-toys',
    name: 'Caja Misteriosa Juguetes Stumble Guys',
    price: 5.14,
    image: getImagePath('producto10.webp'),
    description: 'Descubre juguetes y figuras coleccionables de Stumble Guys en cada caja misteriosa',
    items: [
      {
        name: 'Stumble Guys Collectible Action Figures Pack',
        rarity: 'épico',
        price: 504.9,
        probability: 0.0100
      },
      {
        name: 'Bandai Mr Stumble Soft Toy',
        rarity: 'épico',
        price: 382.5,
        probability: 0.0100
      },
      {
        name: 'Stumble Guys Series 2 Collectible Figures 12-Pack Box',
        rarity: 'raro',
        price: 229.5,
        probability: 0.0100
      },
      {
        name: 'Stumble Guys Series 2 Hot Glove Mclove Plush Buddies',
        rarity: 'raro',
        price: 96.9,
        probability: 0.0500
      },
      {
        name: 'Stumble Guys Dragon Inferno Plush Buddies',
        rarity: 'raro',
        price: 76.5,
        probability: 0.0960
      },
      {
        name: 'Stumble Guys Sprinkles Huggable Plush',
        rarity: 'raro',
        price: 61.2,
        probability: 0.0951
      },
      {
        name: 'Stumble Guys S1 Action Figure Sprinkles',
        rarity: 'raro',
        price: 56.25,
        probability: 0.1448
      },
      {
        name: 'P.M.I. Stumble Guys Series 2 Stumbling Blocks Playset',
        rarity: 'poco común',
        price: 37.5,
        probability: 0.4099
      },
      {
        name: 'Stumble Guys Series 2 Boxing Roo Action Figure',
        rarity: 'poco común',
        price: 37.46,
        probability: 0.7121
      },
      {
        name: 'Stumble Guys Series 2 Dusk Dragon Action Figure',
        rarity: 'poco común',
        price: 30,
        probability: 1.3409
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'poco común',
        price: 8.92,
        probability: 8.0084
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'poco común',
        price: 7.65,
        probability: 8.9228
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 5.1,
        probability: 15.2000
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 4.58,
        probability: 10.8337
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 4.58,
        probability: 10.8337
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 1.5,
        probability: 14.0613
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 1.31,
        probability: 14.2866
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 0.75,
        probability: 14.9846
      }
    ]
  },
  {
    id: 'xbox-series-economica',
    name: 'Caja Misteriosa Xbox Series X/S Económica',
    price: 11.25,
    image: getImagePath('producto11.webp'),
    description: 'Descubre consolas Xbox Series X/S y accesorios en cada caja misteriosa',
    items: [
      {
        name: 'Xbox Series S Console 1TB with Controller',
        rarity: 'legendario',
        price: 2544.82,
        probability: 0.0100
      },
      {
        name: 'Xbox Series X Console (Renewed)',
        rarity: 'legendario',
        price: 2381.25,
        probability: 0.0100
      },
      {
        name: 'Xbox Serie S',
        rarity: 'épico',
        price: 1540.16,
        probability: 0.0100
      },
      {
        name: 'Microsoft Xbox Series S 512GB SSD Console and Controller',
        rarity: 'épico',
        price: 1406.25,
        probability: 0.0100
      },
      {
        name: 'Microsoft Xbox One X 1TB Console with Wireless Controller',
        rarity: 'épico',
        price: 1218.75,
        probability: 0.0100
      },
      {
        name: 'Xbox Elite Wireless Controller Series 2',
        rarity: 'épico',
        price: 708.86,
        probability: 0.0100
      },
      {
        name: 'Xbox Adaptive Controller',
        rarity: 'épico',
        price: 637.46,
        probability: 0.0100
      },
      {
        name: 'Xbox Gift Card',
        rarity: 'raro',
        price: 510,
        probability: 0.0100
      },
      {
        name: 'Xbox Wireless Controller – Sky Cipher Special Edition',
        rarity: 'raro',
        price: 382.5,
        probability: 0.0100
      },
      {
        name: 'Mando inalámbrico Xbox Blanco',
        rarity: 'raro',
        price: 316.2,
        probability: 0.0100
      },
      {
        name: 'Halo Infinito Xbox Serie X',
        rarity: 'raro',
        price: 265.2,
        probability: 0.0100
      },
      {
        name: 'Xbox Chat Headset',
        rarity: 'raro',
        price: 204,
        probability: 0.0100
      },
      {
        name: 'Xbox Series X/S Vertical Stand with Cooling Fan',
        rarity: 'raro',
        price: 127.5,
        probability: 0.0100
      },
      {
        name: 'Dual Charging Station for Xbox Wireless Controllers',
        rarity: 'poco común',
        price: 102,
        probability: 0.0100
      },
      {
        name: 'Soporte vertical de refrigeración para Xbox Series S',
        rarity: 'poco común',
        price: 101.48,
        probability: 0.0100
      },
      {
        name: 'Kit Pdp Juega Y Carga Xbox Series XS',
        rarity: 'poco común',
        price: 81.6,
        probability: 0.0100
      },
      {
        name: 'Xbox Controller Thumbstick Grips',
        rarity: 'poco común',
        price: 76.5,
        probability: 0.0100
      },
      {
        name: 'Xbox Series X Keychain',
        rarity: 'poco común',
        price: 61.2,
        probability: 0.0100
      },
      {
        name: 'Universal Adhesive Game Controller Organizer Wall Mount and Clip',
        rarity: 'poco común',
        price: 52.5,
        probability: 0.0100
      },
      {
        name: 'Xbox Gift Card',
        rarity: 'poco común',
        price: 51,
        probability: 0.0100
      },
      {
        name: 'Rainbow Stripes Decal Vinyl Skin Wrap for Xbox One S/X Controller',
        rarity: 'poco común',
        price: 48.75,
        probability: 0.0100
      },
      {
        name: 'Funda protectora para mando Xbox Series XS',
        rarity: 'poco común',
        price: 38.25,
        probability: 0.0157
      },
      {
        name: 'Front Housing Shell Case Cover for Xbox One Wireless Controller',
        rarity: 'poco común',
        price: 26.25,
        probability: 0.2641
      },
      {
        name: 'TX X-Clamp Removal Tool for Xbox 360',
        rarity: 'poco común',
        price: 14.96,
        probability: 3.7671
      },
      {
        name: 'ABXY Yellow Bullet Buttons Mod Kit for Xbox One',
        rarity: 'poco común',
        price: 14.63,
        probability: 4.0787
      },
      {
        name: 'HDMI Port Socket Interface Connector Jack Replacement for Xbox One/Slim S Console',
        rarity: 'poco común',
        price: 13.13,
        probability: 5.8064
      },
      {
        name: 'Xbox 360 Max Live Headset',
        rarity: 'poco común',
        price: 13.09,
        probability: 5.8579
      },
      {
        name: 'Plated Chrome D-Pad Key Button for Xbox One',
        rarity: 'poco común',
        price: 12,
        probability: 1.5174
      },
      {
        name: 'Battery Spring Tablets Conductive Spring for Xbox 360 Controller',
        rarity: 'poco común',
        price: 11.63,
        probability: 1.6575
      },
      {
        name: 'D-Pad Button Metal Dome Film Sticker for Xbox One',
        rarity: 'común',
        price: 11.21,
        probability: 1.8266
      },
      {
        name: '4 Pcs Silicone Thumb Stick Grip Caps',
        rarity: 'común',
        price: 11.18,
        probability: 1.8427
      },
      {
        name: '20 Pcs 9mm T8 Screws Head 7mm T6 Screw Set for Xbox One',
        rarity: 'común',
        price: 11.1,
        probability: 1.8756
      },
      {
        name: 'RB LB Switch Bumper Buttons Xbox One/360',
        rarity: 'común',
        price: 10.84,
        probability: 1.9952
      },
      {
        name: 'Xbox 360 Game Face Refill Pack',
        rarity: 'común',
        price: 10.69,
        probability: 2.0669
      },
      {
        name: 'Thumbstick Accent Rings Replacement for Xbox One Elite',
        rarity: 'común',
        price: 10.39,
        probability: 2.2182
      },
      {
        name: 'Silicone Skin Case Protective Gel Cover Grip for Xbox Series S/X',
        rarity: 'común',
        price: 9.98,
        probability: 5.9435
      },
      {
        name: 'Battery Back Cover Lid Door Case for Xbox One Controller',
        rarity: 'común',
        price: 9.38,
        probability: 6.8454
      },
      {
        name: 'LB RB Bumper Button Key Trigger Mod Kit for Xbox Series S/X',
        rarity: 'común',
        price: 9.34,
        probability: 6.9061
      },
      {
        name: 'Analog Stick Thumb Stick Grips Pack',
        rarity: 'común',
        price: 8.25,
        probability: 8.9215
      },
      {
        name: 'Silicone Analog Thumb Grips Caps',
        rarity: 'común',
        price: 7.5,
        probability: 10.6446
      },
      {
        name: 'Single Thumbsticks Cover',
        rarity: 'común',
        price: 7.46,
        probability: 10.7390
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 5.1,
        probability: 15.0000
      }
    ]
  },
  {
    id: 'star-wars-cards',
    name: 'Caja Misteriosa Cartas Coleccionables Star Wars',
    price: 15,
    image: getImagePath('producto12.webp'),
    description: 'Descubre cartas coleccionables de Star Wars en cada caja misteriosa',
    items: [
      {
        name: '2019 Topps Star Wars Mads Mikkelsen as Galen Erso',
        rarity: 'legendario',
        price: 2913.75,
        probability: 0.0100
      },
      {
        name: '2019 Topps Star Wars Andy Serkis as Supreme Leader Snoke',
        rarity: 'épico',
        price: 1830,
        probability: 0.0100
      },
      {
        name: '2018 Topps Star Wars Galaxy Mini Master Set',
        rarity: 'épico',
        price: 1308.75,
        probability: 0.0100
      },
      {
        name: '2023 Star Wars Topps Cards 1952 Topps Edition',
        rarity: 'raro',
        price: 558.75,
        probability: 0.0100
      },
      {
        name: 'Graded 1977 Topps Star Wars Han Solo #139 Series 3',
        rarity: 'raro',
        price: 258.75,
        probability: 0.0100
      },
      {
        name: "1996 Star Wars Finest Emperor's Royal Guard Card",
        rarity: 'raro',
        price: 187.5,
        probability: 0.0100
      },
      {
        name: '1977 Star Wars Vintage Luke Skywalker #235',
        rarity: 'poco común',
        price: 146.25,
        probability: 0.0100
      },
      {
        name: 'Star Wars Attack of the Clones Trading Card Booster Pack',
        rarity: 'poco común',
        price: 75,
        probability: 0.4043
      },
      {
        name: 'Jedi Knights Trading Card Game The Empire Starter Deck',
        rarity: 'poco común',
        price: 67.5,
        probability: 0.6129
      },
      {
        name: 'Jedi Knight, the Alliance Trading Cards Game Starter Deck',
        rarity: 'poco común',
        price: 52.46,
        probability: 1.4118
      },
      {
        name: '2012 Star Wars Galactic Files Heroes on Both Sides #HB8 Battle of Yavin',
        rarity: 'poco común',
        price: 33.71,
        probability: 3.9959
      },
      {
        name: 'Topps Star Wars Galaxy 3 Promo Trading Card P7',
        rarity: 'poco común',
        price: 26.25,
        probability: 6.0456
      },
      {
        name: '1977 Star Wars On the Track of the Droids #138',
        rarity: 'poco común',
        price: 22.46,
        probability: 7.4595
      },
      {
        name: '2012 Star Wars Galactic Files #153 Luke Skywalker',
        rarity: 'poco común',
        price: 15.75,
        probability: 4.8588
      },
      {
        name: '2012 Star Wars Galactic Files #164 Bib Fortuna',
        rarity: 'común',
        price: 15,
        probability: 5.0653
      },
      {
        name: '2012 Star Wars Galactic Files #124 Han Solo',
        rarity: 'común',
        price: 14.96,
        probability: 5.0759
      },
      {
        name: '1977 Star Wars The Rebel Troops #209',
        rarity: 'común',
        price: 11.25,
        probability: 9.1338
      },
      {
        name: '2012 Star Wars Galactic Files #14 Sabe',
        rarity: 'común',
        price: 11.21,
        probability: 9.1529
      },
      {
        name: '2012 Star Wars Galactic Files #124 Han Solo',
        rarity: 'común',
        price: 9.98,
        probability: 9.8034
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 8.18,
        probability: 10.8331
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 5.1,
        probability: 12.8485
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 4.58,
        probability: 13.2283
      }
    ]
  },
  {
    id: 'finding-apple-pink',
    name: 'Caja Misteriosa Encontrando Apple Rosa',
    price: 114.94,
    image: getImagePath('producto13.webp'),
    description: 'Descubre productos Apple en color rosa en cada caja misteriosa',
    items: [
      {
        name: 'iMac Rosa 24 pulgadas',
        rarity: 'épico',
        price: 6894.94,
        probability: 0.0100
      },
      {
        name: 'iPhone 15 Rosa 512gb',
        rarity: 'épico',
        price: 6629.78,
        probability: 0.0100
      },
      {
        name: 'iPad Air 256 GB 2022 Rosa',
        rarity: 'raro',
        price: 4538.85,
        probability: 0.0100
      },
      {
        name: 'iPad Mini Rosa',
        rarity: 'raro',
        price: 3325.09,
        probability: 0.0100
      },
      {
        name: 'Airpods Max Rosa',
        rarity: 'raro',
        price: 3172.09,
        probability: 0.0100
      },
      {
        name: 'items.apple-watch-series-11-pink',
        rarity: 'raro',
        price: 2362.5,
        probability: 0.0100
      },
      {
        name: 'Powerbeats Pro Inalámbrico Rosa',
        rarity: 'raro',
        price: 1285.16,
        probability: 0.0100
      },
      {
        name: 'Beats Solo 3 Inalámbrico Rosa',
        rarity: 'poco común',
        price: 928.16,
        probability: 0.0100
      },
      {
        name: 'Solo Loop trenzado en lavanda inglesa',
        rarity: 'poco común',
        price: 520.2,
        probability: 0.1679
      },
      {
        name: 'Folio inteligente de Apple',
        rarity: 'poco común',
        price: 392.7,
        probability: 0.6048
      },
      {
        name: 'Correa deportiva para Apple Watch',
        rarity: 'poco común',
        price: 290.7,
        probability: 1.6856
      },
      {
        name: 'Funda de silicona para iPhone',
        rarity: 'poco común',
        price: 214.2,
        probability: 3.6360
      },
      {
        name: 'Wireless Magnetic Portable Charger',
        rarity: 'poco común',
        price: 187.46,
        probability: 4.7568
      },
      {
        name: 'OtterBox iPhone 16e Case',
        rarity: 'poco común',
        price: 183.75,
        probability: 4.9376
      },
      {
        name: 'Stylus Pen for iPad',
        rarity: 'poco común',
        price: 149.96,
        probability: 6.9338
      },
      {
        name: 'Magsafe Wallet with Airtag Holder',
        rarity: 'poco común',
        price: 146.25,
        probability: 7.1974
      },
      {
        name: 'Anlmz 3 in 1 Charging Station for iPhone',
        rarity: 'poco común',
        price: 123.75,
        probability: 6.0451
      },
      {
        name: 'iPhone 14 Pro Coquette Pink Bow Case',
        rarity: 'común',
        price: 112.46,
        probability: 6.7711
      },
      {
        name: 'Funda compatible con iPad Mini.',
        rarity: 'común',
        price: 106.58,
        probability: 7.1838
      },
      {
        name: 'Cubierta de teclado rosa',
        rarity: 'común',
        price: 94.35,
        probability: 5.9672
      },
      {
        name: 'Sonix Case for Apple AirTags with Gold Carabiner',
        rarity: 'común',
        price: 93.75,
        probability: 6.0033
      },
      {
        name: 'Soporte seguro Belkin con correa para AirTag',
        rarity: 'común',
        price: 86.7,
        probability: 6.4440
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 51,
        probability: 9.2248
      },
      {
        name: 'Cable Lightning Rosa',
        rarity: 'común',
        price: 33.15,
        probability: 11.0372
      },
      {
        name: 'Funda compatible con Airpod rosa.',
        rarity: 'común',
        price: 30.6,
        probability: 11.3236
      }
    ]
  },
  {
    id: 'best-gaming-laptops',
    name: 'Caja Misteriosa Mejores Laptops Gaming',
    price: 109.2,
    image: getImagePath('producto14.webp'),
    description: 'Descubre las mejores laptops gaming y accesorios en cada caja misteriosa',
    items: [
      {
        name: 'Hoja de afeitar 18',
        rarity: 'legendario',
        price: 20909.25,
        probability: 0.0100
      },
      {
        name: 'Asus ROG Strix Scar 17 X3D',
        rarity: 'legendario',
        price: 20399.25,
        probability: 0.0100
      },
      {
        name: 'Hoja de afeitar 16',
        rarity: 'legendario',
        price: 19124.32,
        probability: 0.0100
      },
      {
        name: 'ASUS ROG Strix G17',
        rarity: 'épico',
        price: 10199.63,
        probability: 0.0100
      },
      {
        name: 'Asus ROG Flow Z13',
        rarity: 'épico',
        price: 9689.66,
        probability: 0.0100
      },
      {
        name: 'Asus ROG Zephyrus G14',
        rarity: 'épico',
        price: 6884.74,
        probability: 0.0100
      },
      {
        name: 'Acer Nitro 17',
        rarity: 'raro',
        price: 5099.81,
        probability: 0.0100
      },
      {
        name: 'HP Victus 15',
        rarity: 'raro',
        price: 4589.85,
        probability: 0.0100
      },
      {
        name: 'ASUS Chromebook Vibe CX55 Flip',
        rarity: 'raro',
        price: 3569.89,
        probability: 0.0100
      },
      {
        name: 'Pantalla FullHD de 14" HP 2023',
        rarity: 'raro',
        price: 1784.93,
        probability: 0.0100
      },
      {
        name: 'ACEMAGIC 16.0-inch Gaming Laptop',
        rarity: 'raro',
        price: 1646.25,
        probability: 0.0100
      },
      {
        name: 'SideTrak Solo 15.6" Touchscreen Full HD LED Monitor',
        rarity: 'raro',
        price: 1177.46,
        probability: 0.0100
      },
      {
        name: 'Avenka Ecobook 15.6" Laptop N4000 Processor 8GB RAM 256GB SSD',
        rarity: 'poco común',
        price: 899.96,
        probability: 0.0430
      },
      {
        name: 'A4tech Optical Gaming Keyboard',
        rarity: 'poco común',
        price: 600,
        probability: 0.2656
      },
      {
        name: 'KouRy Notebook Cooling Pad',
        rarity: 'poco común',
        price: 562.46,
        probability: 0.3336
      },
      {
        name: 'llano RGB Laptop Cooling Pad',
        rarity: 'poco común',
        price: 480,
        probability: 0.5502
      },
      {
        name: 'FIFINE XLR/USB Gaming Microphone Set',
        rarity: 'poco común',
        price: 354.45,
        probability: 1.1787
      },
      {
        name: 'EHO Portable Lap Desk with Cushion',
        rarity: 'poco común',
        price: 259.69,
        probability: 2.0947
      },
      {
        name: 'Compressed Air Duster Jet Dryer Blower',
        rarity: 'poco común',
        price: 206.25,
        probability: 2.8971
      },
      {
        name: 'EasySMX X15 PC Controller',
        rarity: 'poco común',
        price: 165,
        probability: 3.7210
      },
      {
        name: '2.4GHz Wireless Gaming Headset',
        rarity: 'poco común',
        price: 148.05,
        probability: 4.1241
      },
      {
        name: 'Cable Management Tray Kit',
        rarity: 'poco común',
        price: 127.5,
        probability: 4.6719
      },
      {
        name: 'Soporte básico para PS5',
        rarity: 'poco común',
        price: 117.26,
        probability: 2.8701
      },
      {
        name: '600CT MTG Card Sleeves',
        rarity: 'poco común',
        price: 112.2,
        probability: 2.9596
      },
      {
        name: 'Auriculares Bluetooth',
        rarity: 'poco común',
        price: 111.68,
        probability: 2.9691
      },
      {
        name: 'Anticámara',
        rarity: 'común',
        price: 107.1,
        probability: 3.0526
      },
      {
        name: 'Mini Video Game Keychains Pack',
        rarity: 'común',
        price: 102,
        probability: 3.1486
      },
      {
        name: 'One Handed RGB Backlit Gaming Keyboard',
        rarity: 'común',
        price: 74.96,
        probability: 11.6278
      },
      {
        name: 'Wired Gaming Keyboard and Mouse',
        rarity: 'común',
        price: 67.5,
        probability: 12.1665
      },
      {
        name: 'Jadaol Cat 6 Ethernet Cable 10ft 2Pack',
        rarity: 'común',
        price: 56.21,
        probability: 13.0290
      },
      {
        name: 'Among Us Figurine',
        rarity: 'común',
        price: 45.9,
        probability: 13.8704
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 40.8,
        probability: 14.3063
      }
    ]
  },
  {
    id: 'just-rolex',
    name: 'Caja Misteriosa Solo Rolex',
    price: 2549.93,
    image: getImagePath('producto15.webp'),
    description: 'Descubre relojes Rolex y accesorios de lujo en cada caja misteriosa',
    items: [
      {
        name: 'Rolex Oyster Perpetual 39 de segunda mano con esfera de rodio oscuro',
        rarity: 'raro',
        price: 40798.54,
        probability: 0.1680
      },
      {
        name: 'Explorador Rolex',
        rarity: 'raro',
        price: 36718.69,
        probability: 0.2301
      },
      {
        name: 'Rolex usado Oyster Perpetual Datejust dos tonos 18KT',
        rarity: 'raro',
        price: 35698.73,
        probability: 0.4000
      },
      {
        name: 'Rolex Datejust 36',
        rarity: 'raro',
        price: 33658.8,
        probability: 0.0490
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'poco común',
        price: 20399.25,
        probability: 0.0590
      },
      {
        name: 'Caja de almacenamiento para Rolex con almohadas para relojes suaves y flexibles',
        rarity: 'poco común',
        price: 15299.44,
        probability: 0.1000
      },
      {
        name: 'Bobinadora automática de relojes con pantalla táctil',
        rarity: 'poco común',
        price: 7394.74,
        probability: 0.4000
      },
      {
        name: 'Caja enrolladora de reloj automática de madera con pantalla táctil LCD',
        rarity: 'poco común',
        price: 3646.39,
        probability: 8.0000
      },
      {
        name: 'items.steel-diamond-bezel-for-datejust-rolex',
        rarity: 'poco común',
        price: 3580.09,
        probability: 8.0000
      },
      {
        name: 'Limpiador ultrasónico de relojes 15L Cuerpo de acero inoxidable',
        rarity: 'poco común',
        price: 3569.89,
        probability: 9.0000
      },
      {
        name: 'Pulsera de oro amarillo de 14 quilates con talla de diamante',
        rarity: 'común',
        price: 2549.93,
        probability: 10.0900
      },
      {
        name: 'Correa de reloj Correa de acero en oro de 18 quilates',
        rarity: 'común',
        price: 2039.93,
        probability: 11.9200
      },
      {
        name: 'Apple Watch Series 10',
        rarity: 'común',
        price: 1937.93,
        probability: 17.0000
      },
      {
        name: 'Reloj inteligente fósil',
        rarity: 'común',
        price: 1535.06,
        probability: 11.1000
      },
      {
        name: 'Abridor de caja de reloj',
        rarity: 'común',
        price: 790.46,
        probability: 12.0000
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 510,
        probability: 11.5000
      }
    ]
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === id)
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2
  }).format(price)
}

export const getRarityColor = (rarity) => {
  const colors = {
    'legendario': '#ffd700',
    'épico': '#9d4edd',
    'raro': '#4cc9f0',
    'poco común': '#52b788',
    'común': '#adb5bd'
  }
  return colors[rarity] || colors['común']
}

