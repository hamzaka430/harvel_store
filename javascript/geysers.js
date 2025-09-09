let products = [
    {
       img: "images/Geysers/1.png",
       name: "AquaHeat Pro Geyser",
       alt: "AquaHeat Pro Geyser - Fast Heating Electric Geyser",
       des: "In stock",
       specs: "Fast Heating",
       price: 8,
       download: "word_files/Geysers/1.AquaHeat Pro Geyser.docx"
    },
    {
        img:"images/Geysers/2.png",
        name:"EcoSmart Geyser",
        alt: "EcoSmart Geyser - Durable Build Electric Geyser",
        des:"Out of stock",
        specs:"Durable Build",
        price:10,
        download:"word_files/Geysers/2.EcoSmart Instant Geyser.docx"
    },
    {
        img:"images/Geysers/3.png",
        name:"TurboHeat Geyser",
        alt: "TurboHeat Geyser - Energy Efficient Electric Geyser",
        des:"In stock",
        specs:"Energy Efficient",
        price:9,
        download:"word_files/Geysers/3.TurboHeat Electric Geyser.docx"
    },
    {
        img:"images/Geysers/4.png",
        name:"ProTherm Geyser",
        alt: "ProTherm Geyser - Durable Build Digital Geyser",
        des:"In stock",
        specs:"Durable Build",
        price:11,
        download:"word_files/Geysers/4.ProTherm Digital Geyser.docx"
    },
    {
        img:"images/Geysers/5.png",
        name:"UltraSafe Geyser",
        alt: "UltraSafe Geyser - Digital Controls Electric Geyser",
        des:"Out of stock",
        specs:"Digital Controls",
        price:12,
        download:"word_files/Geysers/5.UltraSafe Geyser.docx"
    },
    {
        img:"images/Geysers/6.png",
        name:"QuickHeat Geyser",
        alt: "QuickHeat Geyser - Energy Efficient Compact Geyser",
        des:"In stock",
        specs:"Energy Efficient",
        price:7,
        download:"word_files/Geysers/6.QuickHeat Compact Geyser.docx"
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
                    <img src="${product.img}" class="product-image" alt="${product.alt}">
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

