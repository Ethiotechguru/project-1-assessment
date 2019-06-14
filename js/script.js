{/* <div class="container">
        <button id="plus" class="calc">+</button>
        <input id = 'inputval' value='1' type="text">
        <button id='minus' class="calc">-</button>
    </div>
    <p id='result'></p>
 */}

var container = document.querySelector('.container');
var addition = document.querySelector('#plus');
var inputValue = document.querySelector('#inputval');
var subtract = document.querySelector('#minus');
var result = document.querySelector('#result');
var resultToNum;
var inputNum 
var pushTodoc;
result.textContent = 0;
addition.addEventListener('click', function () {
    calculation();
    pushTodoc = resultToNum + inputNum;
    result.textContent = pushTodoc;
    textRed()
    // if(pushTodoc < 0){
    //     result.style.color = 'red';
    // }
});
subtract.addEventListener('click', function () {
    calculation();
    pushTodoc = resultToNum - inputNum;
    result.textContent = pushTodoc;
    textRed();
});
function calculation() {
    resultToNum = Number(result.textContent);
    inputNum = Number(inputValue.value);
}

function textRed(){
    if(pushTodoc < 0){
        result.style.color = 'red';
    }else{
        result.style.color = 'black';
    }
}