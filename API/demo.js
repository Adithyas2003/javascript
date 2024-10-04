fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
    data.products.forEach(element => {
        // console.log(element.title);
        const row =document.querySelector(".row")
        const col =document.createElement("div")
        col.classList.add('col-lg-4')
        col.innerHTML=`
        <div class="card">
            <img class="card-img-top" src="${element.images}" alt="card image" width="100%">
            <div class="card-body">
            <h3 class="card-title">${element.title}</h3>
            
            <p class="card-text">${element.description}</p>
                <a href="#" class="btn btn-primary see-more-btn" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#productModal">see more</a>
            </div>
        </div>

        `
        row.appendChild(col)
        
    });
    document.querySelectorAll('.see-more-btn').forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            const productId =e.target.getAttribute('data-id');
            const product =data.products.find(p =>p.id == productId);

            if (product) {
                document.getElementById('modalImage').src =product.thumbnail;
                document.getElementById('modalTitle').textContent =product.title;
                document.getElementById('modalDescription').textContent =product.description;
                document.getElementById('modalPrice').textContent =`price: $${product.price}`;

                
            }
        });
    });


})
.catch(error =>{
    console.error("error fetching the date:",error);
});