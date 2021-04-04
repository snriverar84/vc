let facemesh;
let array = [];
let img;
let img2;

//function setup() {
  // Create a canvas that's at least the size of the image.
  //createCanvas(512, 512);

    // create an image using the p5 dom library
  // call modelReady() when it is loaded
  //img = createImg("/home/snriverar/vc/docs/sketches/RonDamon.png", imageReady);
  // set the image size to the size of the canvas

  //for (let i = 0; i < array.length; i += 1) {
  //image(img,0,0);
  function setup() {
    createCanvas(720, 400);
    img = loadImage('/home/snriverar/vc/docs/sketches/RonDamon.png'); // Cargar la imagen
  }

  function draw() {
    // Muestra la imagen en su tamaño original en la posición (0,0)
    image(img, 0, 0);
    // Muestra la imagen en la posición (0, height/2) a la mitad del tamaño
    image(img, 0, height / 2, img.width / 2, img.height / 2);
  }