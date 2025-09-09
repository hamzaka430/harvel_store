let products = [
        
    {
       img: "images/fans/1.png",
      name: "Ornament - ITurbo 30 Watts Fan",
       des: "In stock",
       specs: "5-blade",
       price: 17,
       download: "word_files/fans/1.Ornament - ITurbo 30 Watts Fan.docx"
    },
    {
        img:"images/fans/2.png",
        name:"Royal Louver Pedestal 30 Watt Fan",
        des:"In stock",
        specs:"Pedestal Deluxe",
        price:10,
        download:"word_files/fans/2.Royal Louver Bracket Fan.docx"
        
    },
    {
        img:"images/fans/3.png",
        name:"Royal High-Speed Table Fan",
        des:"Out of stock",
        specs:"Black",
        price:6,
        download:"word_files/fans/3.Royal High-Speed Table Fan.docx"
    },
    {
        img:"images/fans/4.png",
        name:"Nova-ITurbo 30 Watts Fan",
        des:"In stock",
        specs:"3-blade",
        price:18,
        download:"word_files/fans/4.Nova-ITurbo 30 Watts Fan.docx"
    },
    {
        img:"images/fans/5.png",
        name:"Royal Elegant Bracket  Fans",
        des:"Out of stock",
        specs:"Black",
        price:4,
        download:"word_files/fans/5.Royal Elegant Bracket Fans.docx"
    },
    {
        img:"images/fans/6.png",
        name:"Royal Louver Bracket Fan",
        des:"In stock",
        specs:"14/COPPER",
        price:7,
        download:"word_files/fans/6.Royal Louver Pedestal Fans.docx"
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

