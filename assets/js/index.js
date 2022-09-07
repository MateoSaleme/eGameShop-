
//localstorage de carrito

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

//cargando los productos en html

const cargarProd2 = (productos)=>{
    
    const divProd=document.getElementById("carta");
    divProd.innerHTML="";
    productos.forEach((producto)=>{
        if (producto.id == 18){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" alt="indexcard">
                          <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                          <h6>${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                          <button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">COMPRAR</button>
                        </div>`
        }
        else if(producto.id == 17){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" alt="indexcard">
                          <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                          <h6>${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                          </ul>
                          <button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">COMPRAR</button>
                        </div>`
        }
        else if(producto.id == 20){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" alt="indexcard">
                          <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                          <h6>${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                          <button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">COMPRAR</button>
                        </div>`
        }
        else if(producto.id == 19){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" alt="indexcard" id="itemimagen">
                          <h3 class="card-title pb-2" id="title-product itemnombre">${producto.nombre}</h3>
                          <h6 id="itemPrecio">${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                          </ul>
                          <button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">COMPRAR</button>
                        </div>`
        }
})};

cargarProd2(productos);

