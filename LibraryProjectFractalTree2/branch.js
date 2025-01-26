function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

   /* this.jitter = function(){
        this.end.x += noise(-1,1);
        this.end.y += random(-1,1);
    }
*/

    this.show = function() {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

this.branchA = function(){
    var dir = p5.Vector.sub(this.end, this.begin);
    //vector that points from bottom to top of the branch
    dir.rotate(PI/4);
    dir.mult(0.6); // makes branches smaller
    var newEnd = p5.Vector.add(this.end, dir);
    var r = new Branch(this.end, newEnd);
    return r;
}

this.branchB = function(){
    var dir = p5.Vector.sub(this.end, this.begin);
    //vector that points from bottom to top of the branch
    dir.rotate(-PI/4);
    dir.mult(0.6); // makes branches smaller
    var newEnd = p5.Vector.add(this.end, dir);
    var l = new Branch(this.end, newEnd);
    return l;
}

}