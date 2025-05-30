const products = [
    {
        id:'01',
        name:'Nubia Focus Pro',
        price:499999,
        description:'Cámara IA 108MP, 6.72" FHD+ 120Hz, 256gb, 8gb RAM',
        stock:15,
        img:'https://i.postimg.cc/pTn01yqY/nubia-Focus-Pro.png',
        category:'ofertas'
    },
        {
        id:'02',
        name:'Nubia Focus',
        price:379999,
        description:'Cámara doble + 108MP, FHD+ 120Hz, 256gb, 6gb RAM',
        stock:10,
        img:'https://i.postimg.cc/cJd0WyVn/nubia-Focus.png',
        category:'celulares'
    },
        {
        id:'03',
        name:'Nubia Neo 2',
        price:470000,
        description:'Pensado para Gamers, Botones Configurables, 6.72" FHD+ 120Hz, 256gb, 8gb RAM',
        stock:12,
        img:'https://i.postimg.cc/fWfF4SMB/nubia-Neo5g.png',
        category:'celulares'
    },
        {
        id:'04',
        name:'Xiaomi Redmi Note 14 PRO',
        price:759999,
        description:'Cámara IA 200MP, 6.67" FHD+ 120Hz, 256gb, 8gb RAM',
        stock:12,
        img:'https://i.postimg.cc/Ghr42Vwb/Xiamo-Redmi-Note14-Pro.png',
        category:'ofertas'
    },
        {
        id:'05',
        name:'Xiaomi Redmi Note 13',
        price:620000,
        description:'Cámara doble 108MP, 6.67" FHD+ 120Hz, 256gb, 8gb RAM',
        stock:15,
        img:'https://i.postimg.cc/pVswh53y/Xiaomi-Redmi-Note13.png',
        category:'ofertas'
    },
        {
        id:'06',
        name:'Xiaomi Poco x7 PRO',
        price:1146000,
        description:'Pantalla CrystalRes AMOLED 6.67" FHD+ 120Hz, procesador MediaTek Dimensity 8400-Ultra de 4 nm, 256gb, 12gb RAM',
        stock:12,
        img:'https://i.postimg.cc/RCpYV5nH/Xiamo-Pocox7.png',
        category:'celulares'
    },
        {
        id:'07',
        name:'Notebook Acer Aspire 3',
        price:1999999,
        description:'15.6" FHD, Procesador Amd Ryzen 7 5700u, 512gb SSD, 16gb RAM DRR4',
        stock:10,
        img:'https://i.postimg.cc/RqrySKb0/Notebook-Acer-Aspire3.png',
        category:'tecnologia'
    },
        {
        id:'08',
        name:'Notebook Acer Aspire 5',
        price:999999,
        description:'15.6" FHD, Procesador Intel Core i5-1335u, 512gb SSD, 8gb RAM DRR5',
        stock:15,
        img:'https://i.postimg.cc/mkQfFm99/Notebook-Acer-Aspire5.png',
        category:'ofertas'
    },
        {
        id:'09',
        name:'Notebook I5 Vivobook ASUS',
        price:1400000,
        description:'15.6" HD, Procesador Intel Core i5-1235u, 512gb NVMe, 8gb RAM DRR4',
        stock:12,
        img:'https://i.postimg.cc/595RLYG8/Notebook-I5-Vivobook-ASUS.png',
        category:'tecnologia'
    },
        {
        id:'10',
        name:'Monitor 24" Samsung',
        price:250000,
        description:'Monitor 24 FHD IPS 75Hz y Bordes ultradelgados',
        stock:12,
        img:'https://i.postimg.cc/26dN1HhZ/Monitor24-FHDSamsung.jpg',
        category:'tecnologia'
    },
        {
        id:'11',
        name:'Monitor 24" Odyssey G3',
        price:350000,
        description:'Monitor 24 FHD IPS 144Hz, 1ms',
        stock:12,
        img:'https://i.postimg.cc/bvQBgZrX/Monitor24-FHDOdyssey-G3.jpg',
        category:'tecnologia'
    },
        {
        id:'12',
        name:'Monitor 27" Asus',
        price:699999,
        description:'Monitor 27 QHD IPS 180Hz, 1ms',
        stock:15,
        img:'https://i.postimg.cc/ZqZcTVbg/Monitor27-Asus-HD.jpg',
        category:'ofertas'
    },
        {
        id:'13',
        name:'Samsung Galaxy S24 Fe',
        price:2999999,
        description:'Cámara IA 108MP, 6.40" FHD+ 120Hz, 256gb, 8gb RAM',
        stock:15,
        img:'https://i.postimg.cc/LXxQHmY1/Samsung-Galaxy-S24.png',
        category:'celulares'
    },
        {
        id:'14',
        name:'Impresora EXO 3DFAB10',
        price:2350000,
        description:'Estructura de aluminio de 21 x 21 x 24 con un sistema de ventilación forzada y filtro de gases de salida',
        stock:14,
        img:'https://i.postimg.cc/xdB3thVH/Impresora3-D21x21x24.jpg',
        category:'tecnologia'
    }
]

let error = false

export const getProducts = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },2000)
    })
}


export const getOneProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },1000)
    })
}