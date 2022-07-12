/**
 * Ensure that only one object of a particular class is ever created
 */

const president = (function(){
    const presidentPrivateInformation = "super Private";
    const name = "Turd Sandwich";
    const getName = () => name;

    return {
        getName
    }
})();

console.log(president.getName());