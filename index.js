// Your code here
class Polygon {
    constructor(arrInt) {
        this.arrInt = arrInt;
    }
    get countSides() {
        let count = 0;
        for (let i = 0; i < this.arrInt.length; i++) {
            count++;
        }
        return count;
    }
    get perimeter() {
        let sum = 0;
        for (let i = 0; i < this.arrInt.length; i++) {
            sum += this.arrInt[i];
        }
        return sum

    }
}
class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3 && this.arrInt[0] == this.arrInt[1] && this.arrInt[2] == this.arrInt[1]) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4 && this.arrInt[0] == this.arrInt[1] && this.arrInt[1] == this.arrInt[2] && this.arrInt[2] == this.arrInt[3])
            return true;
        else
            return false
    }
    get area() {
        return this.arrInt[0]*this.arrInt[0];
    }
}