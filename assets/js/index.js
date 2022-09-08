
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
    
    const divProd=document.getElementById("cards-inicio");
    divProd.innerHTML="";
    productos.forEach((producto)=>{
        if (producto.id == 26){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" class="border-2 border-dark border" alt="indexcard">
                          <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                          <h6>${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                          <a href="./pags/tienda.html" class="buy-1"><button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">COMPRAR</button></a>
                        </div>`
        }
        else if(producto.id == 25){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" class="border-2 border-dark border" alt="indexcard">
                          <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                          <h6>${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                          </ul>
                          <a href="./pags/tienda.html" class="buy-1"><button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">COMPRAR</button></a>
                        </div>`
        }
        else if(producto.id == 28){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" class="border-2 border-dark border" alt="indexcard">
                          <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                          <h6>${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                          <a href="./pags/tienda.html" class="buy-1"><button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">COMPRAR</button></a>
                        </div>`
        }
        else if(producto.id == 27){
            divProd.innerHTML+=`
            <div class="card swiper-slide">
                          <img src="${producto.imagen}" class="border-2 border-dark border" alt="indexcard" id="itemimagen">
                          <h3 class="card-title pb-2" id="title-product itemnombre">${producto.nombre}</h3>
                          <h6 id="itemPrecio">${producto.precio} ARS$</h6>
                          <ul class="card-list">
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                            <li><i class="fa fa-star checked"></i></li>
                          </ul>
                          <a href="./pags/tienda.html" class="buy-1"><button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">COMPRAR</button></a>
                        </div>`
        }
})};

cargarProd2(productos);

const cargarProd3 = (productos)=>{
    
  const divProd=document.getElementById("cards-inicio2");
  divProd.innerHTML="";
  productos.forEach((producto)=>{
      if (producto.id == 29){
          divProd.innerHTML+=`
          <div class="card swiper-slide">
                        <img src="${producto.imagen}" class="border-2 border-dark border" alt="indexcard">
                        <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                        <h6>${producto.precio} ARS$</h6>
                        <ul class="card-list">
                          <li><i class="fa-solid fa-1"></i></li>
                          <li><i class="fa-solid fa-1"></i></li>
                          <li><i class="fa-solid fa-minus"></i></li>
                          <li><i class="fa-solid fa-1"></i></li>
                          <li><i class="fa-solid fa-0"></i></li>
                          <li><i class="fa-solid fa-minus"></i></li>
                          <li><i class="fa-solid fa-2"></i></li>
                          <li><i class="fa-solid fa-2"></i></li>
                        </ul>
                        <a href="./pags/tienda.html" class="buy-1"><button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">PRECOMPRAR</button></a>
                      </div>`
      }
      else if(producto.id == 30){
          divProd.innerHTML+=`
          <div class="card swiper-slide">
                        <img src="${producto.imagen}" class="border-2 border-dark border" alt="indexcard">
                        <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                        <h6>${producto.precio} ARS$</h6>
                        <ul class="card-list">
                          <li><i class="fa-solid fa-2"></i></li>
                          <li><i class="fa-solid fa-5"></i></li>
                          <li><i class="fa-solid fa-minus"></i></li>
                          <li><i class="fa-solid fa-1"></i></li>
                          <li><i class="fa-solid fa-0"></i></li>
                          <li><i class="fa-solid fa-minus"></i></li>
                          <li><i class="fa-solid fa-2"></i></li>
                          <li><i class="fa-solid fa-2"></i></li>
                        </ul>
                        <a href="./pags/tienda.html" class="buy-1"><button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">PRECOMPRAR</button></a>
                      </div>`
      }
      else if(producto.id == 31){
          divProd.innerHTML+=`
          <div class="card swiper-slide">
                        <img src="${producto.imagen}" class="border-2 border-dark border" alt="indexcard">
                        <h3 class="card-title pb-2" id="title-product">${producto.nombre}</h3>
                        <h6>${producto.precio} ARS$</h6>
                        <ul class="card-list">
                          <li><i class="fa-solid fa-0"></i></li>
                          <li><i class="fa-solid fa-8"></i></li>
                          <li><i class="fa-solid fa-minus"></i></li>
                          <li><i class="fa-solid fa-1"></i></li>
                          <li><i class="fa-solid fa-2"></i></li>
                          <li><i class="fa-solid fa-minus"></i></li>
                          <li><i class="fa-solid fa-2"></i></li>
                          <li><i class="fa-solid fa-3"></i></li>
                        </ul>
                        <a href="./pags/tienda.html" class="buy-1"><button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">PRECOMPRAR</button></a>
                      </div>`
      }
      else if(producto.id == 32){
          divProd.innerHTML+=`
          <div class="card swiper-slide">
                        <img src="${producto.imagen}" class="border-2 border-dark border" alt="indexcard" id="itemimagen">
                        <h3 class="card-title pb-2" id="title-product itemnombre">${producto.nombre}</h3>
                        <h6 id="itemPrecio">${producto.precio} ARS$</h6>
                        <ul class="card-list">
                          <li><i class="fa-solid fa-2"></i></li>
                          <li><i class="fa-solid fa-8"></i></li>
                          <li><i class="fa-solid fa-minus"></i></li>
                          <li><i class="fa-solid fa-1"></i></li>
                          <li><i class="fa-solid fa-0"></i></li>
                          <li><i class="fa-solid fa-minus"></i></li>
                          <li><i class="fa-solid fa-2"></i></li>
                          <li><i class="fa-solid fa-2"></i></li>
                        </ul>
                        <a href="./pags/tienda.html" class="buy-1"><button type="button" class="buy-1 btn btn-danger buybtn" id="buybtn${producto.id}">PRECOMPRAR</button></a>
                      </div>`
      }
})};

cargarProd3(productos);