export class SceneSetup {
    greeting: number ;
    constructor(message: number ) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}
