// public => 제한 없음, 누구나 access 가능
// privata => 특정 class 안에서만 access 가능
// protected => 특정 class & 상속받는 class 안에서 access가능

class Base {
    first = "";
    public second = "";
    protected third = "";
    private fourth = "";

    baseFunction() {
        this.fourth;
    }
}

class Inherited extends Base {
    myFunction() {
        this.first;
        this.second;
        this.third;
        // this.fourth // 불가능
    }
}

const inherited = new Inherited();

inherited.first;
inherited.second;
// inherited.third; // 불가능
// inherited.fourth; // 불가능