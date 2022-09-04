if (localStorage.getItem("carrito")===null) {
   
}else{
    let localstoragearr = JSON.parse(localStorage.getItem("carrito"));
    let preciototal=0;
    
    localstoragearr.forEach((storage)=>{
        preciototal+=Number(storage.precio)*Number(storage.cantidad);
    });
    document.getElementById("precioTotal").textContent = preciototal;
    
     const cargarProd = (localstoragearr)=>{
        let preciototalprod=0;
        const divProd=document.getElementById("carro")
        divProd.innerHTML="";
        localstoragearr.forEach((producto)=>{
            preciototalprod=Number(producto.precio)*Number(producto.cantidad);
            divProd.innerHTML+=`
            <div class="product-item">
                <img id="itemimagen${producto.id}" src=${producto.imagen} alt="">
                <p class="text-danger" >Cod.#<span id="itemId${producto.id}">${producto.id}</span></p>
                <h6 id="itemnombre${producto.id}">${producto.nombre}</h6>
                <p class="text-danger" id="itemPrecio${producto.id}">${producto.precio}</p>
                <div id="addToCarritoBtn" class="cant-btn text-center">
                    <span class="mx-4 p-1" id="prodNr${producto.id}">${producto.cantidad}</span>
                    <p class="text-right">Total: `+preciototalprod+`<span id="total"></span>ARS$</p>
                    <button id="boton-vaciar" class="btn btn-danger">eliminar</button>
                </div>
            </div>`
        })};
        const botonvaciar = document.getElementById("boton-vaciar");
        botonvaciar.addEventListener("click",()=>{
            localStorage.clear();
            window.location.reload();
    });
    cargarProd(localstoragearr);
}
