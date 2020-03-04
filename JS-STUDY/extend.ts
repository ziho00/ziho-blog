class Father {
    _name: string
    constructor(name: string) {
        this._name = name
    }

    getName() {
        return this._name
    }

}

class Son extends Father {
    constructor(name: string) {
        super(name)
    }
}
