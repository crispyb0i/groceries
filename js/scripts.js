
$(document).ready(function(){

  $('#groceryForm').submit(function(event){

    event.preventDefault();
    var itemNum = ['1','2','3','4','5','6'];

    var values = itemNum.map(function(number){
      return $('#item'+number).val().toUpperCase();
    });
    alert(values.sort());

    $('#groceryForm').hide();
  });
});
