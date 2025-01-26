var tree = [];


function setup(){
  createCanvas(800,800);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height - 300);
  root = new Branch(a,b);

  tree[0] = root;
 


}

function mousePressed(){
  for(var i = tree.length-1; i >= 0; i--) {
    if (!tree[i].finished){
      tree.push(tree[i].branchA()); 
      tree.push(tree[i].branchB());//here push adds sonmething to the array 
    }
    tree[i].finished = true;
  }



  //tree[1] = root.branchA();
 //tree[2] = root.branchB();
}



function draw( ){
  background(0);

  for(var i = 0; i < tree.length; i++){

  tree[i].show();
  //tree[i].jitter();

}
}