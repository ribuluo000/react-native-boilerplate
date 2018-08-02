import TYPE_ACTION from "src/constant/TYPE_ACTION";
export function decrement() {
    return {
        type : TYPE_ACTION.DECREMENT,
    }
}

export function increment() {
    return {
        type : TYPE_ACTION.INCREMENT,
    }
}