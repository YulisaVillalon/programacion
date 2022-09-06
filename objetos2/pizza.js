class Pizza {
    constructor(name, type, size, slices) {
        this.name = name;
        this.type = type; // sartén, chicago, orilla rellena, italiana
        this.size = size;
        this.slices = slices;
    }

    description() {
        console.log(`Es una pizza ${this.name} de tipo ${this.type} ${this.size} que está dividida en ${this.slices} rebanadas`);
    }

    divide(numSlices) {
        if (this.slices == 0) {
            this.slices = numSlices;
            return true;
        }
        else {
            return false;
        }
    }

    getASlice() {
        if (this.slices > 0) {
            this.slices--;
            return true;
        }
        else {
            return false;
        }
    }

    // isPizza(){
    //     return true;
    // }
}

export default Pizza;