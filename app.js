
//BUDGET CONTROLLER -------------------------------------------------------
var budgetController=(function()
{
    var expense=function(id,des,value)
    {
        this.id=id;
        this.des=des;
        this.value=value;
    };

    var income=function(id,des,value)
    {
        this.id=id;
        this.des=des;
        this.value=value;
    };

    var data={
        allitems: {
            exp: [],
            inc: []
        },

        totalitems: {
            exp: 0,
            inc: 0
        }

    };

    return {
        addNewItem: function(type, des, val)
        {   var newItem, ID;
            
            if(data.allitems[type].length===0)
            ID=0;
            else
            ID=data.allitems[type][data.allitems[type].length-1].id +1;
            
            if(type==='exp')
            {
                newItem=new expense(ID,des,val);
            }

            else if(type==='inc')
            {
                newItem=new income(ID,des,val);
            }

            data.allitems[type].push(newItem);
            return newItem;
        },
        testing: function()
        {
            console.log(data);
        }
    };



})();




//UI CONTROLLER--------------------------------------------------------


var UIController=(function()
{
    DOMStrings={
        inputType:'.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        clickButton: '.add__btn',
        expenseContainer: '.expenses__list',
        incomeContainer: '.income__list'
                       
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
        },

        addListItem: function(obj,type)
        {
            var html,newhtml,element;
            if (type==='inc')
            {
                element=DOMStrings.incomeContainer;
                html='<div class="item clearfix" id="income-%id%"><div class="item__description">%des%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            else if (type==='exp')
            {   element=DOMStrings.expenseContainer;
                html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%des%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newhtml=html.replace('%id%',obj.id);
            newhtml=newhtml.replace('%des%',obj.des);
            newhtml=newhtml.replace('%value%',obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend',newhtml);

        }
    };

})();



// GLOBAL APP CONTROLLER-------------------------------------------------------------------


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

        var display=BudgetCon.addNewItem(inputData.type,inputData.inputText,inputData.inputNumber);

        UICon.addListItem(display,inputData.type);

    };


    
      
    return {
        init: function()
        {
            console.log('ashashasha');
            return setupEvent();
        }

    };

})(budgetController,UIController);



//General -----------------------------------------------------------------------
Controller.init();


