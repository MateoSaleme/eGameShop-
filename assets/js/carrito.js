
//cargando los datos del carrito en html para gestionar

if (localStorage.getItem("carrito")===null) {
    const divProd=document.getElementById("carro")
    divProd.innerHTML+=`
            <div class="pb-1 pt-4">
                <h1 class="text-light">¡No hay nada en el carrito!</h1>
                <hr>
                <h6 class="text-light">¿No sabes que comprar? Dale un vistazo a nuestros productos.</h6>
            </div>`
}

else{
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
            <div class="row product-carrito">
                <div class="col">
                    <img id="itemimagen${producto.id}" src=${producto.imagen} alt="">
                </div>
                <div class="col">
                    <p class="text-danger" >Cod.#<span id="itemId${producto.id}">${producto.id}</span></p>
                </div>
                <div class="col">
                    <h6 id="itemnombre${producto.id}">${producto.nombre}</h6>
                </div>
                <div class="col">
                    <span class="mx-4 p-1 cant" id="prodNr${producto.id}">${producto.cantidad}</span>
                </div>
                <div class="col">
                    <p class="text-danger">`+preciototalprod+`<span id="total"></span> ARS$</p>
                </div>
                <div class="col">
                    <button id="boton-eliminar${producto.id}" class="btn btn-danger">X</button>
                </div>
            </div>`
            
            
                
           
            
            
            
        })};
        
        const botonvaciar = document.getElementById("boton-vaciar");
        botonvaciar.addEventListener("click",()=>{
            localStorage.clear();
            window.location.reload();
        });
        function mostrarPrecio(){
            let preciototal=0;
            carrito.forEach(carr => {
                listaProd.forEach(prod => {
                    if (carr.id==prod.id) {   
                        preciototal+=carr.cantidad*prod.precio;
                        document.getElementById("precioTotalCarro").textContent = preciototal;
                        console.log("Precio total:"+preciototal);
                        console.log(carr.id,carr.cantidad,prod.nombre,prod.precio);
                    }     
                });        
            });
        };
    cargarProd(localstoragearr);
}

const buyBtn = document.getElementById("boton-comprar")
buyBtn.addEventListener("click", ()=>{
    if(localStorage.getItem("carrito")===null){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No estas llevando ningun producto.',
        })
    }
    else{
        Swal.fire({
            icon: 'success',
            title: '¡Felicidades por su compra!',
            text: 'Muchas gracias por confiar en nosotros.',
        })
    }
})

