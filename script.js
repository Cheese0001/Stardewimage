const canvas = document.getElementById("characterCanvas");
const ctx = canvas.getContext("2d");

// Placeholder assets
const assets = {
    hair: {
        short: "assets/hair/short.png",
        long: "assets/hair/long.png",
    },
    clothes: {
        shirt: "assets/clothes/shirt.png",
        jacket: "assets/clothes/jacket.png",
    },
};

// Load an image
function loadImage(src, callback) {
    const img = new Image();
    img.onload = () => callback(img);
    img.src = src;
}

// Draw character based on selections
function drawCharacter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const hair = document.getElementById("hair").value;
    const clothes = document.getElementById("clothes").value;

    if (hair) {
        loadImage(assets.hair[hair], (img) => {
            ctx.drawImage(img, 0, 0);
        });
    }
    if (clothes) {
        loadImage(assets.clothes[clothes], (img) => {
            ctx.drawImage(img, 0, 0);
        });
    }
}

// Attach event listeners
document.getElementById("hair").addEventListener("change", drawCharacter);
document.getElementById("clothes").addEventListener("change", drawCharacter);

// Initial render
drawCharacter();
