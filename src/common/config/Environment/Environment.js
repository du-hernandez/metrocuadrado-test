class Environment {
    environment

    constructor() {
        this.environment = process.env
    }

    get(key) {
        return this.environment[`REACT_APP_${key}`]
    }
}

export default new Environment()