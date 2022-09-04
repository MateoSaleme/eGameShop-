let productos = JSON.parse(localStorage.getItem("prod"));
if (localStorage.getItem("carrito")===null) {
}else{
    let preciototal=0;
    let localstoragearr = JSON.parse(localStorage.getItem("carrito"));
    
    localstoragearr.forEach((storage)=>{
        preciototal+=Number(storage.precio)*Number(storage.cantidad);
    });
    document.getElementById("precioTotal").textContent = preciototal;
}


const cargarProd = (productos)=>{
    
    const divProd=document.getElementById("carta");
    divProd.innerHTML="";
    productos.forEach((producto)=>{
        if (producto.id == 18 ||producto.id == 17 ||producto.id == 14 ||producto.id == 16){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" alt="readyornot">
                          <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                          <h6>${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                          <button type="button" class="buy-1 btn btn-danger buy" id="buybtn">COMPRAR</button>
                        </div>`
 }})};

cargarProd(productos);
