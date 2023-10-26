




function helloWord() {
    function sayHello() {
        console.log("hello")
    }

    return "hellow word"
}

function grettings() {
    function sayHello() {
        console.log("hello")
    }

    function sayGrettings() {
        console.log("gretings")
    }

    function hello() {
        return "hello"    
    }

    function word() {
        return "word"    
    }

    return `${hello()} ${word()}` 
}