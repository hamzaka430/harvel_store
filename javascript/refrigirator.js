let products = [
    {
        img:"images/refregerators/1.png",
        name:"9173WB Avante+ Double Door Refrigerator",
        des:"In stock",
        specs:"Twin Cooling",
        price:95,
        download :"word_files/Refregirator/1.9173WB Avante+ Double Door Refrigerator.docx" 
        
    },
    {
        img:"images/refregerators/2.png",
        name:"DFD Sapphire Inverter Double Door Refrigerator",
        des:"Out of stock",
        specs:"French Door",
        price:85,
        download :"word_files/Refregirator/2.DFD Sapphire Inverter Double Door Refrigerator.docx"
    },
    {
        img:"images/refregerators/3.png",
        name:"9122 LVS Hairline Silver Double Door Refrigerator",
        des:"In stock",
        specs:"Dual-Zone",
        price:99,
        download:"word_files/Refregirator/3.9122 LVS Hairline Silver Double Door Refrigerator.docx"
    },
    {
        img:"images/refregerators/4.png",
        name:"Whirlpool Multi-door Counter Depth Refrigerator",
        des:"In stock",
        specs:"Multi-door",
        price:255,
        download:"word_files/Refregirator/4.Whirlpool Multi-door Counter Depth Refrigerator.docx"
    },
    {
        img:"images/refregerators/5.png",
        name:"Haier Refrigerator, Touchscreen Display",
        des:"Out of stock",
        specs:"Side-by-Side",
        price:180,
        download:"word_files/Refregirator/5.Haier Side-by-Side Refrigerator with Touchscreen Display.docx"
    },
    {
        img:"images/refregerators/6.png",
        name:"Chrome Pro Hairline Silver Double Door Refrigerator",
        des:"In stock",
        specs:"Mini Fridge",
        price:56,
        download:"word_files/Refregirator/6.9160LF Chrome Pro Hairline Silver Double Door Refrigerator.docx"
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
                    <p class="product-specs">${product.specs}</p>
                    <div class="product-price">
                        ${product.price},500 <span class="currency">PKR</span>
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