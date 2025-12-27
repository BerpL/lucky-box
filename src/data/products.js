// Helper para construir rutas de imágenes con el base path correcto
const getImagePath = (imageName) => {
  const base = import.meta.env.BASE_URL
  return `${base}${imageName}`
}

// Función para determinar la rareza basada en el precio
const getRarityFromPrice = (price) => {
  if (price >= 5000) return 'legendario'
  if (price >= 2000) return 'épico'
  if (price >= 500) return 'raro'
  if (price >= 100) return 'poco común'
  return 'común'
}

export const products = [
  {
    id: 'digital-discovery',
    name: 'Caja Misteriosa Descubrimiento Digital',
    price: 25.95, // 6.92 USD * 3.75 = 25.95 PEN
    originalPrice: 35.03, // 25.95 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/202528/conversions/4e6af23b1c65f32aeb8d06f0a515d62a-webp.webp',
    description: 'Descubre tecnología de última generación en cada caja misteriosa',
    items: [
      {
        name: 'iPad Pro 11',
        rarity: 'legendario',
        price: 5437.5, // 1450 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192989/conversions/c63458cd2d8ed8c5a64d4660542f65d4-default.png?v=10'
      },
      {
        name: 'Beats Studio 3 inalámbrico',
        rarity: 'épico',
        price: 1540.16, // 410.71 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192991/conversions/eb999d34548257419f065b4efa395503-default.png?v=10'
      },
      {
        name: 'HomePod de Apple',
        rarity: 'épico',
        price: 1433.06, // 382.15 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192999/conversions/a24b8349480beaf5f57e2cbf3f798041-default.png?v=10'
      },
      {
        name: 'Apple TV 4k',
        rarity: 'raro',
        price: 923.06, // 246.15 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193028/conversions/12612d2024b024729b19b53f262b6f1d-default.png?v=10'
      },
      {
        name: 'Airpods',
        rarity: 'raro',
        price: 673.16, // 179.51 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192997/conversions/0e194f43c78db68159437fa1de1eb186-default.png?v=10'
      },
      {
        name: 'Ratón mágico 2',
        rarity: 'raro',
        price: 443.7, // 118.32 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193031/conversions/c536fb701a5b249718693c6ed10671db-default.png?v=10'
      },
      {
        name: 'Cable de Lightning a USBC',
        rarity: 'poco común',
        price: 239.7, // 63.92 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192994/conversions/5ca9db38eec735255f70cc292f2551dd-default.png?v=10'
      },
      {
        name: 'Funda inteligente para iPad Mini 4',
        rarity: 'poco común',
        price: 239.7, // 63.92 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193029/conversions/bc97de58f8e55ade80424808ca7fcb3d-default.png?v=10'
      },
      {
        name: 'Adaptador de USBC a USB',
        rarity: 'poco común',
        price: 158.1, // 42.16 USD * 3.75
        probability: 0.0845, // 0.000845214 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193033/conversions/2b86f8c27c9cc9a86a774095d2cb4b9a-default.png?v=10'
      },
      {
        name: 'Auriculares plegables negros',
        rarity: 'poco común',
        price: 107.1, // 28.56 USD * 3.75
        probability: 0.3514, // 0.003513923 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193615/conversions/2270321b827e930fd0c8d60cd72a8164-default.png?v=10'
      },
      {
        name: 'Cargador con enchufe USB de 4 puertos',
        rarity: 'poco común',
        price: 91.8, // 24.48 USD * 3.75
        probability: 0.5388, // 0.005388153 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193372/conversions/3715a7f06c0f26d5eda7e60a7b423939-default.png?v=10'
      },
      {
        name: 'Altavoz Bluetooth Inalámbrico',
        rarity: 'poco común',
        price: 50.96, // 13.59 USD * 3.75
        probability: 1.6864, // 0.016863802 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195179/conversions/9a8b87abfdaf8003457c7caa375b85a0-default.png?v=10'
      },
      {
        name: 'Popsocket',
        rarity: 'poco común',
        price: 50.96, // 13.59 USD * 3.75
        probability: 1.6864,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195177/conversions/dc051fe987705651b3191c3bd0812f43-default.png?v=10'
      },
      {
        name: 'Soporte dúo',
        rarity: 'poco común',
        price: 50.96, // 13.59 USD * 3.75
        probability: 1.6864,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195175/conversions/16d2f01cba847b84d460e1287c042f5d-default.png?v=10'
      },
      {
        name: 'Auricular con cable en la oreja',
        rarity: 'poco común',
        price: 50.96, // 13.59 USD * 3.75
        probability: 1.6864,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194707/conversions/284b8cc6efe5164114f531dfbffbf1b4-default.png?v=10'
      },
      {
        name: 'Cable micro USB corto',
        rarity: 'poco común',
        price: 50.96, // 13.59 USD * 3.75
        probability: 1.6864,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194699/conversions/6bad77cf71c6c119143ab0f4613dc9ae-default.png?v=10'
      },
      {
        name: 'Herramienta de limpieza para auriculares',
        rarity: 'poco común',
        price: 41.81, // 11.15 USD * 3.75
        probability: 2.1776, // 0.0217761 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194654/conversions/2b48cfe587bb2f9d7477b2e264c2417a-default.png?v=10'
      },
      {
        name: 'Foldable Phone Stand (Metal, Adjustable)',
        rarity: 'poco común',
        price: 35.7, // 9.52 USD * 3.75
        probability: 2.5831, // 0.025831414 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197944/conversions/23a479d67d71370d501c3bf0c123970e-default.png?v=10'
      },
      {
        name: 'Mini Smart Digital Alarm Clock',
        rarity: 'poco común',
        price: 33.15, // 8.84 USD * 3.75
        probability: 2.7739, // 0.027738915 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197948/conversions/d45004b37a9bcd169639886c8d11b1e8-default.png?v=10'
      },
      {
        name: 'Funda protectora S20 Ultra',
        rarity: 'poco común',
        price: 30.6, // 8.16 USD * 3.75
        probability: 2.9787, // 0.029787273 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193126/conversions/511f9c90220ae16688820d202d2fea53-default.png?v=10'
      },
      {
        name: 'Funda de cristal Huawei',
        rarity: 'poco común',
        price: 28.05, // 7.48 USD * 3.75
        probability: 4.7415, // 0.047415001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194723/conversions/0c588ce05bbeefad973e3894e9b59450-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 25.5, // 6.8 USD * 3.75
        probability: 5.0916, // 0.050916325 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201640/conversions/0cbe7a56b0666249640b3ec2e2de6daf-default.png?v=10'
      },
      {
        name: 'Funda De Silicona Compatible Con Airpods Amarillo',
        rarity: 'común',
        price: 24.98, // 6.66 USD * 3.75
        probability: 5.1669, // 0.051668674 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194411/conversions/ea89dda51aaa0eae4d024e2ba7804bfb-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 20.59, // 5.49 USD * 3.75
        probability: 9.6799, // 0.096799352 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203673/conversions/1fdbbc37be750400973f48fdfe6ec019-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 20.4, // 5.44 USD * 3.75
        probability: 9.7308, // 0.097307776 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203674/conversions/34353c518d495a91f753a7c8011ea619-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 16.31, // 4.35 USD * 3.75
        probability: 10.9080, // 0.109079869 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203675/conversions/1a48c116cefcba6c9e9452c5c2b8e346-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 15.26, // 4.07 USD * 3.75
        probability: 11.2327, // 0.112327252 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203676/conversions/d635b26815041f134df36bf4ce672a86-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 12.23, // 3.26 USD * 3.75
        probability: 12.2276, // 0.122276125 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203677/conversions/a539cfa45699e85ecee3f289f434b8c2-default.png?v=10'
      }
    ]
  },
  {
    id: 'apple-selection',
    name: 'Caja Misteriosa Selección de Apple',
    price: 252.08, // 67.22 USD * 3.75
    originalPrice: 340.31, // 252.08 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/203737/conversions/34d594225fe64486c96bf0e80601d764-webp.webp',
    description: 'Descubre productos exclusivos de Apple en cada caja misteriosa',
    items: [
      {
        name: 'Mac Pro Tower Hero Splitter',
        rarity: 'legendario',
        price: 35698.73, // 9519.66 USD * 3.75
        probability: 0.0001, // 1.0e-6 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196111/conversions/95e7aea6ed0d2864579da0dbacd5cf75-default.png?v=10'
      },
      {
        name: 'Pantalla Apple Pro XDR',
        rarity: 'legendario',
        price: 29589.15, // 7890.44 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194045/conversions/d2f0001ac43d5156e2b8770a0d491a66-default.png?v=10'
      },
      {
        name: 'Mac Pro',
        rarity: 'legendario',
        price: 28569.19, // 7618.45 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193764/conversions/62d46bc59d6d283616bbc2ffec8b995a-default.png?v=10'
      },
      {
        name: 'MacBook Pro Silver 1TB 16 Inch',
        rarity: 'legendario',
        price: 18359.32, // 4895.82 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196105/conversions/9800712796ce8cb79eb7d303a5119bc3-default.png?v=10'
      },
      {
        name: 'MacBook Pro Silver 14 Inch 1TB',
        rarity: 'legendario',
        price: 16574.4, // 4419.84 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196103/conversions/2bbb49d42519d5712c1ac179bc204b9a-default.png?v=10'
      },
      {
        name: 'iPhone 16 Pro 1Tb Desierto Titanio',
        rarity: 'épico',
        price: 8159.7, // 2175.92 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195272/conversions/11183512f025a849525658f5b7a1bf09-default.png?v=10'
      },
      {
        name: 'iPhone 16 Pro 512gb Blanco Titanio',
        rarity: 'épico',
        price: 6884.74, // 1835.93 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195275/conversions/c255155aef85c15d52ead3d4a007b8ad-default.png?v=10'
      },
      {
        name: 'iPhone 16 Pro Max 256Gb Negro Titanio',
        rarity: 'épico',
        price: 6374.78, // 1699.94 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195274/conversions/3f5c10d4c116fd55572683b9e9f5a821-default.png?v=10'
      },
      {
        name: 'iPhone Air Skyblue 1TB',
        rarity: 'épico',
        price: 5437.5, // 1450 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203689/conversions/862949c35404f02bef5924a252486a8b-default.png?v=10'
      },
      {
        name: 'iPad Pro 11',
        rarity: 'épico',
        price: 5437.5, // 1450 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192989/conversions/c63458cd2d8ed8c5a64d4660542f65d4-default.png?v=10'
      },
      {
        name: 'iPhone Air Lightgold 512Gb',
        rarity: 'épico',
        price: 4500, // 1200 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203690/conversions/81f9cc00392205c1a1f52552c61c63cd-default.png?v=10'
      },
      {
        name: 'Apple Watch Ultra 2',
        rarity: 'raro',
        price: 3824.85, // 1019.96 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195830/conversions/94dabb36455016f91062f7263d5faaa7-default.png?v=10'
      },
      {
        name: 'iPhone 14 más 128GB',
        rarity: 'raro',
        price: 3722.85, // 992.76 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194646/conversions/035f68b2e385fe3bda32eac5c0b06b7b-default.png?v=10'
      },
      {
        name: 'Apple Watch Serie 8',
        rarity: 'raro',
        price: 2549.93, // 679.98 USD * 3.75
        probability: 0.0046, // 0.000046054 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194648/conversions/1619e4605ae4776d39601a75cb49d3f7-default.png?v=10'
      },
      {
        name: 'Apple Watch Series 10 Denim Sport Band',
        rarity: 'raro',
        price: 2141.92, // 571.18 USD * 3.75
        probability: 0.0183, // 0.000183203 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195827/conversions/c345a51deb41749d51cb1f8233548582-default.png?v=10'
      },
      {
        name: 'Teclado mágico para iPad Pro',
        rarity: 'raro',
        price: 1846.13, // 492.3 USD * 3.75
        probability: 0.0499, // 0.00049853 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193775/conversions/a0e652c2163cab80c5ced66609eeebcc-default.png?v=10'
      },
      {
        name: 'AirPods Pro',
        rarity: 'raro',
        price: 1280.06, // 341.35 USD * 3.75
        probability: 0.3386, // 0.003385891 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193062/conversions/57459f9328ae5972c8d08c097216a557-default.png?v=10'
      },
      {
        name: 'Apple TV 4k',
        rarity: 'raro',
        price: 923.06, // 246.15 USD * 3.75
        probability: 1.1334, // 0.011333938 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193028/conversions/12612d2024b024729b19b53f262b6f1d-default.png?v=10'
      },
      {
        name: 'Cargador MagSafe Dúo',
        rarity: 'poco común',
        price: 826.16, // 220.31 USD * 3.75
        probability: 1.5733, // 0.015732638 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193774/conversions/1ddb9c38ab522718e826c46258450db2-default.png?v=10'
      },
      {
        name: 'Solo Loop trenzado',
        rarity: 'poco común',
        price: 520.2, // 138.72 USD * 3.75
        probability: 4.4309, // 0.044309422 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193766/conversions/05fe345b270a072ffe14ea284feb9671-default.png?v=10'
      },
      {
        name: 'HomePod Mini',
        rarity: 'poco común',
        price: 494.7, // 131.92 USD * 3.75
        probability: 4.8303, // 0.048303124 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193765/conversions/94d0b204fc4d897a89d20d9d844e7b38-default.png?v=10'
      },
      {
        name: 'Folio inteligente para iPad Mini',
        rarity: 'poco común',
        price: 316.2, // 84.32 USD * 3.75
        probability: 8.8375, // 0.088374949 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193767/conversions/7e6944d9bb9d2b4f94fc34413f770542-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'poco común',
        price: 306, // 81.6 USD * 3.75
        probability: 9.1479, // 0.091478879 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201647/conversions/5ae31cd6364ab7ce529b803b230f155a-default.png?v=10'
      },
      {
        name: 'Correa deportiva para Apple Watch',
        rarity: 'poco común',
        price: 290.7, // 77.52 USD * 3.75
        probability: 9.6340, // 0.096340371 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193684/conversions/4626c40303bd0fddd5b485b56884395f-default.png?v=10'
      },
      {
        name: 'Bucle de manzana',
        rarity: 'poco común',
        price: 260.1, // 69.36 USD * 3.75
        probability: 8.9223, // 0.089223329 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193058/conversions/11801070fd54c4669fd4e91530cc2884-default.png?v=10'
      },
      {
        name: 'Llavero de cuero AirTag',
        rarity: 'poco común',
        price: 255, // 68 USD * 3.75
        probability: 9.0777, // 0.090776671 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193773/conversions/f78f20a1545aadf02f85e55da585c979-default.png?v=10'
      },
      {
        name: 'Sistema de TV de montaje profesional',
        rarity: 'común',
        price: 224.4, // 59.84 USD * 3.75
        probability: 3.7142, // 0.037142099 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193213/conversions/273cc8623a2df47c53450aed4c3e926d-default.png?v=10'
      },
      {
        name: 'Apple Watch Rhinestone Band',
        rarity: 'común',
        price: 91.8, // 24.48 USD * 3.75
        probability: 5.8178, // 0.058177888 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197908/conversions/be6264f1566762dab9b27c1f6cf4e361-default.png?v=10'
      },
      {
        name: 'Funda para Airpods Mc Chips',
        rarity: 'común',
        price: 86.7, // 23.12 USD * 3.75
        probability: 5.9191, // 0.059190741 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193263/conversions/10b3e4948fa346cae6e7c83dfcac4749-default.png?v=10'
      },
      {
        name: 'Correas elásticas compatibles con Apple Watch',
        rarity: 'común',
        price: 58.65, // 15.64 USD * 3.75
        probability: 6.5085, // 0.065084988 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194411/conversions/ea89dda51aaa0eae4d024e2ba7804bfb-default.png?v=10'
      },
      {
        name: 'Funda para AirPods',
        rarity: 'común',
        price: 56.06, // 14.95 USD * 3.75
        probability: 6.5657, // 0.065657427 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193024/conversions/de5b9d73acf8dde1423c70dde278b579-default.png?v=10'
      },
      {
        name: 'Wireless Charging Pad (Generic, Qi Standard)',
        rarity: 'común',
        price: 51, // 13.6 USD * 3.75
        probability: 6.6792, // 0.066792018 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197925/conversions/136f9d1dc1a706fe7ef875cf23bb50bc-default.png?v=10'
      },
      {
        name: 'Apple Watch USB-C Charger',
        rarity: 'común',
        price: 45.9, // 12.24 USD * 3.75
        probability: 6.7955, // 0.06795484 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197928/conversions/b4e6217db2188a3761ab8b7a6a38a1f6-default.png?v=10'
      }
    ]
  },
  {
    id: 'galaxy-z-flip',
    name: 'Caja Misteriosa Galaxy Z Flip',
    price: 66.3, // 17.68 USD * 3.75
    originalPrice: 89.51, // 66.3 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/202534/conversions/e242d70cf018df6cc84779eb2adf138b-webp.webp',
    description: 'Descubre dispositivos Galaxy Z Flip y accesorios en cada caja misteriosa',
    items: [
      {
        name: 'Galaxy Z Flip Plata 512Gb',
        rarity: 'épico',
        price: 7139.74, // 1903.93 USD * 3.75
        probability: 0.0115, // 0.000115354 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195641/conversions/8164ad1e9502e7e3ebdea1ecb4309954-default.png?v=10'
      },
      {
        name: 'Galaxy Z Flip 6',
        rarity: 'épico',
        price: 6986.74, // 1863.13 USD * 3.75
        probability: 0.0131, // 0.000131027 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195639/conversions/6f1ab87d810f98772ae8129788d07efd-default.png?v=10'
      },
      {
        name: 'Galaxy Z Flip 6 Melocotón',
        rarity: 'épico',
        price: 6884.74, // 1835.93 USD * 3.75
        probability: 0.0143, // 0.000142642 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195644/conversions/5889ffa996a5a3abf8e8ef10f1409b92-default.png?v=10'
      },
      {
        name: 'Galaxy Z Flip 6 Azul',
        rarity: 'épico',
        price: 6629.78, // 1767.94 USD * 3.75
        probability: 0.0176, // 0.000176379 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195643/conversions/6261a4481518b799dc189dbc0d98d9a2-default.png?v=10'
      },
      {
        name: 'Galaxy Z flip 6 Amarillo',
        rarity: 'épico',
        price: 6629.78, // 1767.94 USD * 3.75
        probability: 0.0176,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195642/conversions/86844afcb0be07e7edf7c1c7b7c580fc-default.png?v=10'
      },
      {
        name: 'Galaxy Z Flip Menta',
        rarity: 'épico',
        price: 6629.78, // 1767.94 USD * 3.75
        probability: 0.0176,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195640/conversions/46f3ec76bf4cf2d645bcfe0dec412c15-default.png?v=10'
      },
      {
        name: 'Galaxy Z Flip5 512gb',
        rarity: 'épico',
        price: 4589.85, // 1223.96 USD * 3.75
        probability: 0.0964, // 0.000964115 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194903/conversions/3c8750b9ef1a6b75251b972606e2966f-default.png?v=10'
      },
      {
        name: 'Funda de silicona con anillo para Galaxy Z Flip 3',
        rarity: 'poco común',
        price: 214.2, // 57.12 USD * 3.75
        probability: 3.6852, // 0.036851961 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193800/conversions/01234a744124a935cbaee81d1826b0ac-default.png?v=10'
      },
      {
        name: 'Samsung Galaxy Z Flip 5 Case Cover Burgundy',
        rarity: 'poco común',
        price: 131.25, // 35 USD * 3.75
        probability: 3.9487, // 0.039487274 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201435/conversions/66c95a139dc0f360583b9f38ec4c927a-default.png?v=10'
      },
      {
        name: 'Samsung Galaxy Z Flip 4 Full Cover Shell',
        rarity: 'poco común',
        price: 105, // 28 USD * 3.75
        probability: 4.0360, // 0.040359868 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201437/conversions/9e3b3fdc36b87000c30fefabe3745625-default.png?v=10'
      },
      {
        name: 'Samsung Galaxy Z Flip 6 Brown Leather Case',
        rarity: 'poco común',
        price: 97.5, // 26 USD * 3.75
        probability: 4.0613, // 0.040612704 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201436/conversions/f5de27408268f9055f4c7a98ee376a37-default.png?v=10'
      },
      {
        name: 'Plataforma de carga inalámbrica para Samsung',
        rarity: 'poco común',
        price: 91.8, // 24.48 USD * 3.75
        probability: 4.0806, // 0.040805918 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193802/conversions/1aa40bb309ee3d3e2e697f0704877a18-default.png?v=10'
      },
      {
        name: 'Adaptador tipo C a 35 mm',
        rarity: 'común',
        price: 66.3, // 17.68 USD * 3.75
        probability: 7.4999, // 0.074998829 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193130/conversions/d65b5f3565263495e8e0a9fb560ddca3-default.png?v=10'
      },
      {
        name: 'Funda Buds Case Con Cerradura Verde',
        rarity: 'común',
        price: 66.26, // 17.67 USD * 3.75
        probability: 7.5001, // 0.075001171 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194479/conversions/351ac36cc88cf36360913a53b988a1f1-default.png?v=10'
      },
      {
        name: 'Funda Galaxy Buds',
        rarity: 'común',
        price: 48.45, // 12.92 USD * 3.75
        probability: 15.9597, // 0.159597374 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193128/conversions/19e4eb8ba92f91617cb56b46f08e41ab-default.png?v=10'
      },
      {
        name: 'Samsung Galaxy Watch Charger',
        rarity: 'común',
        price: 30.6, // 8.16 USD * 3.75
        probability: 16.1987, // 0.161987199 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197961/conversions/97638f8f0c3060e5e3ac10afc851677c-default.png?v=10'
      },
      {
        name: 'Samsung Galaxy Z Flip 6 Case with Screen Protector',
        rarity: 'común',
        price: 15.75, // 4.2 USD * 3.75
        probability: 16.4003, // 0.164002619 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201434/conversions/858aa29d449a6c6cfde82074ee77177a-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 12.75, // 3.4 USD * 3.75
        probability: 16.4413, // 0.164412809 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201654/conversions/de37dc084933b14c9ff8c3ec42a11c18-default.png?v=10'
      }
    ]
  },
  {
    id: 'new-years-eve',
    name: 'Caja Misteriosa New Years Eve',
    price: 169.43, // 45.18 USD * 3.75
    originalPrice: 228.73, // 169.43 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/195346/conversions/5f96f58b453592234d47d1115a60de49-webp.webp',
    description: 'Celebra el Año Nuevo con premios increíbles en cada caja misteriosa',
    items: [
      {
        name: 'Entradas y hotel para la experiencia de Nueva York',
        rarity: 'legendario',
        price: 50998.16, // 13599.51 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194994/conversions/73fa54c5cffefa0f043a4f60d9e55872-default.png?v=10'
      },
      {
        name: 'Bombardero Gucci',
        rarity: 'legendario',
        price: 32128.84, // 8567.69 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194991/conversions/326bdaba4a1ae58cff036f879fe420ff-default.png?v=10'
      },
      {
        name: 'Honda CBR 300R 2019',
        rarity: 'legendario',
        price: 30609.11, // 8162.43 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194117/conversions/379af83e09c7a2558701962564f0c879-default.png?v=10'
      },
      {
        name: 'Billetes de primera clase de Emirates para 1',
        rarity: 'legendario',
        price: 25499.1, // 6799.76 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195006/conversions/bcc11a68ac2023662415687e62720d45-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'legendario',
        price: 10199.63, // 2719.9 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201643/conversions/cc2c4400d6f9d96e21095dec4d0c12cc-default.png?v=10'
      },
      {
        name: 'iMac Amarillo 512GB',
        rarity: 'épico',
        price: 8680.9, // 2314.64 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194403/conversions/609a17b6e108567643228d9fbfefe5e6-default.png?v=10'
      },
      {
        name: 'Libro Galaxy Pro',
        rarity: 'épico',
        price: 8669.7, // 2311.92 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193746/conversions/a9894d1aba671dbfebbaa4604b213704-default.png?v=10'
      },
      {
        name: 'Huawei P40 Pro 256Gb',
        rarity: 'raro',
        price: 4090.05, // 1090.68 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193413/conversions/f673a1bdbc7270c3f3b0b8c3a90ed807-default.png?v=10'
      },
      {
        name: 'iPad Mini Rosa',
        rarity: 'raro',
        price: 3325.09, // 886.69 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193740/conversions/e347e52dafb796702d71ca015d9959b9-default.png?v=10'
      },
      {
        name: 'Estación de juegos 5',
        rarity: 'raro',
        price: 2804.89, // 747.97 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193376/conversions/08a68503d2a65c7371a5d940155fc133-default.png?v=10'
      },
      {
        name: 'Camiseta normal',
        rarity: 'raro',
        price: 2611.09, // 696.29 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193672/conversions/f4bb6b62d21012c882e79513dad2b16e-default.png?v=10'
      },
      {
        name: 'Panasonic Lumix DMC TZ100EG',
        rarity: 'raro',
        price: 2356.13, // 628.3 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193637/conversions/8d8327887d3acdab6fd184e58897aa35-default.png?v=10'
      },
      {
        name: 'Robot aspirador',
        rarity: 'raro',
        price: 1790.03, // 477.34 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193004/conversions/7c6ccdf7b0cecc536473d6b091d3a992-default.png?v=10'
      },
      {
        name: 'Sudadera Lacoste Suprema',
        rarity: 'raro',
        price: 1438.16, // 383.51 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193203/conversions/3eb99aeb9cf0f495bca0e7ae217aab9a-default.png?v=10'
      },
      {
        name: 'HomePod de Apple',
        rarity: 'raro',
        price: 1433.06, // 382.15 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192999/conversions/a24b8349480beaf5f57e2cbf3f798041-default.png?v=10'
      },
      {
        name: 'Reloj Huawei Gt3',
        rarity: 'raro',
        price: 1427.96, // 380.79 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194659/conversions/68c5e24464027601b0d4f100bc0e5fbd-default.png?v=10'
      },
      {
        name: 'Gorra negra blanquecina',
        rarity: 'poco común',
        price: 851.66, // 227.11 USD * 3.75
        probability: 0.0280, // 0.00027968 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193279/conversions/f66638318c3f525203d50edd0af2dc07-default.png?v=10'
      },
      {
        name: 'Airpods',
        rarity: 'poco común',
        price: 673.16, // 179.51 USD * 3.75
        probability: 0.1068, // 0.00106782 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192997/conversions/0e194f43c78db68159437fa1de1eb186-default.png?v=10'
      },
      {
        name: 'Impresión Polaroid Hola',
        rarity: 'poco común',
        price: 418.2, // 111.52 USD * 3.75
        probability: 0.7237, // 0.0072374 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193649/conversions/0ffa216d262d3a7923bd6d738b4db88f-default.png?v=10'
      },
      {
        name: 'Hausse Lighted Christmas Outdoor Decor, 37.5" Height',
        rarity: 'poco común',
        price: 356.25, // 95 USD * 3.75
        probability: 1.1522, // 0.01152171 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206371/conversions/e513c4ffcd3dcf6310fd0ebe576bc20f-default.png?v=10'
      },
      {
        name: 'Disco Ball Party Lights Indoor Outdoor',
        rarity: 'poco común',
        price: 337.5, // 90 USD * 3.75
        probability: 1.3263, // 0.01326279 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206369/conversions/d0f11c23599c569f29be0f5bcc711783-default.png?v=10'
      },
      {
        name: 'Christmas Tree Skirt 48Inch Buffalo Red and Black Plaid Decor',
        rarity: 'poco común',
        price: 262.5, // 70 USD * 3.75
        probability: 2.3287, // 0.02328667 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206366/conversions/dad45d6e90450cbe8de0e6d9b28e65ec-default.png?v=10'
      },
      {
        name: 'Oversized Hoodie Blanket',
        rarity: 'poco común',
        price: 262.5, // 70 USD * 3.75
        probability: 2.3287,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206361/conversions/c08da9e60fdd157b0fccfbb491a8ca29-default.png?v=10'
      },
      {
        name: 'Color Changing Christmas Lights, 335 LED RGB',
        rarity: 'poco común',
        price: 240, // 64 USD * 3.75
        probability: 2.7571, // 0.02757078 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206372/conversions/5075c75d9cf57e79baae3672c962aeac-default.png?v=10'
      },
      {
        name: 'Exploding Gift Box - 2 pcs Christmas Surprise Box Pop Up',
        rarity: 'poco común',
        price: 187.5, // 50 USD * 3.75
        probability: 4.0886, // 0.04088649 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206370/conversions/645d36e6fe0d3661357d8ecb3257ca89-default.png?v=10'
      },
      {
        name: '8 Pack Christmas Non-Snap Party Favor',
        rarity: 'poco común',
        price: 176.25, // 47 USD * 3.75
        probability: 4.6743, // 0.04674324 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206363/conversions/7939148b2518a9b59486c206430da093-default.png?v=10'
      },
      {
        name: '24 PCS Christmas Light Up Party Favors Supplies',
        rarity: 'poco común',
        price: 168.75, // 45 USD * 3.75
        probability: 4.9450, // 0.04944998 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206362/conversions/34f58ca953bd55d61d91e4b353b029e9-default.png?v=10'
      },
      {
        name: '8pcs 2026 New Year Eyeglasses LED Light Up',
        rarity: 'poco común',
        price: 157.5, // 42 USD * 3.75
        probability: 5.3807, // 0.05380678 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206374/conversions/902f94d1ff7f41c4db3cc10ea070799b-default.png?v=10'
      },
      {
        name: '22Pcs Christmas Glowing Pong Set Party Game Light Up',
        rarity: 'común',
        price: 142.5, // 38 USD * 3.75
        probability: 7.1277, // 0.07127677 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206373/conversions/7b63f335eea070de9b22276e8026912e-default.png?v=10'
      },
      {
        name: 'New Years Eve Party Supplies 2026',
        rarity: 'común',
        price: 142.5, // 38 USD * 3.75
        probability: 7.1277,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206364/conversions/2bd67bd3b49896d906d26a57ca3dbb96-default.png?v=10'
      },
      {
        name: '2 Pack Christmas Headband',
        rarity: 'común',
        price: 135, // 36 USD * 3.75
        probability: 7.5404, // 0.07540415 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206365/conversions/a05aafda30675700aaa2cceb902e4057-default.png?v=10'
      },
      {
        name: '30 PCS Christmas Oval Paper Plates',
        rarity: 'común',
        price: 131.25, // 35 USD * 3.75
        probability: 7.7557, // 0.07755662 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206367/conversions/d7f2d257a7f8fcc0f1254217736e3326-default.png?v=10'
      },
      {
        name: 'Lámpara de cristal del Himalaya',
        rarity: 'común',
        price: 126.98, // 33.86 USD * 3.75
        probability: 8.0085, // 0.08008549 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193373/conversions/39eff73e0e847345d4c42d8e021ced70-default.png?v=10'
      },
      {
        name: 'Micrófono inalámbrico para karaoke',
        rarity: 'común',
        price: 117.3, // 31.28 USD * 3.75
        probability: 8.6117, // 0.08611737 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193458/conversions/a7d709ecfec73221f4264548f4645eb4-default.png?v=10'
      },
      {
        name: 'Fuente del volcán de humo bengalí',
        rarity: 'común',
        price: 102, // 27.2 USD * 3.75
        probability: 9.6597, // 0.09659689 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193751/conversions/b845c5349b7ddea2ae66e16fda0097ad-default.png?v=10'
      },
      {
        name: 'Bengalas de fiesta 2022',
        rarity: 'común',
        price: 50.96, // 13.59 USD * 3.75
        probability: 14.1686, // 0.14168592 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193753/conversions/57db94dd2b8f025cc3274e124269649f-default.png?v=10'
      }
    ]
  },
  {
    id: 'winter-special',
    name: 'Caja Misteriosa Winter Special',
    price: 81.56, // 21.75 USD * 3.75
    originalPrice: 110.11, // 81.56 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/195516/conversions/06bc3e5d3a3d57dce2c593a3826b5a56-webp.webp',
    description: 'Descubre productos especiales de invierno en cada caja misteriosa',
    items: [
      {
        name: 'Chaqueta de aviador Cocoon',
        rarity: 'legendario',
        price: 22959.38, // 6122.5 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193678/conversions/5d1c126d437b12611b9386911d7fec12-default.png?v=10'
      },
      {
        name: 'Asientos de cine en casa',
        rarity: 'legendario',
        price: 20399.25, // 5439.8 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194620/conversions/4152b574cac575c38953ccd410e92134-default.png?v=10'
      },
      {
        name: "Canada Goose Women's Shelburne Parka Coat",
        rarity: 'épico',
        price: 10496.25, // 2799 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200343/conversions/5ef4142c11f900ede7d6279f24481ff9-default.png?v=10'
      },
      {
        name: 'Estufa de pellets',
        rarity: 'épico',
        price: 6639.98, // 1770.66 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193236/conversions/02222159c35d87fab65148eadd205453-default.png?v=10'
      },
      {
        name: 'Gorro jacquard',
        rarity: 'raro',
        price: 2039.93, // 543.98 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194935/conversions/e500481609c3785ca6fb1f0bbfa32cf0-default.png?v=10'
      },
      {
        name: '1 Día en Hotel 4 Estrellas y Spa',
        rarity: 'raro',
        price: 1285.16, // 342.71 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193734/conversions/48fc3617cc0f2c8af42d56f6149aad14-default.png?v=10'
      },
      {
        name: 'Bufanda ajustada de seda con estampado de montaje',
        rarity: 'raro',
        price: 877.16, // 233.91 USD * 3.75
        probability: 0.0118, // 0.00011838 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194486/conversions/d836d922af9c3eb6bca1621f46c1e468-default.png?v=10'
      },
      {
        name: 'Guantes calefactados',
        rarity: 'poco común',
        price: 662.96, // 176.79 USD * 3.75
        probability: 0.0569, // 0.000569084 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194122/conversions/d7a4a72975f60c67d3bdf1f46bfb4157-default.png?v=10'
      },
      {
        name: 'Proyector Full HD Con Pantalla',
        rarity: 'poco común',
        price: 428.4, // 114.24 USD * 3.75
        probability: 0.3176, // 0.003176131 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193229/conversions/dca73fc4ec8c9b509d6333a3adc59483-default.png?v=10'
      },
      {
        name: "Men's Winter Coat Ski Snow Jacket",
        rarity: 'poco común',
        price: 296.25, // 79 USD * 3.75
        probability: 0.8367, // 0.00836746 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200341/conversions/b5b709cd9e2a0f8ba2030ec942c05c15-default.png?v=10'
      },
      {
        name: 'Chaqueta Kway',
        rarity: 'poco común',
        price: 285.6, // 76.16 USD * 3.75
        probability: 0.9047, // 0.009046854 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193257/conversions/59b61a94f8d8a77cea20952a2b7d64bd-default.png?v=10'
      },
      {
        name: 'Insole Foot Warmers for Women & Men',
        rarity: 'poco común',
        price: 258.75, // 69 USD * 3.75
        probability: 1.1015, // 0.011014726 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200342/conversions/6684489aee4a77db3d77cfa3d2bc7081-default.png?v=10'
      },
      {
        name: "Women's Fleece Lined Raincoat Overcoat White",
        rarity: 'poco común',
        price: 217.5, // 58 USD * 3.75
        probability: 1.4904, // 0.014903619 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200340/conversions/5e194838be2d6dedb4bcc82de81ccaac-default.png?v=10'
      },
      {
        name: "Women's Floral Print Full Zip Up Hoodie",
        rarity: 'poco común',
        price: 183.75, // 49 USD * 3.75
        probability: 1.9087, // 0.019086829 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200339/conversions/32104d41ba936e5167c2d6da736ace0f-default.png?v=10'
      },
      {
        name: "Adidas Men's Fleece Regular Tapered Pants",
        rarity: 'poco común',
        price: 150, // 40 USD * 3.75
        probability: 2.4444, // 0.024444199 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200336/conversions/a6d4d267b8d2716333d48f0c182971d0-default.png?v=10'
      },
      {
        name: "Men's Winter Thickened Warm Coats",
        rarity: 'poco común',
        price: 149.96, // 39.99 USD * 3.75
        probability: 2.4451, // 0.024450919 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200337/conversions/cee19273a974a420bf9565237878ae2f-default.png?v=10'
      },
      {
        name: 'Zip Up Loose Fit Hoodies for Women',
        rarity: 'poco común',
        price: 138.75, // 37 USD * 3.75
        probability: 2.6545, // 0.026545433 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200338/conversions/efd9c7e4e38142e8ebd55062bfecdfcc-default.png?v=10'
      },
      {
        name: 'Womens Fleece Lined Raincoat Overcoat B-army Green',
        rarity: 'poco común',
        price: 131.25, // 35 USD * 3.75
        probability: 2.8046, // 0.028045671 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200334/conversions/7ec61aa70e0afeb27457f422665eb55a-default.png?v=10'
      },
      {
        name: "Men's Long-Sleeve Polar Fleece Shirt Jacket for Winter",
        rarity: 'poco común',
        price: 123.75, // 33 USD * 3.75
        probability: 2.9631, // 0.029630695 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200335/conversions/0f42957128aec9770a809ae13cdb2364-default.png?v=10'
      },
      {
        name: 'Manta esponjosa',
        rarity: 'común',
        price: 81.08, // 21.62 USD * 3.75
        probability: 4.9159, // 0.049159485 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193228/conversions/1bbb6bf04573a8a9c73f6560de92f690-default.png?v=10'
      },
      {
        name: 'Baodini Travel Mini Umbrella with Case',
        rarity: 'común',
        price: 78.75, // 21 USD * 3.75
        probability: 5.0004, // 0.050004477 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200119/conversions/a383cb57599fa383d01d3710b3dfe5fd-default.png?v=10'
      },
      {
        name: 'Professional Heat Resistant Glove for Hair Styling Heat',
        rarity: 'común',
        price: 76.5, // 20.4 USD * 3.75
        probability: 5.0836, // 0.050836038 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196217/conversions/7345a8a9106f255ff4f44dca4c786f5d-default.png?v=10'
      },
      {
        name: 'Guantes para correr con pantalla táctil',
        rarity: 'común',
        price: 56.1, // 14.96 USD * 3.75
        probability: 9.4851, // 0.0948514 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193439/conversions/60b5055b7250dba02a04437214140c9c-default.png?v=10'
      },
      {
        name: 'Pomada para labios',
        rarity: 'común',
        price: 43.35, // 11.56 USD * 3.75
        probability: 10.4144, // 0.10414369 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193246/conversions/1da9fd50e24fcf601596d980b1426b0c-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 40.8, // 10.88 USD * 3.75
        probability: 10.6109, // 0.106108653 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201645/conversions/2ebc54a5f439ac1b7a79d5fa056b8902-default.png?v=10'
      },
      {
        name: 'Paraguas',
        rarity: 'común',
        price: 38.25, // 10.2 USD * 3.75
        probability: 10.8111, // 0.108110691 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193241/conversions/188acb451fa1006d35d3a87a2a9ee741-default.png?v=10'
      },
      {
        name: '6 Pairs of Winter Gloves',
        rarity: 'común',
        price: 26.21, // 6.99 USD * 3.75
        probability: 11.8084, // 0.118083614 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200344/conversions/2ac5ecf8f84d9be06095a3710e86ff1c-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 25.5, // 6.8 USD * 3.75
        probability: 11.8702, // 0.118701951 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201640/conversions/0cbe7a56b0666249640b3ec2e2de6daf-default.png?v=10'
      }
    ]
  },
  {
    id: 'all-i-want-for-xmas',
    name: 'Caja Misteriosa Todo lo que Quiero para Navidad',
    price: 101.96, // 27.19 USD * 3.75
    originalPrice: 137.65, // 101.96 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/195629/conversions/116301c9a55e901cba547c2c3786cf06-webp.webp',
    description: 'Descubre regalos navideños especiales en cada caja misteriosa',
    items: [
      {
        name: 'Explorador Rolex',
        rarity: 'legendario',
        price: 36718.69, // 9791.65 USD * 3.75
        probability: 0.0050, // 0.00005001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195584/conversions/8470ec7cd1115110d1bbf7f0c4f98af3-default.png?v=10'
      },
      {
        name: 'billetes de avión',
        rarity: 'legendario',
        price: 15299.44, // 4079.85 USD * 3.75
        probability: 0.0120, // 0.00012003 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195005/conversions/34bd4e93a195c2b4cd78f0bc076c7379-default.png?v=10'
      },
      {
        name: 'Galaxia S24 1T',
        rarity: 'épico',
        price: 8924.66, // 2379.91 USD * 3.75
        probability: 0.0206, // 0.00020576 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195628/conversions/c3e9c100029ad6582073922cf151cf58-default.png?v=10'
      },
      {
        name: 'iPhone 16 Pro Max 1Tb Titanio Natural',
        rarity: 'épico',
        price: 8669.7, // 2311.92 USD * 3.75
        probability: 0.0212, // 0.00021181 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195273/conversions/7eda9ded4bbf01db2397dbf06b54126f-default.png?v=10'
      },
      {
        name: 'Epson Home Cinema Android Tv Edición',
        rarity: 'raro',
        price: 3580.09, // 954.69 USD * 3.75
        probability: 0.0513, // 0.00051293 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193441/conversions/d2311d03a6ba55c5506835958970d985-default.png?v=10'
      },
      {
        name: 'Airpods Max Espacio Azul',
        rarity: 'raro',
        price: 3172.09, // 845.89 USD * 3.75
        probability: 0.0579, // 0.00057891 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193594/conversions/e3ee7427fda6c7ddb39cbf175a5570ef-default.png?v=10'
      },
      {
        name: 'Miniproyector',
        rarity: 'raro',
        price: 3172.09, // 845.89 USD * 3.75
        probability: 0.0579,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193890/conversions/a61a2d01368b6005cbd6f65474f93d70-default.png?v=10'
      },
      {
        name: 'Estación de juegos 5',
        rarity: 'raro',
        price: 2804.89, // 747.97 USD * 3.75
        probability: 0.0655, // 0.00065469 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193376/conversions/08a68503d2a65c7371a5d940155fc133-default.png?v=10'
      },
      {
        name: 'Xbox Serie X',
        rarity: 'raro',
        price: 2560.13, // 682.7 USD * 3.75
        probability: 0.0717, // 0.00071729 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193375/conversions/0983a5be00885ad4f02408b8178e46e4-default.png?v=10'
      },
      {
        name: 'Máquina de café expreso DeLonghi',
        rarity: 'raro',
        price: 1234.16, // 329.11 USD * 3.75
        probability: 0.1488, // 0.00148793 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193937/conversions/88f32f0f8f98aaf6700130452c3bbe7e-default.png?v=10'
      },
      {
        name: 'Casio Wave-Cceptor',
        rarity: 'raro',
        price: 1188.26, // 316.87 USD * 3.75
        probability: 0.1545, // 0.0015454 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193941/conversions/7c5524041d5b1eeb3d2d3a5e707def18-default.png?v=10'
      },
      {
        name: 'Mini refrigerador inteligente para el cuidado de la piel',
        rarity: 'raro',
        price: 1030.16, // 274.71 USD * 3.75
        probability: 0.1783, // 0.00178258 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194549/conversions/8aed584ad6c6422e79d190dc0a296fdc-default.png?v=10'
      },
      {
        name: 'My First Christmas Tree, Kids Interactive Holiday Toy',
        rarity: 'poco común',
        price: 750, // 200 USD * 3.75
        probability: 0.2448, // 0.00244846 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206269/conversions/6574d6169d2e7be8122a35cc5963d1b1-default.png?v=10'
      },
      {
        name: 'Pionero DDJ-SB3',
        rarity: 'poco común',
        price: 719.06, // 191.75 USD * 3.75
        probability: 0.2554, // 0.0025538 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193064/conversions/94e5f851e953a2009c41ca0ddd8d9f2e-default.png?v=10'
      },
      {
        name: 'Lámpara Con Altavoz Bluetooth Cargador Inalámbrico',
        rarity: 'poco común',
        price: 673.16, // 179.51 USD * 3.75
        probability: 0.2728, // 0.00272794 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193454/conversions/dc29bda4493f658b143e8c49a6535154-default.png?v=10'
      },
      {
        name: 'Decoway 6FT Artificial Christmas Tree',
        rarity: 'poco común',
        price: 637.5, // 170 USD * 3.75
        probability: 0.2881, // 0.00288054 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206261/conversions/28015dece38ccb2cbc7f846d4c27912f-default.png?v=10'
      },
      {
        name: 'Cámara Sony Playstation5 HD',
        rarity: 'poco común',
        price: 448.8, // 119.68 USD * 3.75
        probability: 0.4092, // 0.00409168 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193543/conversions/7eecf7d4329c31100984395d7b3fb430-default.png?v=10'
      },
      {
        name: 'Auriculares inalámbricos Bluetooth',
        rarity: 'poco común',
        price: 290.7, // 77.52 USD * 3.75
        probability: 0.6317, // 0.00631697 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193437/conversions/6652e079b30cc316f9a51a89016d0381-default.png?v=10'
      },
      {
        name: '6 FT Christmas Inflatable Santa Claus Outdoor Decorations',
        rarity: 'poco común',
        price: 262.5, // 70 USD * 3.75
        probability: 0.6996, // 0.0069956 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206267/conversions/a429d61f567784ddc25437bcbf7f504c-default.png?v=10'
      },
      {
        name: 'The Original Charlie Brown Artificial Christmas Tree',
        rarity: 'poco común',
        price: 225, // 60 USD * 3.75
        probability: 0.8162, // 0.00816153 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206265/conversions/5bb7f1258f07af2138ea0666861cae0f-default.png?v=10'
      },
      {
        name: 'Outdoor Christmas Decorations, Waterproof 16-Tube Meteor',
        rarity: 'poco común',
        price: 183.75, // 49 USD * 3.75
        probability: 0.9994, // 0.00999371 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206268/conversions/603dbb98d80d225b8556f28b0cbf04cf-default.png?v=10'
      },
      {
        name: 'Árbol de Navidad artificial',
        rarity: 'poco común',
        price: 163.2, // 43.52 USD * 3.75
        probability: 1.1252, // 0.01125211 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193447/conversions/a9c5f146d7deb90106a866a25e78ac27-default.png?v=10'
      },
      {
        name: 'Edición navideña de Monopoly',
        rarity: 'poco común',
        price: 142.8, // 38.08 USD * 3.75
        probability: 1.2860, // 0.01285955 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193451/conversions/99dddb987487b67751df7214f8110b1f-default.png?v=10'
      },
      {
        name: 'Reindeer Car Kit Antlers',
        rarity: 'poco común',
        price: 131.25, // 35 USD * 3.75
        probability: 1.3991, // 0.01399119 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206264/conversions/746951cb5248be015a84b19d6fa493ea-default.png?v=10'
      },
      {
        name: 'Christmas Pillow Covers 18x18 Set of 4',
        rarity: 'poco común',
        price: 123.75, // 33 USD * 3.75
        probability: 1.4839, // 0.01483914 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206266/conversions/ae3b177d7f7d06f0ecbc025e6388d979-default.png?v=10'
      },
      {
        name: 'Santa Hat Christmas Beanie',
        rarity: 'poco común',
        price: 120, // 32 USD * 3.75
        probability: 1.5303, // 0.01530287 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206274/conversions/7c0e7261ca23c6bdb1b340aa09661efa-default.png?v=10'
      },
      {
        name: 'Blowata Christmas Light Necklace',
        rarity: 'poco común',
        price: 120, // 32 USD * 3.75
        probability: 1.5303,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206263/conversions/dcf0eebbbd2e01127650ece0363171b9-default.png?v=10'
      },
      {
        name: 'Visera unisex para adultos.',
        rarity: 'poco común',
        price: 115.01, // 30.67 USD * 3.75
        probability: 1.5966, // 0.01596647 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193907/conversions/b1d9396726fcdb47fe547943a4b51114-default.png?v=10'
      },
      {
        name: 'Christmas Window Clings Snowflakes',
        rarity: 'poco común',
        price: 105, // 28 USD * 3.75
        probability: 1.7489, // 0.01748899 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/206262/conversions/03678cbd9f0c2bb8e805f0d5fd1f4f32-default.png?v=10'
      },
      {
        name: 'Hervidor Russell Hobbs',
        rarity: 'poco común',
        price: 102, // 27.2 USD * 3.75
        probability: 1.8003, // 0.01800337 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193374/conversions/58e94f85a369eba6eb480f6a3bdce497-default.png?v=10'
      },
      {
        name: 'Calcetines festivos',
        rarity: 'común',
        price: 56.1, // 14.96 USD * 3.75
        probability: 11.8002, // 0.11800216 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193447/conversions/a9c5f146d7deb90106a866a25e78ac27-default.png?v=10'
      },
      {
        name: '10 sombreros navideños',
        rarity: 'común',
        price: 51, // 13.6 USD * 3.75
        probability: 12.9802, // 0.12980237 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193450/conversions/c23137e079eed05b36feedee78e220fc-default.png?v=10'
      },
      {
        name: 'Cable micro USB corto',
        rarity: 'común',
        price: 50.96, // 13.59 USD * 3.75
        probability: 12.9898, // 0.12989788 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194699/conversions/6bad77cf71c6c119143ab0f4613dc9ae-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 15.3, // 4.08 USD * 3.75
        probability: 43.2675, // 0.43267457 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201644/conversions/293f5ed57d87e2956d23c0766b0371a7-default.png?v=10'
      }
    ]
  },
  {
    id: 'ps5-economica',
    name: 'Caja Misteriosa PS5 Económica',
    price: 18.71, // 4.99 USD * 3.75
    originalPrice: 25.26, // 18.71 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/202544/conversions/841defa2e3305ffa19b5601e62ebe02c-webp.webp',
    description: 'Descubre accesorios y productos de PlayStation 5 en cada caja misteriosa',
    items: [
      {
        name: 'Sony PlayStation 5 Disc Version (Renewed)',
        rarity: 'épico',
        price: 2025, // 540 USD * 3.75
        probability: 0.0020, // 0.00002 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200777/conversions/8d0d1adfccaef0fa9783e1adbd1f45e1-default.png?v=10'
      },
      {
        name: 'PlayStation DualSense Edge Wireless Controller',
        rarity: 'épico',
        price: 1147.46, // 305.99 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197072/conversions/59f6ddf71b819afbf94687c728ff4e35-default.png?v=10'
      },
      {
        name: 'Playstation Gift Card 150',
        rarity: 'raro',
        price: 764.96, // 203.99 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196540/conversions/690cf74cd962b7902be3d5a58ca485da-default.jpg?v=10'
      },
      {
        name: 'PlayStation DualSense Controller - FORTNITE Edition',
        rarity: 'raro',
        price: 510, // 136 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197074/conversions/21d2e8c8c3bef08c065e201b09c4b038-default.png?v=10'
      },
      {
        name: 'Cámara Sony Playstation5 HD',
        rarity: 'raro',
        price: 448.8, // 119.68 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193543/conversions/7eecf7d4329c31100984395d7b3fb430-default.png?v=10'
      },
      {
        name: 'Sony PlayStation®5 - Mando inalámbrico DualSense™ Cosmic Red',
        rarity: 'raro',
        price: 418.2, // 111.52 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194188/conversions/a5d6c4c98b8267097860ba9122da0d57-default.png?v=10'
      },
      {
        name: 'PlayStation DualSense Charging Station',
        rarity: 'poco común',
        price: 178.5, // 47.6 USD * 3.75
        probability: 0.0200, // 0.0002 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197085/conversions/0ba4a36cb1a576d25927f5902ecb0e24-default.png?v=10'
      },
      {
        name: 'Sony PlayStation®5 - Estación de carga DualSense™',
        rarity: 'poco común',
        price: 173.4, // 46.24 USD * 3.75
        probability: 0.0500, // 0.0005 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194203/conversions/af0f31424c80fa3c825422ab89843ce8-default.png?v=10'
      },
      {
        name: 'Mando a distancia Sony Playstation5',
        rarity: 'poco común',
        price: 163.2, // 43.52 USD * 3.75
        probability: 0.0500,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193550/conversions/60b593af3e3aecdd76b6683961ae57c8-default.png?v=10'
      },
      {
        name: 'PlayStation Media Remote',
        rarity: 'poco común',
        price: 152.93, // 40.78 USD * 3.75
        probability: 0.0500,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197086/conversions/6c20c0bcf964e5b465067576846bca77-default.png?v=10'
      },
      {
        name: 'Playstation Gift Card 25',
        rarity: 'poco común',
        price: 127.5, // 34 USD * 3.75
        probability: 0.0500,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196536/conversions/36e159cfa2186703c0c679f03db6ca12-default.jpg?v=10'
      },
      {
        name: 'Joysticks de rendimiento DualSense de Playstation 5',
        rarity: 'poco común',
        price: 127.5, // 34 USD * 3.75
        probability: 0.0500,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194218/conversions/9592105a5918c482814aa79cb9808165-default.png?v=10'
      },
      {
        name: 'PlayStation Store Gift Card',
        rarity: 'poco común',
        price: 102, // 27.2 USD * 3.75
        probability: 0.0500,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197087/conversions/95cb7dc417b41324f9483725a7411b5a-default.png?v=10'
      },
      {
        name: 'Echzove Anti-Slip PS5 Spider-Man Controller Cover Case',
        rarity: 'poco común',
        price: 101.25, // 27 USD * 3.75
        probability: 0.0500,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200444/conversions/56fb732226bf042d1055dc9b36b23b98-default.png?v=10'
      },
      {
        name: 'OIVO PS5 Controller Charger Kit with Adapter',
        rarity: 'poco común',
        price: 93.75, // 25 USD * 3.75
        probability: 0.0500,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200445/conversions/50722b49e50c590c6dc052e0ee0e8091-default.png?v=10'
      },
      {
        name: '6 Port USB Hub for PS5',
        rarity: 'poco común',
        price: 90, // 24 USD * 3.75
        probability: 0.1000, // 0.001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200446/conversions/fb2a3ab2c02a02739dbd7c2c39f98439-default.png?v=10'
      },
      {
        name: 'PS5 Controller Charger with LED Light Dual Stand Charger Dock',
        rarity: 'poco común',
        price: 86.25, // 23 USD * 3.75
        probability: 0.1000,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200447/conversions/f9de068844f09e4d1dbe84df19ac57a4-default.png?v=10'
      },
      {
        name: 'PS5 Dustproof Case Cover',
        rarity: 'poco común',
        price: 56.25, // 15 USD * 3.75
        probability: 0.2112, // 0.002112044 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200448/conversions/18151b897479ac3774d4da404fedee38-default.png?v=10'
      },
      {
        name: 'Cleaning Repair Tool Kit for PS4 PS5',
        rarity: 'poco común',
        price: 52.46, // 13.99 USD * 3.75
        probability: 0.3338, // 0.003337564 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200449/conversions/3facda45072749402317dbfc47d7237c-default.png?v=10'
      },
      {
        name: 'PlayStation Store Gift Card',
        rarity: 'poco común',
        price: 51, // 13.6 USD * 3.75
        probability: 0.3983, // 0.003982591 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197089/conversions/21266dea8adb9b7f45a78d19e786155f-default.png?v=10'
      },
      {
        name: 'Horizontal Acrylic Stand for PS5',
        rarity: 'poco común',
        price: 48.75, // 13 USD * 3.75
        probability: 0.5227, // 0.005226622 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200450/conversions/52abf94666e2a494cf3c8bfa21047d8a-default.png?v=10'
      },
      {
        name: '4 Thumbsticks Replacement with 12 Swap Joysticks',
        rarity: 'poco común',
        price: 41.25, // 11 USD * 3.75
        probability: 1.2934, // 0.012934189 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200451/conversions/c3edb17e7b7263f98fa3239bfa4b9eb4-default.png?v=10'
      },
      {
        name: 'SSD Screw/Ring Replacement with Screwdriver for PS5',
        rarity: 'poco común',
        price: 37.5, // 10 USD * 3.75
        probability: 2.0347, // 0.020346901 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200452/conversions/569f0811363d01f4bd0f139ef9c5b693-default.png?v=10'
      },
      {
        name: 'WXYINSPAS 1PC PS5 Screw For Base Vertical Stand',
        rarity: 'poco común',
        price: 37.46, // 9.99 USD * 3.75
        probability: 2.0439, // 0.020439292 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200453/conversions/ee919fc8aece4860b42fb25c9e1f60fb-default.png?v=10'
      },
      {
        name: 'Foweroty 8 Pack Precision Rings for PS5',
        rarity: 'poco común',
        price: 30, // 8 USD * 3.75
        probability: 4.0352, // 0.040351959 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200454/conversions/ce97e2c288d106a653f9faea7c62e78b-default.png?v=10'
      },
      {
        name: 'MatoSan PS5 Controller Grip Thumbstick Accessories',
        rarity: 'poco común',
        price: 26.21, // 6.99 USD * 3.75
        probability: 7.7169, // 0.077168838 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200455/conversions/911ce9cc739471cbfa786be128edfed0-default.png?v=10'
      },
      {
        name: 'Centre Sticker for PS5 Slim Blue',
        rarity: 'común',
        price: 18.71, // 4.99 USD * 3.75
        probability: 3.5306, // 0.03530602 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200458/conversions/4990dc484abec15333259728c68952ea-default.png?v=10'
      },
      {
        name: 'Centre Sticker for PS5 Slim Red',
        rarity: 'común',
        price: 18.71, // 4.99 USD * 3.75
        probability: 3.5306,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200457/conversions/766081a9c7672881173a8a7cc905b3b7-default.png?v=10'
      },
      {
        name: 'Centre Sticker for PS5 Slim Matte Black',
        rarity: 'común',
        price: 18.71, // 4.99 USD * 3.75
        probability: 3.5306,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200456/conversions/79cfb8d192d0ebf88e444611807627d8-default.png?v=10'
      },
      {
        name: 'Playstation Logo Sticker Pack',
        rarity: 'común',
        price: 16.88, // 4.5 USD * 3.75
        probability: 4.4082, // 0.04408194 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200459/conversions/84c5ae885a526da281f188634494d44f-default.png?v=10'
      },
      {
        name: 'PS Triangle Thumbstick Cap',
        rarity: 'común',
        price: 15, // 4 USD * 3.75
        probability: 11.6906, // 0.116906267 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200460/conversions/e3173f3205af52d3da7ac5469b4b41f6-default.png?v=10'
      },
      {
        name: 'PS Circle Thumbstick Cap',
        rarity: 'común',
        price: 14.96, // 3.99 USD * 3.75
        probability: 9.7301, // 0.097300893 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200461/conversions/92eb453fc82bf9e6fd2017f5668c7e94-default.png?v=10'
      },
      {
        name: 'PS Cross Thumbstick Cap',
        rarity: 'común',
        price: 14.93, // 3.98 USD * 3.75
        probability: 10.7697, // 0.107697311 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200462/conversions/858d4a7666a776d82399e0ce2bea418d-default.png?v=10'
      },
      {
        name: 'PS Square Thumbstick Cap',
        rarity: 'común',
        price: 14.89, // 3.97 USD * 3.75
        probability: 10.8096, // 0.108095529 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200463/conversions/12b09ab0acaae149110b42d5905d9c48-default.png?v=10'
      },
      {
        name: 'L1 R1 L2 R2 Trigger Shoulder Buttons Springs Set for PS5',
        rarity: 'común',
        price: 9.38, // 2.5 USD * 3.75
        probability: 12.0000, // 0.12 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200464/conversions/f9b9d3cf6ce77f264a5fe198b886730a-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 3.19, // 0.85 USD * 3.75
        probability: 10.7400, // 0.1074 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201678/conversions/c6793512ec72c6ef9a635fbc5b86b92d-default.png?v=10'
      }
    ]
  },
  {
    id: 'iphone-air',
    name: 'Caja Misteriosa iPhone Air',
    price: 51, // 13.6 USD * 3.75
    originalPrice: 68.85, // 51 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/203776/conversions/8f11148a622eeeda45379da28c9f51e1-webp.webp',
    description: 'Descubre iPhones Air y accesorios Apple en cada caja misteriosa',
    items: [
      {
        name: 'iPhone Air Skyblue 1TB',
        rarity: 'épico',
        price: 5437.5, // 1450 USD * 3.75
        probability: 0.0001, // 0.000001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203689/conversions/862949c35404f02bef5924a252486a8b-default.png?v=10'
      },
      {
        name: 'iPhone Air Lightgold 512Gb',
        rarity: 'épico',
        price: 4500, // 1200 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203690/conversions/81f9cc00392205c1a1f52552c61c63cd-default.png?v=10'
      },
      {
        name: 'Airpods Max Espacio Azul',
        rarity: 'raro',
        price: 3172.09, // 845.89 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193594/conversions/e3ee7427fda6c7ddb39cbf175a5570ef-default.png?v=10'
      },
      {
        name: 'Apple Watch Series 11 Blue',
        rarity: 'raro',
        price: 2362.5, // 630 USD * 3.75
        probability: 0.0012, // 0.000012264 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203695/conversions/244db77f34a9a8ea5956881a9b05efab-default.png?v=10'
      },
      {
        name: 'Airpods',
        rarity: 'raro',
        price: 673.16, // 179.51 USD * 3.75
        probability: 0.6948, // 0.006947667 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192997/conversions/0e194f43c78db68159437fa1de1eb186-default.png?v=10'
      },
      {
        name: 'Wireless Magnetic Portable Charger',
        rarity: 'poco común',
        price: 187.46, // 49.99 USD * 3.75
        probability: 4.2994, // 0.042994159 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/198861/conversions/665e6a1e8e827dfad677eb79ac101536-default.png?v=10'
      },
      {
        name: 'Accesorio de cable para animales',
        rarity: 'poco común',
        price: 111.68, // 29.78 USD * 3.75
        probability: 5.7138, // 0.0571379 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193591/conversions/f1b8a8058d4bb760aa5936cea9b52c36-default.png?v=10'
      },
      {
        name: 'Cables de cargador de colores',
        rarity: 'poco común',
        price: 88.16, // 23.51 USD * 3.75
        probability: 6.2409, // 0.06240851 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193782/conversions/da9cdf309665e34f3fc6cee821730161-default.png?v=10'
      },
      {
        name: 'Funda para Airpods Mc Chips',
        rarity: 'poco común',
        price: 86.7, // 23.12 USD * 3.75
        probability: 6.2752, // 0.062751965 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193263/conversions/10b3e4948fa346cae6e7c83dfcac4749-default.png?v=10'
      },
      {
        name: 'Cargador portátil Unicornio',
        rarity: 'poco común',
        price: 66.3, // 17.68 USD * 3.75
        probability: 6.7745, // 0.067744535 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193264/conversions/a63c62cf6390dc7fdc6235a7da2677a4-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 51, // 13.6 USD * 3.75
        probability: 15.0000, // 0.15 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201648/conversions/87740b91b4dfc4a7772171f74dcb0e59-default.png?v=10'
      },
      {
        name: 'Botella ambientadora',
        rarity: 'común',
        price: 20.4, // 5.44 USD * 3.75
        probability: 17.7240, // 0.177239583 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194095/conversions/2bea1844189e43cf4ba0700fda385089-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 12.23, // 3.26 USD * 3.75
        probability: 18.2761, // 0.182761174 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203678/conversions/70e0fe981cc66e763398b78c2e7b7c98-default.png?v=10'
      },
      {
        name: 'Just Air',
        rarity: 'común',
        price: 1.88, // 0.5 USD * 3.75
        probability: 19.0000, // 0.189999243 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203771/conversions/0e41830685518511e83aa47c27af292b-default.png?v=10'
      }
    ]
  },
  {
    id: 'amazon',
    name: 'Caja Misteriosa Amazon',
    price: 153, // 40.8 USD * 3.75
    originalPrice: 206.55, // 153 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/202545/conversions/08903435b94eaf279d058aa1c64ad7e8-webp.webp',
    description: 'Descubre productos de Amazon y tecnología en cada caja misteriosa',
    items: [
      {
        name: 'iPhone 16 Pro 1Tb Desierto Titanio',
        rarity: 'épico',
        price: 8159.7, // 2175.92 USD * 3.75
        probability: 0.0754, // 0.00075423 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195272/conversions/11183512f025a849525658f5b7a1bf09-default.png?v=10'
      },
      {
        name: 'Appe Watch Ultra 2 Ocean Loop',
        rarity: 'raro',
        price: 4028.85, // 1074.36 USD * 3.75
        probability: 0.1528, // 0.00152756 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195829/conversions/c1e587a7fd098929df228e811e2bfe4b-default.png?v=10'
      },
      {
        name: 'Apple Watch Ultra 2',
        rarity: 'raro',
        price: 3824.85, // 1019.96 USD * 3.75
        probability: 0.1609, // 0.00160903 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195830/conversions/94dabb36455016f91062f7263d5faaa7-default.png?v=10'
      },
      {
        name: 'Miniproyector',
        rarity: 'raro',
        price: 3172.09, // 845.89 USD * 3.75
        probability: 0.1940, // 0.00194014 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193890/conversions/a61a2d01368b6005cbd6f65474f93d70-default.png?v=10'
      },
      {
        name: 'Bottle Compressor Wine Cooler',
        rarity: 'raro',
        price: 2549.93, // 679.98 USD * 3.75
        probability: 0.2414, // 0.00241352 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195836/conversions/d9ab8d7335eccad9135f02eb5a4feb6b-default.png?v=10'
      },
      {
        name: 'Red Light Therapy For Face',
        rarity: 'poco común',
        price: 1473.86, // 393.03 USD * 3.75
        probability: 0.4176, // 0.00417563 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195833/conversions/9514b09b6951e2b4aaf6213795fb5403-default.png?v=10'
      },
      {
        name: 'Amazon Fire Max 11 Tablet',
        rarity: 'poco común',
        price: 1172.96, // 312.79 USD * 3.75
        probability: 0.5247, // 0.0052468 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195831/conversions/d9cf0dd7ec86035300e645df8b560fca-default.png?v=10'
      },
      {
        name: 'Tableta Fire HD 10',
        rarity: 'poco común',
        price: 785.33, // 209.42 USD * 3.75
        probability: 0.7837, // 0.00783663 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193756/conversions/805c235dae5a5fca61f07201be7f382d-default.png?v=10'
      },
      {
        name: 'Tarjeta regalo de Netflix',
        rarity: 'poco común',
        price: 510, // 136 USD * 3.75
        probability: 1.2067, // 0.01206725 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194633/conversions/1447afe5597256ed853807c851c3e4e0-default.png?v=10'
      },
      {
        name: 'Amazon Echo Show 5',
        rarity: 'poco común',
        price: 459, // 122.4 USD * 3.75
        probability: 1.3408, // 0.01340806 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195834/conversions/604f7c0b3dfe5015d283a52d67341c31-default.png?v=10'
      },
      {
        name: 'pesa rusa',
        rarity: 'poco común',
        price: 443.7, // 118.32 USD * 3.75
        probability: 1.3870, // 0.0138704 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194273/conversions/bfe6313eaad31734a2bc68ef7572320c-default.png?v=10'
      },
      {
        name: 'Punto de eco',
        rarity: 'poco común',
        price: 290.7, // 77.52 USD * 3.75
        probability: 2.1171, // 0.02117062 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193973/conversions/2a7f347bcc63a0b1ca0307549ef05fe1-default.png?v=10'
      },
      {
        name: 'Cable de Lightning a USBC',
        rarity: 'poco común',
        price: 239.7, // 63.92 USD * 3.75
        probability: 2.5675, // 0.025675 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/192994/conversions/5ca9db38eec735255f70cc292f2551dd-default.png?v=10'
      },
      {
        name: 'Crocs Unisex',
        rarity: 'poco común',
        price: 229.5, // 61.2 USD * 3.75
        probability: 2.6816, // 0.02681611 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195825/conversions/dfb231582826caeaa9b8e282f59a5fe7-default.png?v=10'
      },
      {
        name: 'Bolsa para mascotas CheateauDog',
        rarity: 'poco común',
        price: 229.5, // 61.2 USD * 3.75
        probability: 2.6816,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193106/conversions/004423889f3f4b587c6bfae62e17b823-default.png?v=10'
      },
      {
        name: 'Stanley Tumbler',
        rarity: 'poco común',
        price: 204, // 54.4 USD * 3.75
        probability: 3.0168, // 0.03016813 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195824/conversions/096e391d2a05d2c8d013ea24e03b4e32-default.png?v=10'
      },
      {
        name: 'Reloj despertador con cargador inalámbrico',
        rarity: 'poco común',
        price: 163.2, // 43.52 USD * 3.75
        probability: 3.7710, // 0.03771016 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193434/conversions/911d6fc76f9c9b6a549b42a1dab348a9-default.png?v=10'
      },
      {
        name: 'Amazon Fire TV Stick 4K',
        rarity: 'común',
        price: 153, // 40.8 USD * 3.75
        probability: 4.0224, // 0.04022417 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195832/conversions/6eb58836a31e732e1db2fd7dc94bfc73-default.png?v=10'
      },
      {
        name: 'Ratón inalámbrico vertical',
        rarity: 'común',
        price: 153, // 40.8 USD * 3.75
        probability: 4.0224,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193165/conversions/03c474194ec4f4b7bb1ebfe70193c119-default.png?v=10'
      },
      {
        name: 'Tarjeta regalo de Amazon Game Stop',
        rarity: 'común',
        price: 102, // 27.2 USD * 3.75
        probability: 3.9802, // 0.0398016 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193166/conversions/7fbf88afc9f3a4facb928d8549d78f8a-default.png?v=10'
      },
      {
        name: 'Tarjeta de regalo de Netflix',
        rarity: 'común',
        price: 76.5, // 20.4 USD * 3.75
        probability: 5.3069, // 0.05306879 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195821/conversions/80dc8d4b6aa9a2982af100b87140b2c2-default.jpg?v=10'
      },
      {
        name: 'SanDisk 16GB Flash Drive',
        rarity: 'común',
        price: 51, // 13.6 USD * 3.75
        probability: 7.9603, // 0.07960319 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195853/conversions/e91d88a692265ad252ee262f7f522d65-default.png?v=10'
      },
      {
        name: 'Funda protectora colorida para Apple iPhone',
        rarity: 'común',
        price: 35.66, // 9.51 USD * 3.75
        probability: 11.3838, // 0.11383842 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194412/conversions/85d6a2d290e738ea41359aea560e4a59-default.png?v=10'
      },
      {
        name: 'Cable Lightning Rosa',
        rarity: 'común',
        price: 33.15, // 8.84 USD * 3.75
        probability: 12.2466, // 0.12246645 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193688/conversions/a7565d87652ed22852b842c6edf55f1b-default.png?v=10'
      },
      {
        name: 'Funda Airpod Estilo Supremo',
        rarity: 'común',
        price: 30.56, // 8.15 USD * 3.75
        probability: 13.2835, // 0.13283477 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193197/conversions/6c9c76bb0cfa227bf5faa2006b3275f7-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 28.05, // 7.48 USD * 3.75
        probability: 14.4733, // 0.14473307 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203647/conversions/72db6ae6975647e927df1cd3523a92a2-default.png?v=10'
      }
    ]
  },
  {
    id: 'iphone-17',
    name: 'Caja Misteriosa iPhone 17',
    price: 97.5, // 26 USD * 3.75
    originalPrice: 131.63, // 97.5 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/203700/conversions/da8ec9722862cf29049934381ab923bb-webp.webp',
    description: 'Descubre iPhones 17 y accesorios Apple en cada caja misteriosa',
    items: [
      {
        name: 'iPhone 17 Pro Max 2TB',
        rarity: 'épico',
        price: 9750, // 2600 USD * 3.75
        probability: 0.0001, // 0.000001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203685/conversions/39540c12533ddfdf7c147566c210dec9-default.png?v=10'
      },
      {
        name: 'iPhone 17 Pro Max 1TB',
        rarity: 'épico',
        price: 8250, // 2200 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203684/conversions/51466418548e0e5e664537b73c4b017e-default.png?v=10'
      },
      {
        name: 'iPhone 17 Pro 1TB',
        rarity: 'épico',
        price: 7500, // 2000 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203681/conversions/cbdadb14818b8002ff3182855ff276db-default.png?v=10'
      },
      {
        name: 'iPhone 17 Pro Max 512gb',
        rarity: 'épico',
        price: 7125, // 1900 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203683/conversions/7d78655323e0eac58d3701c8039eef8d-default.png?v=10'
      },
      {
        name: 'iPhone 17 Pro 512gb',
        rarity: 'épico',
        price: 6337.5, // 1690 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203680/conversions/fde70f0453ae029807b043d7a9105944-default.png?v=10'
      },
      {
        name: 'iPhone 17 Pro Max 256GB',
        rarity: 'épico',
        price: 6000, // 1600 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203682/conversions/675e7f3e47561f9fccd74475b9a08a4d-default.png?v=10'
      },
      {
        name: 'iPhone 17 Pro 256gb',
        rarity: 'épico',
        price: 5456.25, // 1455 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203679/conversions/3698ab0973594b0d6e8912a1b3fb099a-default.png?v=10'
      },
      {
        name: 'iPhone 17 Blue 512gb',
        rarity: 'raro',
        price: 4125, // 1100 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203688/conversions/9ff9748fcd5545087dc06582954a561b-default.png?v=10'
      },
      {
        name: 'iPhone 17 Sage 512GB',
        rarity: 'raro',
        price: 4125, // 1100 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203687/conversions/b36c99788f730a40ef9751b04300d732-default.png?v=10'
      },
      {
        name: 'iPhone 17 Lavander 256GB',
        rarity: 'raro',
        price: 3750, // 1000 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203686/conversions/e3af64995ace87ecd752a94a61ac40e7-default.png?v=10'
      },
      {
        name: 'Airpods Max Verde',
        rarity: 'raro',
        price: 3172.09, // 845.89 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193595/conversions/297b77aec0d0d665a35500599bf0e887-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'raro',
        price: 2549.93, // 679.98 USD * 3.75
        probability: 0.0001,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201638/conversions/79b6d88ebb20721927e04816644ffcc6-default.png?v=10'
      },
      {
        name: 'AirPods Pro',
        rarity: 'raro',
        price: 1280.06, // 341.35 USD * 3.75
        probability: 0.0005, // 0.000005253 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193062/conversions/57459f9328ae5972c8d08c097216a557-default.png?v=10'
      },
      {
        name: 'Cargador MagSafe Dúo',
        rarity: 'poco común',
        price: 826.16, // 220.31 USD * 3.75
        probability: 0.0277, // 0.000276932 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193774/conversions/1ddb9c38ab522718e826c46258450db2-default.png?v=10'
      },
      {
        name: 'Almohadilla de carga inalámbrica',
        rarity: 'poco común',
        price: 265.2, // 70.72 USD * 3.75
        probability: 3.7199, // 0.037199229 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193129/conversions/a4e896608faa0a0bdb377d148fddf50b-default.png?v=10'
      },
      {
        name: 'Tapa de batería iPhone',
        rarity: 'poco común',
        price: 260.1, // 69.36 USD * 3.75
        probability: 3.8894, // 0.038893959 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193768/conversions/47b6d8629ed9be971e7e2fc130abe373-default.png?v=10'
      },
      {
        name: 'Magsafe Wallet with Airtag Holder',
        rarity: 'poco común',
        price: 146.25, // 39 USD * 3.75
        probability: 10.5148, // 0.105148354 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/198865/conversions/a8db1d4598208c245c53c9aa0bf6c76c-default.png?v=10'
      },
      {
        name: 'Apple AirTag',
        rarity: 'poco común',
        price: 132.6, // 35.36 USD * 3.75
        probability: 11.8464, // 0.118464273 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195846/conversions/6083960f67db2ca5cee1b8bd6025d43f-default.png?v=10'
      },
      {
        name: 'Funda Compatible Airpods Ben Y Jerry',
        rarity: 'poco común',
        price: 107.1, // 28.56 USD * 3.75
        probability: 14.6659, // 0.146659235 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193589/conversions/643f78f350a4bc1a5d85b16ffb7b741f-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 102, // 27.2 USD * 3.75
        probability: 15.3341, // 0.153340765 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201639/conversions/2bb5a9fed6b90809e669193eb1004611-default.png?v=10'
      },
      {
        name: 'Funda De Silicona Compatible Con Airpods Azul',
        rarity: 'común',
        price: 50.96, // 13.59 USD * 3.75
        probability: 5.3564, // 0.053564377 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194397/conversions/f48cba70ff52e94e55e6ecafba3cd0b8-default.png?v=10'
      },
      {
        name: 'iPhone USB-C Charger Fast Charging Pack',
        rarity: 'común',
        price: 40.8, // 10.88 USD * 3.75
        probability: 5.8537, // 0.058536966 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197939/conversions/81533a6d9eb3b33213165e0a32834b70-default.png?v=10'
      },
      {
        name: 'Cable Lightning Rosa',
        rarity: 'común',
        price: 33.15, // 8.84 USD * 3.75
        probability: 6.2582, // 0.062582445 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193688/conversions/a7565d87652ed22852b842c6edf55f1b-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 22.46, // 5.99 USD * 3.75
        probability: 6.8707, // 0.068706592 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203643/conversions/7c0f9de89ad6c35b75dfbf9a9a50e4e6-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 9.94, // 2.65 USD * 3.75
        probability: 7.6651, // 0.07665056 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201669/conversions/452f85cccd0dd222561ac4144698693c-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 5.1, // 1.36 USD * 3.75
        probability: 7.9959, // 0.07995906 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203656/conversions/33cb74c122e6a096327cc8062f09ad57-default.png?v=10'
      }
    ]
  },
  {
    id: 'call-of-duty',
    name: 'Caja Misteriosa Call Of Duty',
    price: 56.25, // 15 USD * 3.75
    originalPrice: 75.94, // 56.25 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/204858/conversions/e13bd1f7eb572f1805c740853d2c48b3-webp.webp',
    description: 'Descubre productos exclusivos de Call of Duty en cada caja misteriosa',
    items: [
      {
        name: 'Call of Duty Black Ops PS4 Juggernog Edition Mini Fridge - New Sealed box',
        rarity: 'legendario',
        price: 14250, // 3800 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204771/conversions/32952ae4094c7f4ba9b5fb20a6b56b9d-default.png?v=10'
      },
      {
        name: 'Ray Gun Mark 2 With LED Lights, Cod Prop Replica CoD Zombies Prop Cosplay Collectable (With Stand)',
        rarity: 'raro',
        price: 1387.5, // 370 USD * 3.75
        probability: 0.1596, // 0.001595689 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204775/conversions/fb71644b14a3032b51099215a2e7969c-default.png?v=10'
      },
      {
        name: 'Ray Gun CoD Zombies Prop Cosplay Collectable (Without Stand)',
        rarity: 'raro',
        price: 900, // 240 USD * 3.75
        probability: 0.2409, // 0.002409039 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204779/conversions/f558bf0ea14d68a8a3d87d6aa44962ae-default.png?v=10'
      },
      {
        name: 'Mr. Peeks LED Neon – Call of Duty',
        rarity: 'raro',
        price: 637.5, // 170 USD * 3.75
        probability: 0.3007, // 0.003007268 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204777/conversions/f9367a985f312cb55f8ba6e8a85c6d4a-default.png?v=10'
      },
      {
        name: "Call of Duty: Black Ops 7 – Vault Edition – Xbox Series X|S, Xbox One, and Windows [Digital Code]",
        rarity: 'raro',
        price: 412.5, // 110 USD * 3.75
        probability: 0.3637, // 0.003636967 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204797/conversions/b68644dad1c45cabb86ee7526a194dc0-default.png?v=10'
      },
      {
        name: 'Funko POP Games: Call of Duty Action Figure - Woods',
        rarity: 'raro',
        price: 356.25, // 95 USD * 3.75
        probability: 0.3814, // 0.003814004 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204772/conversions/e521888bd98f5a6e7a981b3a70ad9d3b-default.png?v=10'
      },
      {
        name: 'Call of Duty®: Black Ops 7 for PS4 & PS5',
        rarity: 'raro',
        price: 337.5, // 90 USD * 3.75
        probability: 0.3875, // 0.003874911 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204803/conversions/a599cb908d33ffed54f9e4b0205b73b0-default.png?v=10'
      },
      {
        name: 'Call of Duty: Black Ops 7 – Standard Edition – Xbox Series X|S and Xbox One, Windows [Digital Code]',
        rarity: 'raro',
        price: 288.75, // 77 USD * 3.75
        probability: 0.4038, // 0.00403786 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204804/conversions/4f6e38662f791d4b8024e1f6442e55aa-default.jpg?v=10'
      },
      {
        name: 'Funko Call of Duty Action Figure - Spaceland Zombie',
        rarity: 'raro',
        price: 243.75, // 65 USD * 3.75
        probability: 0.4194, // 0.00419435 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204774/conversions/e95140b9dddc1f547f6bc93d137219b2-default.png?v=10'
      },
      {
        name: 'Call of Duty - PHD Flopper Zombies Perk Backlit Poster',
        rarity: 'raro',
        price: 232.5, // 62 USD * 3.75
        probability: 0.4234, // 0.004234411 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204776/conversions/7c57a187c2f4867f70d06638ec9ff515-default.png?v=10'
      },
      {
        name: 'Call Of Duty Neon Signs LED Lights',
        rarity: 'raro',
        price: 225, // 60 USD * 3.75
        probability: 0.4261, // 0.004261331 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204787/conversions/e7dd3c466f7cd4fa7a442b1023994256-default.png?v=10'
      },
      {
        name: "Youtooz Call of Duty Random Mystery Box 4.9\", Collectible 1 in 6 Chance Mystery Box",
        rarity: 'raro',
        price: 206.25, // 55 USD * 3.75
        probability: 0.4329, // 0.004329382 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204797/conversions/b68644dad1c45cabb86ee7526a194dc0-default.png?v=10'
      },
      {
        name: 'Call of Duty: Modern Warfare Remastered - Xbox One',
        rarity: 'raro',
        price: 206.25, // 55 USD * 3.75
        probability: 0.4329,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204783/conversions/0338138141adccb554f330fcc7d4c03a-default.png?v=10'
      },
      {
        name: 'Call of Duty Pajama Set for Men',
        rarity: 'poco común',
        price: 187.5, // 50 USD * 3.75
        probability: 0.4399, // 0.004398519 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204802/conversions/7fb542bc871c7f70487674554ddd3c5a-default.png?v=10'
      },
      {
        name: 'Call of Duty "Ghost Bust Statue - 8-inch',
        rarity: 'poco común',
        price: 187.5, // 50 USD * 3.75
        probability: 0.4399,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204785/conversions/a45f51a95375c6ab839db73950f3e065-default.png?v=10'
      },
      {
        name: 'Call of Duty Points - 5,000 1P - Xbox [Digital Code]',
        rarity: 'poco común',
        price: 168.75, // 45 USD * 3.75
        probability: 0.4469, // 0.004468761 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204800/conversions/2975ae7f8583d621698764302b5e71fc-default.jpg?v=10'
      },
      {
        name: 'Call of Duty Snapback Cap with Black Ops 4 Embossed Shield Logo Design',
        rarity: 'poco común',
        price: 168.75, // 45 USD * 3.75
        probability: 0.4469,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204796/conversions/86d39ea711e9ec3eaf429e18d6736a48-default.png?v=10'
      },
      {
        name: 'Call of Duty® Speed Cola Performance Thumbsticks™ - Collector\'s Edition for Xbox One (XB1) and Xbox Series X (XBX) Controllers',
        rarity: 'poco común',
        price: 168.75, // 45 USD * 3.75
        probability: 0.4469,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204778/conversions/b603cefa30ad274dbd0a3ebc5c743d60-default.png?v=10'
      },
      {
        name: 'Call of Duty: Monkeybomb - Original Mobile Phone & Gaming Controller Holder',
        rarity: 'poco común',
        price: 150, // 40 USD * 3.75
        probability: 0.4540, // 0.004540124 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204801/conversions/91efe38024013e4334a8fbd088201661-default.png?v=10'
      },
      {
        name: 'Call of Duty Socks for Men Pack of 5',
        rarity: 'poco común',
        price: 150, // 40 USD * 3.75
        probability: 0.4540,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204784/conversions/071b27dc2e6f0d70b4651b7a2ddda50d-default.png?v=10'
      },
      {
        name: 'Call of Duty: Modern Warfare Remastered - PS4',
        rarity: 'poco común',
        price: 150, // 40 USD * 3.75
        probability: 0.4540,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204782/conversions/2657aeac5dc46af9768f828b1bd1323e-default.png?v=10'
      },
      {
        name: 'Call of Duty: Warzone Performance Thumbsticks for PS4 & PS5',
        rarity: 'poco común',
        price: 150, // 40 USD * 3.75
        probability: 0.4540,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204780/conversions/bb5118fb519442d11a25bd2e609f4ddb-default.png?v=10'
      },
      {
        name: 'Call of Duty Baseball Cap, Prestige Emblem Cotton',
        rarity: 'poco común',
        price: 150, // 40 USD * 3.75
        probability: 0.4540,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204773/conversions/9778ab30908fff668869fcaa47a1d050-default.png?v=10'
      },
      {
        name: 'Exclusive Call of Duty: Infinite Warfare Shot Glasses | Collector\'s Set of 4 | 2 FL Oz.',
        rarity: 'poco común',
        price: 131.25, // 35 USD * 3.75
        probability: 0.4613, // 0.004612626 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204793/conversions/485596804a6b277fca6bfe1a8cbe48b7-default.png?v=10'
      },
      {
        name: 'Call of Duty Silhouettes Metal Sign',
        rarity: 'poco común',
        price: 131.25, // 35 USD * 3.75
        probability: 0.4613,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204791/conversions/a674a3e243b675253b50c3d1a9f4a831-default.png?v=10'
      },
      {
        name: 'Call of Duty Double Tap Stainless Steel Water Bottle, 16 Ounces',
        rarity: 'poco común',
        price: 131.25, // 35 USD * 3.75
        probability: 0.4613,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204786/conversions/825568f0fdd7a314f770044f2521583e-default.png?v=10'
      },
      {
        name: 'Call of Duty: Modern Warfare II Performance Thumbsticks for PS4 & PS5',
        rarity: 'poco común',
        price: 131.25, // 35 USD * 3.75
        probability: 0.4613,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204781/conversions/72ba9a0115410f1965ce3d45609635df-default.png?v=10'
      },
      {
        name: 'Call of Duty Deadshot Edition Performance Thumbsticks for Xbox Series X (XBX) and Xbox One (XB1)',
        rarity: 'poco común',
        price: 127.5, // 34 USD * 3.75
        probability: 0.4627, // 0.004627265 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204792/conversions/d67ae83376e63668344bab5d8172ee9a-default.png?v=10'
      },
      {
        name: 'Call of Duty Black Ops Soldier Round Metal Wall Art',
        rarity: 'poco común',
        price: 123.75, // 33 USD * 3.75
        probability: 0.4642, // 0.004641951 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204788/conversions/2f8d4d5e23f37562fdde3cea70595bac-default.png?v=10'
      },
      {
        name: 'Call Duty Dog Tag Limited Edition',
        rarity: 'poco común',
        price: 112.5, // 30 USD * 3.75
        probability: 0.4686, // 0.004686287 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204799/conversions/28468972da1e28570238c94028692a5b-default.png?v=10'
      },
      {
        name: 'Call of Duty Juggernog Lamps',
        rarity: 'poco común',
        price: 112.5, // 30 USD * 3.75
        probability: 0.4686,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204794/conversions/1c5c56a37ce134b6835f328317f4c862-default.png?v=10'
      },
      {
        name: 'Call of Duty "Ghost (Jawbone) - 6.5-inch Articulated Figure',
        rarity: 'poco común',
        price: 112.5, // 30 USD * 3.75
        probability: 0.4686,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204790/conversions/d1d2dcb776b324ae3beaeb32249dd781-default.png?v=10'
      },
      {
        name: 'Call of Duty: Black Ops 4 Logo & Keychain Compass Navigation Set',
        rarity: 'poco común',
        price: 112.5, // 30 USD * 3.75
        probability: 0.4686,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204789/conversions/8cc18f6acb764656caad54373e1137b1-default.png?v=10'
      },
      {
        name: 'Call of Duty Points - 2,400 1P - Xbox [Digital Code]',
        rarity: 'común',
        price: 82.5, // 22 USD * 3.75
        probability: 0.4807, // 0.004806598 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/204798/conversions/c2b3a1eeb71648ebc05ee3982f9ec3f0-default.jpg?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 56.25, // 15 USD * 3.75
        probability: 4.9889, // 0.049889098 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201634/conversions/3d723e633c3a1556c8f64ee2e4705676-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 51, // 13.6 USD * 3.75
        probability: 5.0111, // 0.050110902 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201648/conversions/87740b91b4dfc4a7772171f74dcb0e59-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 40.8, // 10.88 USD * 3.75
        probability: 18.7045, // 0.187044733 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201645/conversions/2ebc54a5f439ac1b7a79d5fa056b8902-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 25.5, // 6.8 USD * 3.75
        probability: 18.9479, // 0.189478549 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201640/conversions/0cbe7a56b0666249640b3ec2e2de6daf-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 15.3, // 4.08 USD * 3.75
        probability: 19.1119, // 0.191118662 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201644/conversions/293f5ed57d87e2956d23c0766b0371a7-default.png?v=10'
      },
      {
        name: 'Créditos LuckyBox',
        rarity: 'común',
        price: 7.65, // 2.04 USD * 3.75
        probability: 19.2358, // 0.192358056 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201642/conversions/c6b75d8550ae3e2a970468b0b1a7cf59-default.png?v=10'
      }
    ]
  },
  {
    id: 'nintendo-switch-2',
    name: 'Caja Misteriosa Nintendo Switch 2',
    price: 18.71, // 4.99 USD * 3.75
    originalPrice: 25.26, // 18.71 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/202546/conversions/0fc5a78673d2562062df02741cd98fea-webp.webp',
    description: 'Descubre consolas Nintendo Switch 2 y accesorios en cada caja misteriosa',
    items: [
      {
        name: 'Nintendo Switch 2 System',
        rarity: 'épico',
        price: 1871.25, // 499 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200735/conversions/557c472ea59436352bd50a20c246df58-default.png?v=10'
      },
      {
        name: 'Nintendo Switch Lite Coral',
        rarity: 'épico',
        price: 1132.16, // 301.91 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194195/conversions/e9c7bfd579e63f6d2fe784ba1ef86bab-default.png?v=10'
      },
      {
        name: 'Nintendo Game Boy Advance SP renovado',
        rarity: 'raro',
        price: 815.96, // 217.59 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195241/conversions/9391d1e4c8c8d62dafd6c9946b1ec9a9-default.png?v=10'
      },
      {
        name: 'Joy-Con Edición Fortnite - Limitada',
        rarity: 'raro',
        price: 775.16, // 206.71 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194186/conversions/1efa3730a33be12b1c21a2c29d125447-default.png?v=10'
      },
      {
        name: 'Nintendo Switch 2 Dock Set',
        rarity: 'raro',
        price: 558.75, // 149 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200736/conversions/d823d985c134bf81525a426dcaa7fc41-default.png?v=10'
      },
      {
        name: 'Nintendo Joy-Con 2 (L)/(R) Light Blue/Light Red',
        rarity: 'raro',
        price: 502.5, // 134 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200737/conversions/ab34b9764ed60a4f572cb82678bc2c0a-default.png?v=10'
      },
      {
        name: 'Nintendo Sound Clock: Alarmo',
        rarity: 'raro',
        price: 468.75, // 125 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200738/conversions/6f30ed13855d55cf9894cc2467c2278c-default.png?v=10'
      },
      {
        name: 'Nintendo Switch 2 Pro Controller',
        rarity: 'raro',
        price: 412.5, // 110 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200739/conversions/ceb463a5863f96effc3f83323383618f-default.png?v=10'
      },
      {
        name: 'Nintendo Switch 2 All-In-One Carrying Case',
        rarity: 'raro',
        price: 371.25, // 99 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200740/conversions/df876bd1f2343c0d45416f4d7092891d-default.png?v=10'
      },
      {
        name: 'Donkey Kong Bananza',
        rarity: 'raro',
        price: 330, // 88 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200741/conversions/f0fe9f2b5b1597cfa552ecd3bc9eab55-default.png?v=10'
      },
      {
        name: 'Nintendo GameCube Controller',
        rarity: 'raro',
        price: 296.25, // 79 USD * 3.75
        probability: 0.0102, // 0.000102248 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200742/conversions/a873a3358dcc9aeeae10eca22bddcfc5-default.png?v=10'
      },
      {
        name: 'Nintendo Switch 2 Samsung 256GB microSD Express Card',
        rarity: 'raro',
        price: 281.25, // 75 USD * 3.75
        probability: 0.0140, // 0.000139855 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200743/conversions/0d4592ad8d4c60b529312b9464cbd46d-default.png?v=10'
      },
      {
        name: 'Nintendo Joy-Con 2 (L) Light Blue',
        rarity: 'raro',
        price: 262.5, // 70 USD * 3.75
        probability: 0.0207, // 0.000206875 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200745/conversions/9d3de1047726d24bc0c08b0bcaa97316-default.png?v=10'
      },
      {
        name: 'Nintendo Switch 2 Camera',
        rarity: 'raro',
        price: 258.75, // 69 USD * 3.75
        probability: 0.0224, // 0.000223725 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200744/conversions/82c483dec310d934ff99021806f55b7c-default.png?v=10'
      },
      {
        name: 'Nintendo Joy-Con 2 (R) Light Red',
        rarity: 'raro',
        price: 251.25, // 67 USD * 3.75
        probability: 0.0262, // 0.000261653 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200746/conversions/15b7161cd05a20afd14b4725138c79b1-default.png?v=10'
      },
      {
        name: 'Nintendo 64 Controller',
        rarity: 'raro',
        price: 247.5, // 66 USD * 3.75
        probability: 0.0283, // 0.000282965 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200747/conversions/1a1c2936eb8e393afba37ac4626256ae-default.png?v=10'
      },
      {
        name: 'Nintendo Switch 2 AC Adapter',
        rarity: 'raro',
        price: 187.5, // 50 USD * 3.75
        probability: 0.0990, // 0.000990437 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200748/conversions/39546c121b47b5cd5bf78756f4cbd705-default.png?v=10'
      },
      {
        name: 'Nintendo Switch 2 Carrying Case & Screen Protector',
        rarity: 'poco común',
        price: 183.75, // 49 USD * 3.75
        probability: 0.1071, // 0.001071107 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200749/conversions/1a32982a5b440ad57737a8280c6e1cc9-default.png?v=10'
      },
      {
        name: 'Nintendo Joy-Con 2 Charging Grip',
        rarity: 'poco común',
        price: 176.25, // 47 USD * 3.75
        probability: 0.1253, // 0.001252693 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200750/conversions/375601deac65ba1b27881960a2cfda46-default.png?v=10'
      },
      {
        name: 'Nintendo Joy-Con 2 Wheel (set of 2)',
        rarity: 'poco común',
        price: 123.75, // 33 USD * 3.75
        probability: 0.3749, // 0.003749102 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200751/conversions/c597732c1a5801f758ee3d85f41c0f0e-default.png?v=10'
      },
      {
        name: 'Drag x Drive',
        rarity: 'poco común',
        price: 97.5, // 26 USD * 3.75
        probability: 0.6486, // 0.006485877 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200752/conversions/95dc9316cafb7bca01d1e921f5212a6a-default.png?v=10'
      },
      {
        name: 'Nintendo Joy-Con 2 Straps (set of 2)',
        rarity: 'poco común',
        price: 74.96, // 19.99 USD * 3.75
        probability: 1.0384, // 0.010383511 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200753/conversions/5258e7c439755947cb388e72050cf931-default.png?v=10'
      },
      {
        name: 'Nintendo Switch 2 Welcome Tour',
        rarity: 'poco común',
        price: 56.21, // 14.99 USD * 3.75
        probability: 1.5359, // 0.015359383 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200754/conversions/601127c48dcc24424696b86518352ac2-default.png?v=10'
      },
      {
        name: 'Nintendo Mario Kart 7 Racing Collection Pull Back Racer',
        rarity: 'poco común',
        price: 45, // 12 USD * 3.75
        probability: 1.9411, // 0.019411158 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200328/conversions/87b4b0d0a6282f5f355bd29449d85962-default.png?v=10'
      },
      {
        name: '$10 Nintendo eShop Digital Gift Card',
        rarity: 'poco común',
        price: 37.5, // 10 USD * 3.75
        probability: 2.2702, // 0.022701955 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200332/conversions/aeb7a944ca4b9ab7c4bb4fd6ce9c89a6-default.jpg?v=10'
      },
      {
        name: 'Nintendo Switch Online 3-Month Membership',
        rarity: 'poco común',
        price: 33.71, // 8.99 USD * 3.75
        probability: 2.4570, // 0.024570231 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200333/conversions/7883fc2ece674def27d523c2e791a95c-default.png?v=10'
      },
      {
        name: '2.0 Screwdriver to Fix Nintendo Switch Joy-Con Joystick',
        rarity: 'poco común',
        price: 26.25, // 7 USD * 3.75
        probability: 2.8713, // 0.02871316 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200755/conversions/b6df43ce80fe38fa6d962adc131797d5-default.png?v=10'
      },
      {
        name: 'Silicone Rubber Skin Shell Cover Case for Switch Controller',
        rarity: 'poco común',
        price: 22.61, // 6.03 USD * 3.75
        probability: 3.0979, // 0.030978953 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200756/conversions/ebc8c2bb6fa61e1c020dc814f31a49a6-default.png?v=10'
      },
      {
        name: 'NES AV Audio Video Cable (Retro-Bit)',
        rarity: 'poco común',
        price: 20.89, // 5.57 USD * 3.75
        probability: 3.2115, // 0.032115113 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200757/conversions/5c9da495f5764d4a790bebe95e2cfb27-default.png?v=10'
      },
      {
        name: 'Tempered Glass Pack for NS/Nintendo Switch 2',
        rarity: 'poco común',
        price: 19.69, // 5.25 USD * 3.75
        probability: 3.6938, // 0.036937604 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200758/conversions/b966bd81f166d90dee9f00b4251783f5-default.png?v=10'
      },
      {
        name: '$5 Nintendo eShop Digital Gift Card',
        rarity: 'poco común',
        price: 18.75, // 5 USD * 3.75
        probability: 3.7668, // 0.037667795 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200331/conversions/24ef9bbf6de618885fe387febdbe4a88-default.png?v=10'
      },
      {
        name: 'Nintendo NES Custom Hard Case',
        rarity: 'común',
        price: 18.71, // 4.99 USD * 3.75
        probability: 3.7697, // 0.037697301 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200759/conversions/c2e6ea83206d2619acda0dc2cd8134a9-default.png?v=10'
      },
      {
        name: "America's Test Kitchen: Let's Get Cooking for Nintendo DS",
        rarity: 'común',
        price: 18.71, // 4.99 USD * 3.75
        probability: 3.7697,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200326/conversions/b4fdb7532ba5f5c76b759dd6706efff8-default.jpg?v=10'
      },
      {
        name: 'L/R SL SR ZL ZR L Button Ribbon Flex Cable Key Repair Sets',
        rarity: 'común',
        price: 13.09, // 3.49 USD * 3.75
        probability: 11.9611, // 0.119611391 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200760/conversions/c7938684883b37f44ed41aa08f39d8ef-default.png?v=10'
      },
      {
        name: 'Replacement 3.5mm Headphone Jack Port Socket for Switch NS Console',
        rarity: 'común',
        price: 11.21, // 2.99 USD * 3.75
        probability: 12.4387, // 0.124387144 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200761/conversions/87c67eaef9e97ee52d0a706c8693f5b0-default.png?v=10'
      },
      {
        name: 'Thumb Grips Cover for Joy-Con Switch Lite',
        rarity: 'común',
        price: 7.5, // 2 USD * 3.75
        probability: 13.4413, // 0.134413023 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200762/conversions/81170c4ffceba6130d0e9225352fe480-default.png?v=10'
      },
      {
        name: 'Nintendo DS Lite Clip On Headset - Black',
        rarity: 'común',
        price: 7.46, // 1.99 USD * 3.75
        probability: 13.4518, // 0.134518312 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200763/conversions/39e7674c0596e792c62f134c83261826-default.png?v=10'
      },
      {
        name: 'Nintendo JoyCon Strawberry Joystick Thumb Grips Cover',
        rarity: 'común',
        price: 6.56, // 1.75 USD * 3.75
        probability: 13.7070, // 0.137070131 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200764/conversions/e92de5ab9a8d1b47f75f06bc59699b14-default.png?v=10'
      }
    ]
  },
  {
    id: 'nfl-trading-cards',
    name: 'Caja Misteriosa Cartas Coleccionables NFL',
    price: 6.38, // 1.7 USD * 3.75
    originalPrice: 8.61, // 6.38 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/199506/conversions/21260c75b5f5f99b27ca97b8a1f13efa-webp.webp',
    description: 'Descubre cartas coleccionables NFL en cada caja misteriosa',
    items: [
      {
        name: 'NFL Football Mystery Pack',
        rarity: 'épico',
        price: 1121.25, // 299 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199181/conversions/599aa79076ddc30a7818e837ec987d3e-default.png?v=10'
      },
      {
        name: 'NFL 2021 Score Football Trading Card Cello Box',
        rarity: 'raro',
        price: 746.25, // 199 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199198/conversions/529efcf043e0135eff01132364aeb3a9-default.png?v=10'
      },
      {
        name: '2023 Panini Contenders NFL Football Factory Mega Box',
        rarity: 'raro',
        price: 558.75, // 149 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199197/conversions/090d2e731702b9f745ce07d6d88a9abb-default.png?v=10'
      },
      {
        name: '2019 Panini Instant RPS FL19 DK Metcalf Seattle Seahawks',
        rarity: 'raro',
        price: 450, // 120 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199194/conversions/b48ac8b5fb574001310ac19fa225fc76-default.jpg?v=10'
      },
      {
        name: 'NFL Jacksonville Jaguars Team Card Sets',
        rarity: 'raro',
        price: 333.75, // 89 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199193/conversions/37772d5d6cc6fc25d26b5998a53fda25-default.png?v=10'
      },
      {
        name: 'NFL Tampa Bay Buccaneers Team Card Sets',
        rarity: 'raro',
        price: 294.71, // 78.59 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199192/conversions/b5d484a76869fea94cf31101e0893e98-default.png?v=10'
      },
      {
        name: 'C&I Collectables NFL New York Giants Trading Cards Set',
        rarity: 'raro',
        price: 261.34, // 69.69 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199191/conversions/ec902f28a092ce8b6f053a1257d55828-default.png?v=10'
      },
      {
        name: 'NFL Carolina Panthers Team Card Set',
        rarity: 'raro',
        price: 247.5, // 66 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199190/conversions/69be649a82818a2da284380da5c929d2-default.png?v=10'
      },
      {
        name: 'NFL Baltimore Ravens Trading Card Team Sets',
        rarity: 'poco común',
        price: 206.25, // 55 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199208/conversions/99c6204de1382d6b142935b3170888c8-default.png?v=10'
      },
      {
        name: '2024 Panini Score Football Trading Cards NFL Blaster Box',
        rarity: 'poco común',
        price: 138.75, // 37 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199207/conversions/8899c4a19bdcc189dbb60e2e5ebf9998-default.png?v=10'
      },
      {
        name: '2010 Topps # 194 Colt McCoy RC Cleveland Browns',
        rarity: 'poco común',
        price: 112.46, // 29.99 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199206/conversions/2e1aef0619b2fc5999828ae425bf9e38-default.jpg?v=10'
      },
      {
        name: '2024 Panini Donruss Football NFL Football Trading Cards Tin',
        rarity: 'poco común',
        price: 93.75, // 25 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199205/conversions/620ddb19a7faa2975fea284bae9d9f48-default.png?v=10'
      },
      {
        name: '2018 Donruss Legends of the Fall #9 Charles Woodson Oakland Raiders',
        rarity: 'poco común',
        price: 41.25, // 11 USD * 3.75
        probability: 0.1003, // 0.00100262 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199209/conversions/bf10b90e3c14d65d5f6d76711d869777-default.jpg?v=10'
      },
      {
        name: '2019 Absolute Absolute Rookie Materials #19 Hakeem Butler',
        rarity: 'poco común',
        price: 37.5, // 10 USD * 3.75
        probability: 0.1517, // 0.001516875 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199204/conversions/53a679f1877f06700f459c565f64a04d-default.jpg?v=10'
      },
      {
        name: '2014 NFL Panini Stickers #327 Minnesota Vikings Minnesota Vikings',
        rarity: 'poco común',
        price: 37.46, // 9.99 USD * 3.75
        probability: 0.1523, // 0.001523169 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199203/conversions/25beaa2a4dd0fbd83755cd6300b2184d-default.jpg?v=10'
      },
      {
        name: '2014 NFL Panini Stickers #178 Peyton Manning Denver Broncos',
        rarity: 'poco común',
        price: 28.28, // 7.54 USD * 3.75
        probability: 0.4200, // 0.004200405 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199202/conversions/48825382c79cd667e681f41f7cd76219-default.jpg?v=10'
      },
      {
        name: '2021 Panini #167 Kylin Hill Green Bay Packers Card',
        rarity: 'poco común',
        price: 18.75, // 5 USD * 3.75
        probability: 1.2023, // 0.012023128 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199201/conversions/8b104067300c661d0a0bceb0b7fa6937-default.jpg?v=10'
      },
      {
        name: '1990 Pro Set Football #455 William Perry Chicago Bears Card',
        rarity: 'poco común',
        price: 14.96, // 3.99 USD * 3.75
        probability: 1.8265, // 0.018265397 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199200/conversions/42374bfa444841d1fbd8003cbc8d0d0d-default.jpg?v=10'
      },
      {
        name: '2024 Score-A-Treat #43 Shaq Thompson Carolina Panthers',
        rarity: 'común',
        price: 8.25, // 2.2 USD * 3.75
        probability: 3.8326, // 0.038326159 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199219/conversions/670d7ddc0b90988b463f3fd2d0579d30-default.jpg?v=10'
      },
      {
        name: '2024 Score-A-Treat #242 Hines Ward Pittsburgh Steelers',
        rarity: 'común',
        price: 8.25, // 2.2 USD * 3.75
        probability: 3.8326,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199218/conversions/c44ca631f21a37131683ba1cf7e2198d-default.jpg?v=10'
      },
      {
        name: '1989 Topps Traded Football #96T A.J. Johnson RC Rookie',
        rarity: 'común',
        price: 7.5, // 2 USD * 3.75
        probability: 4.1635, // 0.041634945 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199217/conversions/87f8926012d4f9a84f041e4a08754ce6-default.png?v=10'
      },
      {
        name: '1990 Topps #505 Bernie Kosar Cleveland Browns Card',
        rarity: 'común',
        price: 7.43, // 1.98 USD * 3.75
        probability: 4.1981, // 0.041981144 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199215/conversions/09d0d0023ac3f9d578f4cf6d41e1afd2-default.png?v=10'
      },
      {
        name: '1990 Topps #406 Paul Gruber Tampa Bay Buccaneers Card',
        rarity: 'común',
        price: 6.75, // 1.8 USD * 3.75
        probability: 4.9104, // 0.049103514 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199214/conversions/6860d1a71094514b5a6032269bc2c1a9-default.jpg?v=10'
      },
      {
        name: '1990 Pro Set Football #662 Ravin Caldwell RC Rookie Card',
        rarity: 'común',
        price: 6.64, // 1.77 USD * 3.75
        probability: 4.9717, // 0.049717236 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199213/conversions/608d66d2f7086e582eae29e4474e0e28-default.jpg?v=10'
      },
      {
        name: '1990 Topps #485 Steve Folsom RC Rookie Dallas Cowboys',
        rarity: 'común',
        price: 6.38, // 1.7 USD * 3.75
        probability: 5.1179, // 0.05117925 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199212/conversions/3268ec7838511e6f3be0dc2954ce9a3c-default.png?v=10'
      },
      {
        name: '1990 Pro Set Football #323 Darrell Green Card',
        rarity: 'común',
        price: 5.63, // 1.5 USD * 3.75
        probability: 9.1428, // 0.091427908 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199210/conversions/b2d55aa4cb9cb38547d453cd25615cb7-default.jpg?v=10'
      },
      {
        name: '1990 Topps #35 Karl Mecklenburg Denver Broncos Card',
        rarity: 'común',
        price: 5.44, // 1.45 USD * 3.75
        probability: 9.3340, // 0.093340357 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199227/conversions/582a8a5e3a106607519a148bcabe710c-default.jpg?v=10'
      },
      {
        name: '2012 Topps Football #55 Roy Helu Card',
        rarity: 'común',
        price: 4.99, // 1.33 USD * 3.75
        probability: 9.8095, // 0.098095047 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199225/conversions/bf80c176bba1e9085a9c71eeb75c6f46-default.png?v=10'
      },
      {
        name: '1990 Topps Football #221 Allen Pinkett Houston Oilers Card',
        rarity: 'común',
        price: 4.5, // 1.2 USD * 3.75
        probability: 10.3520, // 0.10351966 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199224/conversions/b38362ca5aebf12ef14904c191ccb5d4-default.jpg?v=10'
      },
      {
        name: '2012 #357 Mohamed Sanu RC Cincinnati Bengals Card',
        rarity: 'común',
        price: 2.81, // 0.75 USD * 3.75
        probability: 12.4721, // 0.124720808 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199222/conversions/df2374907e6661e7ae8af820530902f9-default.png?v=10'
      },
      {
        name: '1990 Topps Football #189 Dwayne Woodruff Pittsburgh Steelers',
        rarity: 'común',
        price: 1.84, // 0.49 USD * 3.75
        probability: 13.8896, // 0.138896221 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199220/conversions/85a8844b1ed11c32f3bf2bc019abdfde-default.png?v=10'
      }
    ]
  },
  {
    id: 'stumble-guys-toys',
    name: 'Caja Misteriosa Juguetes Stumble Guys',
    price: 5.14, // 1.37 USD * 3.75
    originalPrice: 6.94, // 5.14 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/202539/conversions/93eb942feaa918b7ec4af87518c61261-webp.webp',
    description: 'Descubre juguetes y figuras de Stumble Guys en cada caja misteriosa',
    items: [
      {
        name: 'Stumble Guys Collectible Action Figures Pack',
        rarity: 'raro',
        price: 504.9, // 134.64 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197289/conversions/b7c5adc0fa8cc2bbf5fa3d5d45a8da09-default.png?v=10'
      },
      {
        name: 'Bandai Mr Stumble Soft Toy',
        rarity: 'raro',
        price: 382.5, // 102 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197288/conversions/6f4e1d98320a07bc6e3a3a469feb6013-default.png?v=10'
      },
      {
        name: 'Stumble Guys Series 2 Collectible Figures 12-Pack Box',
        rarity: 'raro',
        price: 229.5, // 61.2 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197287/conversions/26d2f80c4fca2541e5aad24ef79fe25e-default.png?v=10'
      },
      {
        name: 'Stumble Guys Series 2 Hot Glove Mclove Plush Buddies',
        rarity: 'poco común',
        price: 96.9, // 25.84 USD * 3.75
        probability: 0.0500, // 0.0005 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197294/conversions/03d38428beb051ea8f2fd1ea5559607b-default.png?v=10'
      },
      {
        name: 'Stumble Guys Dragon Inferno Plush Buddies',
        rarity: 'poco común',
        price: 76.5, // 20.4 USD * 3.75
        probability: 0.0960, // 0.000959951 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197295/conversions/0634185e032af2d9bb11efa822436c9e-default.png?v=10'
      },
      {
        name: 'Stumble Guys Sprinkles Huggable Plush',
        rarity: 'poco común',
        price: 61.2, // 16.32 USD * 3.75
        probability: 0.0951, // 0.000951393 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197290/conversions/a8793ff1ed2c93a71e87d4d4a5d6a7ba-default.png?v=10'
      },
      {
        name: 'Stumble Guys S1 Action Figure Sprinkles',
        rarity: 'poco común',
        price: 56.25, // 15 USD * 3.75
        probability: 0.1448, // 0.001447633 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199011/conversions/e73ae1fa1427dec97112926863726c47-default.png?v=10'
      },
      {
        name: 'P.M.I. Stumble Guys Series 2 Stumbling Blocks Playset',
        rarity: 'poco común',
        price: 37.5, // 10 USD * 3.75
        probability: 0.4099, // 0.004098789 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199009/conversions/a31c8e8272823f49ff7eb747bc106004-default.png?v=10'
      },
      {
        name: 'Stumble Guys Series 2 Boxing Roo Action Figure',
        rarity: 'poco común',
        price: 37.46, // 9.99 USD * 3.75
        probability: 0.7121, // 0.007121399 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199012/conversions/862451dd7bb17e423bb4e1d0afa641ba-default.png?v=10'
      },
      {
        name: 'Stumble Guys Series 2 Dusk Dragon Action Figure',
        rarity: 'poco común',
        price: 30, // 8 USD * 3.75
        probability: 1.3409, // 0.013408942 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/199010/conversions/7d614c11d059b35a9920408be16b87cd-default.png?v=10'
      },
      {
        name: 'JemLit Credits',
        rarity: 'común',
        price: 8.93, // 2.38 USD * 3.75
        probability: 8.0084, // 0.080083917 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201667/conversions/52d292d28d71c14edb8f80c6d6854862-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 7.65, // 2.04 USD * 3.75
        probability: 8.9228, // 0.089227977 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201642/conversions/c6b75d8550ae3e2a970468b0b1a7cf59-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 5.1, // 1.36 USD * 3.75
        probability: 15.2, // 0.152 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201657/conversions/4035183d9e16b7e6be92606266d435c6-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 4.58, // 1.22 USD * 3.75
        probability: 10.8337, // 0.108337398 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201662/conversions/d1b0fc7d5e4211dc29cf3faa4ba5c3f7-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 4.58, // 1.22 USD * 3.75
        probability: 10.8337,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201658/conversions/da6ed9537668f5111c40620c2fdc722a-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 1.5, // 0.4 USD * 3.75
        probability: 14.0613, // 0.140612718 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201672/conversions/7d7fbec136e04c18c0038b1e267c6885-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 1.31, // 0.35 USD * 3.75
        probability: 14.2866, // 0.142866321 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201671/conversions/5658398a6f9106019786c87e9deca756-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 0.75, // 0.2 USD * 3.75
        probability: 14.9846, // 0.149846164 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201682/conversions/3ae32320c18e1c270b5e218042c49ebf-default.png?v=10'
      }
    ]
  },
  {
    id: 'budget-xbox-series-x-s',
    name: 'Caja Misteriosa Xbox Series X/S Económica',
    price: 11.25, // 3 USD * 3.75
    originalPrice: 15.19, // 11.25 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/201483/conversions/b5f6397cda1c634da25c39434d72f966-webp.webp',
    description: 'Descubre consolas Xbox Series X/S y accesorios en cada caja misteriosa',
    items: [
      {
        name: 'Xbox Series S Console 1TB with Controller',
        rarity: 'épico',
        price: 2544.83, // 678.62 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197093/conversions/f326a20ac9abcadd519615934b25ce63-default.png?v=10'
      },
      {
        name: 'Xbox Series X Console (Renewed)',
        rarity: 'épico',
        price: 2381.25, // 635 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200784/conversions/6ad5e48496f4758d7bb3686432ed4adf-default.png?v=10'
      },
      {
        name: 'Xbox Serie S',
        rarity: 'épico',
        price: 1540.16, // 410.71 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194183/conversions/5886a54c5a1f84abc47a841449f983dc-default.png?v=10'
      },
      {
        name: 'Microsoft Xbox Series S 512GB SSD Console and Controller',
        rarity: 'épico',
        price: 1406.25, // 375 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200783/conversions/0a7a086c823417e4b33b0d5e2ee8d38e-default.png?v=10'
      },
      {
        name: 'Microsoft Xbox One X 1TB Console with Wireless Controller',
        rarity: 'épico',
        price: 1218.75, // 325 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200782/conversions/a7ddd41202e622f3b046eaf44ed689e8-default.png?v=10'
      },
      {
        name: 'Xbox Elite Wireless Controller Series 2',
        rarity: 'raro',
        price: 708.86, // 189.03 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197099/conversions/88497e7961c2e87539414e06bc7fc5f2-default.png?v=10'
      },
      {
        name: 'Xbox Adaptive Controller',
        rarity: 'raro',
        price: 637.46, // 169.99 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197097/conversions/0aa29923866d1e0288c972d904fe4b42-default.png?v=10'
      },
      {
        name: 'Xbox Gift Card',
        rarity: 'raro',
        price: 510, // 136 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197096/conversions/da070ebe870316f493e7e7d0fb6249b8-default.png?v=10'
      },
      {
        name: 'Xbox Wireless Controller – Sky Cipher Special Edition',
        rarity: 'raro',
        price: 382.5, // 102 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197102/conversions/1977b063d3151c6b8bcd73bd92422638-default.png?v=10'
      },
      {
        name: 'Mando inalámbrico Xbox Blanco',
        rarity: 'raro',
        price: 316.2, // 84.32 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194185/conversions/14d8206afe8cde07a9447413c5035cc3-default.png?v=10'
      },
      {
        name: 'Halo Infinito Xbox Serie X',
        rarity: 'raro',
        price: 265.2, // 70.72 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194216/conversions/a9b7563080cef13555ced783c0973319-default.jpg?v=10'
      },
      {
        name: 'Xbox Chat Headset',
        rarity: 'raro',
        price: 204, // 54.4 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197108/conversions/37f531466b21ea98908670c8778a913d-default.png?v=10'
      },
      {
        name: 'Xbox Series X/S Vertical Stand with Cooling Fan',
        rarity: 'poco común',
        price: 127.5, // 34 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197114/conversions/b7c0c45472d9b1397b37e3ae0f6b9ed8-default.png?v=10'
      },
      {
        name: 'Dual Charging Station for Xbox Wireless Controllers',
        rarity: 'poco común',
        price: 102, // 27.2 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197113/conversions/32aad2289c62e87d7b73c6e056ab6020-default.png?v=10'
      },
      {
        name: 'Soporte vertical de refrigeración para Xbox Series S',
        rarity: 'poco común',
        price: 101.48, // 27.06 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194230/conversions/a5b19f4a4a9a316696122b45e3ee29ea-default.png?v=10'
      },
      {
        name: 'Kit Pdp Juega Y Carga Xbox Series XS',
        rarity: 'poco común',
        price: 81.6, // 21.76 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193553/conversions/7fd84cdb222e191e0fa080002a916587-default.png?v=10'
      },
      {
        name: 'Xbox Controller Thumbstick Grips',
        rarity: 'poco común',
        price: 76.5, // 20.4 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197115/conversions/422e3ea0a527fff6ce90f20791fa13df-default.png?v=10'
      },
      {
        name: 'Xbox Series X Keychain',
        rarity: 'poco común',
        price: 61.2, // 16.32 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197116/conversions/04bc031d56388308732acaaf3ba150b5-default.png?v=10'
      },
      {
        name: 'Universal Adhesive Game Controller Organizer Wall Mount and Clip',
        rarity: 'poco común',
        price: 52.5, // 14 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200371/conversions/89f018c4e044e6793edd0a081a41b860-default.png?v=10'
      },
      {
        name: 'Xbox Gift Card',
        rarity: 'poco común',
        price: 51, // 13.6 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/197117/conversions/814203130f179a7027d1d29f949d880e-default.png?v=10'
      },
      {
        name: 'Rainbow Stripes Decal Vinyl Skin Wrap for Xbox One S/X Controller',
        rarity: 'poco común',
        price: 48.75, // 13 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200370/conversions/d04ddd06e0ee54e18cd4fa9d39409e70-default.png?v=10'
      },
      {
        name: 'Funda protectora para mando Xbox Series XS',
        rarity: 'poco común',
        price: 38.25, // 10.2 USD * 3.75
        probability: 0.0157, // 0.000156556 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193554/conversions/2bedaf660adf57bd389ab719e0582d5c-default.png?v=10'
      },
      {
        name: 'Front Housing Shell Case Cover for Xbox One Wireless Controller',
        rarity: 'poco común',
        price: 26.25, // 7 USD * 3.75
        probability: 0.2641, // 0.002641011 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200373/conversions/3e5949ee0c6dce3af4efbe5be082ea0a-default.png?v=10'
      },
      {
        name: 'TX X-Clamp Removal Tool for Xbox 360',
        rarity: 'común',
        price: 14.96, // 3.99 USD * 3.75
        probability: 3.7671, // 0.037671336 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200465/conversions/99ea70377e23dc52b334e99926e25aa3-default.png?v=10'
      },
      {
        name: 'ABXY Yellow Bullet Buttons Mod Kit for Xbox One',
        rarity: 'común',
        price: 14.63, // 3.9 USD * 3.75
        probability: 4.0787, // 0.040787136 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200473/conversions/e9e4c0398a3beebc3ac3408ffcb7fe01-default.png?v=10'
      },
      {
        name: 'HDMI Port Socket Interface Connector Jack Replacement for Xbox One/Slim S Console',
        rarity: 'común',
        price: 13.13, // 3.5 USD * 3.75
        probability: 5.8064, // 0.058064499 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200466/conversions/9ecac1da6bdff1cab72152ba7114670d-default.png?v=10'
      },
      {
        name: 'Xbox 360 Max Live Headset',
        rarity: 'común',
        price: 13.09, // 3.49 USD * 3.75
        probability: 5.8580, // 0.058579461 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200467/conversions/8cae00b6bd67e72d6b379dd6706ef184-default.png?v=10'
      },
      {
        name: 'Plated Chrome D-Pad Key Button for Xbox One',
        rarity: 'común',
        price: 12, // 3.2 USD * 3.75
        probability: 1.5174, // 0.015174109 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200468/conversions/55fdd075d8676e34b0c6d72640d6e121-default.png?v=10'
      },
      {
        name: 'Battery Spring Tablets Conductive Spring for Xbox 360 Controller',
        rarity: 'común',
        price: 11.63, // 3.1 USD * 3.75
        probability: 1.6575, // 0.016574867 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200469/conversions/a0b6f87d285b6f6a6cde48aecfaa80f8-default.png?v=10'
      },
      {
        name: 'D-Pad Button Metal Dome Film Sticker for Xbox One',
        rarity: 'común',
        price: 11.21, // 2.99 USD * 3.75
        probability: 1.8266, // 0.018265502 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200470/conversions/e2dc9b6977466960bdb19ec9ef0d7aa1-default.png?v=10'
      },
      {
        name: '4 Pcs Silicone Thumb Stick Grip Caps',
        rarity: 'común',
        price: 11.18, // 2.98 USD * 3.75
        probability: 1.8427, // 0.018427495 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200471/conversions/c91274ff580e56c4097b47c9e0eaa122-default.png?v=10'
      },
      {
        name: '20 Pcs 9mm T8 Screws Head 7mm T6 Screw Set for Xbox One',
        rarity: 'común',
        price: 11.1, // 2.96 USD * 3.75
        probability: 1.8756, // 0.018755804 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200472/conversions/3828c33cd79c03599f6e39d6563ede7e-default.png?v=10'
      },
      {
        name: 'RB LB Switch Bumper Buttons Xbox One/360',
        rarity: 'común',
        price: 10.84, // 2.89 USD * 3.75
        probability: 1.9952, // 0.019951635 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200474/conversions/8142364d1c10e6f2747ecc198874d2c0-default.png?v=10'
      },
      {
        name: 'Xbox 360 Game Face Refill Pack',
        rarity: 'común',
        price: 10.69, // 2.85 USD * 3.75
        probability: 2.0669, // 0.020668894 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200475/conversions/98a52bad11677f3cddc8269d15daf245-default.png?v=10'
      },
      {
        name: 'Thumbstick Accent Rings Replacement for Xbox One Elite',
        rarity: 'común',
        price: 10.39, // 2.77 USD * 3.75
        probability: 2.2182, // 0.022181695 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200476/conversions/cac9ebca85a566681d8cc57a6bec9dfb-default.png?v=10'
      },
      {
        name: 'Silicone Skin Case Protective Gel Cover Grip for Xbox Series S/X',
        rarity: 'común',
        price: 9.98, // 2.66 USD * 3.75
        probability: 5.9435, // 0.059434791 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200477/conversions/94cefbde57964b368e83c84f8ad6b3b9-default.png?v=10'
      },
      {
        name: 'Battery Back Cover Lid Door Case for Xbox One Controller',
        rarity: 'común',
        price: 9.38, // 2.5 USD * 3.75
        probability: 6.8454, // 0.068453511 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200478/conversions/72a9c8735a2e71259beed4b74792eb61-default.png?v=10'
      },
      {
        name: 'LB RB Bumper Button Key Trigger Mod Kit for Xbox Series S/X',
        rarity: 'común',
        price: 9.34, // 2.49 USD * 3.75
        probability: 6.9061, // 0.069060611 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200479/conversions/5728af61d49f3efda47374c4dff9f27b-default.png?v=10'
      },
      {
        name: 'Analog Stick Thumb Stick Grips Pack',
        rarity: 'común',
        price: 8.25, // 2.2 USD * 3.75
        probability: 8.9215, // 0.089214683 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200480/conversions/c8fc4b11ef02915430248aa2f487a1ad-default.png?v=10'
      },
      {
        name: 'Silicone Analog Thumb Grips Caps',
        rarity: 'común',
        price: 7.5, // 2 USD * 3.75
        probability: 10.6446, // 0.106446178 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200481/conversions/fa1171d16f481992666d7ed0e8d197ac-default.png?v=10'
      },
      {
        name: 'Single Thumbsticks Cover',
        rarity: 'común',
        price: 7.46, // 1.99 USD * 3.75
        probability: 10.7390, // 0.107390227 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/200482/conversions/f9dc4b225b816baf5dc1264b71423111-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 5.1, // 1.36 USD * 3.75
        probability: 15.0, // 0.15 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201657/conversions/4035183d9e16b7e6be92606266d435c6-default.png?v=10'
      }
    ]
  },
  {
    id: 'new-york-dream',
    name: 'Caja Misteriosa Viaje a NYC',
    price: 201.94, // 53.85 USD * 3.75
    originalPrice: 272.62, // 201.94 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/202523/conversions/c999d828872bcc52ac56a2cf518f0790-webp.webp',
    description: 'Descubre experiencias y productos de Nueva York en cada caja misteriosa',
    items: [
      {
        name: 'Entradas y hotel para la experiencia de Nueva York',
        rarity: 'legendario',
        price: 50998.16, // 13599.51 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194994/conversions/73fa54c5cffefa0f043a4f60d9e55872-default.png?v=10'
      },
      {
        name: 'Vale de entradas de hotel',
        rarity: 'legendario',
        price: 10209.83, // 2722.62 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193738/conversions/89bfffc9ac56085afa26f8d7366efa23-default.png?v=10'
      },
      {
        name: 'Vale de billetes de avión',
        rarity: 'legendario',
        price: 10209.83, // 2722.62 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193737/conversions/58d99867f11a247c0704f1d7bc1052d3-default.png?v=10'
      },
      {
        name: 'Vale de billetes de avión',
        rarity: 'raro',
        price: 1540.16, // 410.71 USD * 3.75
        probability: 0.3336, // 0.003335855 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/193728/conversions/2d69f4b414e15a3379113199e0d39b67-default.png?v=10'
      },
      {
        name: 'Tour en helicóptero por Nueva York: lo más destacado de Manhattan',
        rarity: 'raro',
        price: 1473.86, // 393.03 USD * 3.75
        probability: 0.3933, // 0.003932564 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194996/conversions/19bc0ba80f9ad5147b770b14fa6a4bde-default.jpg?v=10'
      },
      {
        name: 'Crucero con cena en Nueva York',
        rarity: 'raro',
        price: 912.86, // 243.43 USD * 3.75
        probability: 1.5827, // 0.015827429 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194995/conversions/ac7d7aec7567f17d77ad63f3117dc68c-default.jpg?v=10'
      },
      {
        name: 'Nueva York en visita turística guiada de un día',
        rarity: 'raro',
        price: 662.96, // 176.79 USD * 3.75
        probability: 2.9430, // 0.029430128 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194998/conversions/a4d53b396fd7cecaa9c44c047b38e710-default.jpg?v=10'
      },
      {
        name: 'New Era Mens New York Yankees Serie Mundial 2000 59Fifty',
        rarity: 'poco común',
        price: 336.6, // 89.76 USD * 3.75
        probability: 6.6160, // 0.066160278 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194999/conversions/f95d5def69de8b7be7a2b18afc167177-default.png?v=10'
      },
      {
        name: 'Tour por la Estatua de la Libertad y la Isla Ellis',
        rarity: 'poco común',
        price: 255, // 68 USD * 3.75
        probability: 8.1014, // 0.081013746 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/194997/conversions/81c32bca90dc3fcb8f438c120de82745-default.jpg?v=10'
      },
      {
        name: 'LEGO 21028 Architecture Horizonte de la ciudad de Nueva York',
        rarity: 'poco común',
        price: 183.6, // 48.96 USD * 3.75
        probability: 15.0, // 0.15 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195001/conversions/2a8f21864c0406572004fade67c2d9af-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'poco común',
        price: 153, // 40.8 USD * 3.75
        probability: 11.6084, // 0.116084139 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201646/conversions/7ba6d0f4ea46345dc7e6e8b158e93166-default.png?v=10'
      },
      {
        name: 'Amo la camiseta de Nueva York',
        rarity: 'poco común',
        price: 112.2, // 29.92 USD * 3.75
        probability: 12.8456, // 0.128455759 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195000/conversions/ff373d1c303e3c59b4f40bcbd6958b24-default.png?v=10'
      },
      {
        name: 'Impresión de trabajadores de Nueva York',
        rarity: 'poco común',
        price: 102, // 27.2 USD * 3.75
        probability: 13.1749, // 0.131749433 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195002/conversions/1cc25c135314c29014542e8813446a75-default.png?v=10'
      },
      {
        name: 'Libro de colorear para adultos de la ciudad de Nueva York',
        rarity: 'poco común',
        price: 86.7, // 23.12 USD * 3.75
        probability: 13.6849, // 0.136848965 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195004/conversions/9ad79b6d531ec1cd15279c7ee5d62bf0-default.jpg?v=10'
      },
      {
        name: 'Guía de viaje de la ciudad de Nueva York',
        rarity: 'poco común',
        price: 86.66, // 23.11 USD * 3.75
        probability: 13.6862, // 0.136861703 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/195003/conversions/5067fd80fd709f044161ceb3443d9253-default.jpg?v=10'
      }
    ]
  },
  {
    id: 'steam-gift-cards',
    name: 'Caja Misteriosa Steam Gift Cards',
    price: 4.91, // 1.31 USD * 3.75
    originalPrice: 6.63, // 4.91 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/202538/conversions/83f18d76ba73331924d247738d6d6396-webp.webp',
    description: 'Descubre tarjetas de regalo de Steam en cada caja misteriosa',
    items: [
      {
        name: 'Tarjeta de regalo de vapor 100',
        rarity: 'raro',
        price: 510, // 136 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196436/conversions/42d54e7244b75610bbe49ec1cba550e4-default.png?v=10'
      },
      {
        name: 'Tarjeta de regalo de vapor 50',
        rarity: 'raro',
        price: 255, // 68 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196435/conversions/b1760f73d5afd232d5c6e6dc4e4d4c53-default.png?v=10'
      },
      {
        name: 'Steam Gift Card 25',
        rarity: 'poco común',
        price: 127.5, // 34 USD * 3.75
        probability: 0.0291, // 0.000291488 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196438/conversions/e606651c2e8461b46aa96f3f68be8f95-default.png?v=10'
      },
      {
        name: 'Steam Gift Card 10',
        rarity: 'poco común',
        price: 51, // 13.6 USD * 3.75
        probability: 1.3723, // 0.013722993 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/196437/conversions/8431b751ef4918d91e97ad74e0897991-default.png?v=10'
      },
      {
        name: 'JemLit Credits',
        rarity: 'común',
        price: 20.4, // 5.44 USD * 3.75
        probability: 6.4059, // 0.064059025 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/203646/conversions/b06669c882cbe27c73de059ef91c73a8-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 7.65, // 2.04 USD * 3.75
        probability: 12.1726, // 0.121726494 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201642/conversions/c6b75d8550ae3e2a970468b0b1a7cf59-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 4.58, // 1.22 USD * 3.75
        probability: 15.0, // 0.15 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201658/conversions/da6ed9537668f5111c40620c2fdc722a-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 2.55, // 0.68 USD * 3.75
        probability: 12.2924, // 0.122923685 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201641/conversions/35020ccbf4db7b1e2d35f47196330dbb-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 1.5, // 0.4 USD * 3.75
        probability: 12.9597, // 0.129597303 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201672/conversions/7d7fbec136e04c18c0038b1e267c6885-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 1.31, // 0.35 USD * 3.75
        probability: 13.0827, // 0.130826594 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201671/conversions/5658398a6f9106019786c87e9deca756-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 1.13, // 0.3 USD * 3.75
        probability: 13.2068, // 0.132067545 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201670/conversions/7533287f0614bd4d70f23d6b4f0318d0-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 0.75, // 0.2 USD * 3.75
        probability: 13.4585, // 0.134584872 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201682/conversions/3ae32320c18e1c270b5e218042c49ebf-default.png?v=10'
      }
    ]
  },
  {
    id: 'labubu-5-percent',
    name: 'Caja Misteriosa Labubu Económico',
    price: 15, // 4 USD * 3.75
    originalPrice: 20.25, // 15 * 1.35
    image: 'https://d3ht839xyrpcqw.cloudfront.net/203012/conversions/3ebb6bb5c62de1979c085b315b6032af-webp.webp',
    description: 'Descubre figuras y accesorios de Labubu en cada caja misteriosa',
    items: [
      {
        name: 'Labubu The Monsters Big into Energy Series Blind Box Set',
        rarity: 'épico',
        price: 1781.25, // 475 USD * 3.75
        probability: 0.0100, // 0.0001 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201610/conversions/6af990ccd0e7cfcb362b638ab4969350-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters Coca Cola Series Vinyl Face Blind Box Set',
        rarity: 'épico',
        price: 1650, // 440 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201611/conversions/d84a1cfbeb548aca307c7ff4a83f916c-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters Time to Chill Vinyl Plush Doll Single',
        rarity: 'épico',
        price: 1200, // 320 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201612/conversions/3fa8768fb1e07c36a6a8e1328b92804b-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters FLIP with ME Vinyl Plush Doll 40cm',
        rarity: 'raro',
        price: 933.75, // 249 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201613/conversions/32add6d3bf772be49df06cc6bf2b01fa-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters Fall in Wild Series Vinyl Plush Hanging Toy Single',
        rarity: 'raro',
        price: 600, // 160 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201614/conversions/e351466c65312f9d3dc2e90f1b3f8528-default.png?v=10'
      },
      {
        name: "Labubu The Monsters Let's Checkmate Series Vinyl Plush Hanging Toy Single",
        rarity: 'raro',
        price: 487.5, // 130 USD * 3.75
        probability: 0.0100,
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201615/conversions/18fdbed1bffcc558ef24d8e7beb21646-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters Have a Seat Vinyl Plush Blind Box Single',
        rarity: 'raro',
        price: 356.25, // 95 USD * 3.75
        probability: 0.0247, // 0.000247499 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201616/conversions/d37414e6b90b7b1ae00371e883d05e79-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters x Kow Yokoyama Ma.K. Blind Box Single',
        rarity: 'raro',
        price: 337.5, // 90 USD * 3.75
        probability: 0.0338, // 0.000337602 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201617/conversions/44002cbb2a8c45346cf55c94bbcb801b-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters Big into Energy Phone Case',
        rarity: 'poco común',
        price: 165, // 44 USD * 3.75
        probability: 0.5873, // 0.005872917 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201712/conversions/9320c37931d0f017e904acf09e227210-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters × One Piece Series Figures',
        rarity: 'poco común',
        price: 146.25, // 39 USD * 3.75
        probability: 0.8011, // 0.008010972 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201714/conversions/402eb94a6a2648d46089c5b6606ca789-default.png?v=10'
      },
      {
        name: 'Labubu The Monsters Classic Series Blind Box Single',
        rarity: 'poco común',
        price: 105, // 28 USD * 3.75
        probability: 1.5860, // 0.015860403 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201618/conversions/9d17299a2dff416509296a4e99c72f26-default.png?v=10'
      },
      {
        name: 'Plastic Cover Protective Case for Labubu',
        rarity: 'poco común',
        price: 35.63, // 9.5 USD * 3.75
        probability: 5.0025, // 0.050025366 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201619/conversions/49587885f84596b6f794a912c1bcac19-default.png?v=10'
      },
      {
        name: 'Mini Bed for Labubu Sofa',
        rarity: 'poco común',
        price: 34.69, // 9.25 USD * 3.75
        probability: 5.0808, // 0.05080797 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201620/conversions/a9cb3b0f5b4b5369d1db36efc3cf232b-default.png?v=10'
      },
      {
        name: 'Fashion Glasses Suitable for Labubu Doll',
        rarity: 'poco común',
        price: 16.88, // 4.5 USD * 3.75
        probability: 6.8237, // 0.068237271 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201729/conversions/a0fe09ff0b99954d4e8189ccc1987a3d-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 15.3, // 4.08 USD * 3.75
        probability: 7.4814, // 0.074813724 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201644/conversions/293f5ed57d87e2956d23c0766b0371a7-default.png?v=10'
      },
      {
        name: 'Handmade Labubu Sticker',
        rarity: 'común',
        price: 15, // 4 USD * 3.75
        probability: 7.5186, // 0.075186276 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201730/conversions/e4e7d52468f303086cf26037b838132a-default.png?v=10'
      },
      {
        name: 'Labubu Doll Fashion Outfit Set',
        rarity: 'común',
        price: 5.85, // 1.56 USD * 3.75
        probability: 15.7680, // 0.157679395 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201621/conversions/0c0880c5cdd7141172d40fe45af521a0-default.png?v=10'
      },
      {
        name: 'Créditos Jemlit',
        rarity: 'común',
        price: 5.1, // 1.36 USD * 3.75
        probability: 15.9650, // 0.159649735 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201657/conversions/4035183d9e16b7e6be92606266d435c6-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 3.19, // 0.85 USD * 3.75
        probability: 16.4786, // 0.164786261 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201678/conversions/c6793512ec72c6ef9a635fbc5b86b92d-default.png?v=10'
      },
      {
        name: 'Jemlit Credits',
        rarity: 'común',
        price: 2.06, // 0.55 USD * 3.75
        probability: 16.7885, // 0.167884609 * 100
        image: 'https://d3ht839xyrpcqw.cloudfront.net/201673/conversions/a2a973e4d1ccbc4b6b0ff7b39c9fdc90-default.png?v=10'
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
