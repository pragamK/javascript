function computeLoan(){
    var amount  = document.getElementById('amount').value;
    var int_rate  = document.getElementById('int_rate').value;
    var months  = document.getElementById('month').value;
    var interest = (amount*(int_rate*0.01))/months;
    var payment = ((amount/months)+interest).toFixed(2);
    payment=payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Monthly Payment= ₹"+payment;
}