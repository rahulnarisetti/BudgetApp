
//BUDGET CONTROLLER 
var budgetController=(function()
{
    

})();


//UI CONTROLLER
var UIController=(function()
{
    DOMStrings={
        inputType:'.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        clickButton: '.add__btn'
    };


    return {
        getInputData: function()
        {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                inputText: document.querySelector(DOMStrings.inputDescription).value,
                inputNumber: document.querySelector(DOMStrings.inputValue).value,
            };
        },
        getDom: function(){
            return DOMStrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var Controller=(function(BudgetCon,UICon)
{   
    var setupEvent=function()
    {       
        var DOM=UICon.getDom();

        document.querySelector(DOM.clickButton).addEventListener('click', enterInput);

            document.addEventListener('keypress',function(event){
                if (event.keyCode ===13 || event.which===13) 
                    {
                        enterInput();
                    }
          
            });

    };
    var enterInput=function()
    {
        var inputData=UICon.getInputData();

        console.log(inputData);
    }
      
    return {
        init: function()
        {
            console.log('ashashasha');
            return setupEvent();
        }

    };

})(budgetController,UIController);


Controller.init();


