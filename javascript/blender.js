let products = [
        
    {
       img: "images/blenders/1.png",
      name: "Kenwood Smoothie 2 Go Sport Bottle",
       des: "Out of stock",
       price:12,
       download: "word_files/Blenders/1.Kenwood Smoothie 2 Go Sport Bottle, 0.5 litres.docx"
    },           
    {
        img:"images/blenders/2.png",
        name:"Philips 2 Cooking Blender",
        des:"Out of stock ",
        price:8,
        download:"word_files/Blenders/2.Philips HR2099 W Avance Collection Cooking Blender.docx"
        
    },
    {
        img:"images/blenders/3.png",
        name:"Breville Blender & Smoothie Maker",
        des:"In stock",
        price:8,
        download:"word_files/Blenders/3.Breville VBL239 Blender & Smoothie Maker.docx"
    },
    {
        img:"images/blenders/4.png",
        name:"Magic Bullet To Go Personal Blender Silver",
        des:"Out of stock",
        price:9,
        download:"word_files/Blenders/4.Magic Bullet To Go Personal Blender Silver.docx"
    },
    {
        img:"images/blenders/5.png",
        name:"NutriBullet Smoothie Blender ",
        des:"In stock",
        price:4,
        download:"word_files/Blenders/5.NutriBullet 900W Blender Smoothie Maker.docx"
    },
    {
        img:"images/blenders/6.png",
        name:"Tefal  Dry fruit crushing Blend force",
        des:"Out of stock",
        price:10,
        download:"word_files/Blenders/6.Tefal Dry fruit crushing BL420131 Blend force.docx"
    }
];

let dataContainer = document.getElementById("data");

// Function to generate professional product HTML
function generateProductHTML(product, index) {
    const stockClass = product.des.toLowerCase().includes('in stock') ? 'in-stock' : 'out-of-stock';
    const stockText = product.des.toLowerCase().includes('in stock') ? 'In Stock' : 'Out of Stock';
    const isDisabled = product.des.toLowerCase().includes('out of stock');
    
    return `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${product.img}" class="product-image" alt="${product.name}">
                    <span class="stock-badge ${stockClass}">${stockText}</span>
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        ${product.price},999 <span class="currency">PKR</span>
                    </div>
                    <div class="product-actions">
                        <a href="${product.download}" 
                           class="btn-download ${isDisabled ? 'disabled' : ''}" 
                           ${isDisabled ? '' : 'download'}
                           ${isDisabled ? 'onclick="return false;"' : ''}>
                            <i class="fas fa-download"></i> Download Catalog
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate product cards
for (let i = 0; i < products.length; i++) {
    dataContainer.innerHTML += generateProductHTML(products[i], i);
}
