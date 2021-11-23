function receivesAFunction(argument) {
    argument();
}

function returnsANamedFunction() {
    return (function foo() {1 + 1});
}

function returnsAnAnonymousFunction() {
    return (() => 1 + 1);
}