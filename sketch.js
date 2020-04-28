// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image classification using MobileNet and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;
var set1 = 0;
var count = 0;
// A variable to hold the image we want to classify
let img;
var image1;

var loadFile = function(event) {
  image1 = document.getElementById('output');
  image1.src = URL.createObjectURL(event.target.files[0]);
    img = image1;
    set1 = 1;
}


function preload() {
  classifier = ml5.imageClassifier('MobileNet');
}


function draw() {
  if(set1==1 && count < 1){
  createCanvas(400, 400);
  classifier.classify(img, gotResult);
  count += 1;
  // image(img, 0, 0);
  }
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  createDiv('Label: ' + results[0].label);
  createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
}
