let products = [
        
    {
        img: "images/blenders/1.png",
       name: "Kenwood Smoothie Bottle, 0.5 litres",
        des: "Out of stock",
        price:12,
        download: "word_files/Blenders/1.Kenwood Smoothie 2 Go Sport Bottle, 0.5 litres.docx"
     },             
     {
        img:"images/fans/6.png",
        name:"Royal Louver Bracket 30 Watt Fan",
        des:"14/COPPER",
        price:7,
        download:"word_files/fans/6.Royal Louver Pedestal Fans.docx"
    },
    {
        img:"images/refrigirator/1.png",
        name:"9173WB Avante+ Refrigerator",
        des:"Twin Cooling",
        price:95,
        download :"word_files/Refregirator/1.9173WB Avante+ Double Door Refrigerator.docx" 
        
    },
    {
        img: "images/Geysers/1.png",
       name: "AquaHeat Pro Geyser",
        des: "Fast Heating",
        price: 8,
        download: "word_files/Geysers/1.AquaHeat Pro Geyser.docx"
     },
     {
        img:"images/blenders/2.png",
        name:"Philips Multi Blender",
        des:"Out of stock ",
        price:8,
        download:"word_files/Blenders/2.Philips HR2099 W Avance Collection Cooking Blender.docx"
        
    },
    {
        img:"images/Geysers/4.png",
        name:"ProTherm Geyser",
        des:"Durable Build",
        price:11,
        download:"word_files/Geysers/4.ProTherm Digital Geyser.docx"
    },
    {
        img:"images/fans/2.png",
        name:"Royal Louver Pedestal Fans",
        des:"Pedestal Deluxe ",
        price:10,
        download:"word_files/fans/2.Royal Louver Bracket Fan.docx"
        
    },
    {
        img:"images/blenders/5.png",
        name:"NutriBullet 900W Blender",
        des:"In stock",
        price:4,
        download:"word_files/Blenders/5.NutriBullet 900W Blender Smoothie Maker.docx"
    },
    {
        img:"images/menu1-home1.png",
        name:"Chrome Silver Refrigerator",
        des:"Mini Fridge",
        price:56,
        download:"word_files/Refregirator/6.9160LF Chrome Pro Hairline Silver Double Door Refrigerator.docx"
    }
    
];
let dataContainer = document.getElementById("data");
for (let i = 0; i < 9 && i < products.length; ++i) {
    // let imageSrc = (i === 1) ? "images/fan_6-removebg-preview.png" : "images/fan-removebg-preview.png";
    let imageSrc = "images/blenders/1.png"; // Default image source

if (i === 1) {
imageSrc = "images/fans/6.png"; // Change image source for second product
}
if (i === 2) {
imageSrc = "images/refregerators/1.png"; // Change image source for third product
}
if (i === 3) {
imageSrc = "images/Geysers/1.png"; // Change image source for forth product
}
if (i === 4) {
imageSrc = "images/blenders/2.png"; // Change image source for fifth product
}
if (i === 5) {
imageSrc = "images/Geysers/4.png"; // Change image source for sixth product
}
if (i === 6) {
    imageSrc = "images/fans/2.png"; // Change image source for forth product
}
if (i === 7) {
    imageSrc = "images/blenders/5.png"; // Change image source for fifth product
}
if (i === 8) {
    imageSrc = "images/refregerators/6.png"; // Change image source for sixth product
}


function generateProductHTML(product) {}

    dataContainer.innerHTML +=
     `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card yy" style="width: 18rem;">
                <img src="${imageSrc}" class="card-img-top" alt="...">
                <div class="card-body lh-1">
                    <p class="text-start fs-4 fw-bold text-center">${products[i].name}</p>
                   <br>
                    <p class="card-text fs-10 ">${products[i].des}</p>
                    <p class="card-text fs-10 fw-bold">${products[i].price},999 PKR</p>
                    
                    <a href="${products[i].download}" class="btn" download>Download</a>
                    
                </div>
            </div>
        </div>
    `
}
