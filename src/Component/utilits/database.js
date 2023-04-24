const getData = () => {
    let shopingCart;
    const storeCard = localStorage.getItem('shoping-cart');
    if (storeCard) {
        shopingCart = JSON.parse(storeCard);
    }
    else {
        shopingCart = [];
    }
    return shopingCart;
}
const storeData = (cart) => {
    let shopingCart;
    const storeCart = getData();
    if (storeCart) {
        shopingCart = [...storeCart, cart]
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}
const removeFromCart = id => {
    const storeCart = getData();
    if (storeCart) {
        let remaing;
        for (const p of storeCart) {
            remaing = p.filter(p.id !== id);
        }
        return remaing;
    }
    else {
        return 1;
    }
}
export {
    getData,
    storeData,
    removeFromCart
}