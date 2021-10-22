export default class CommentFlag {
    #valid;

    constructor(){
        this.#valid = false;
    }

    setTrue() {
        this.#valid = true;
    }

    setFalse() {
        this.#valid = false;
    }

    get isValid() {
        return this.#valid;
    }
}