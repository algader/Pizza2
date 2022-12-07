import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
// import '../scss/style.scss'; 
import '../src/scss/style.scss'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min'
console.log("Hello from webpack");


var pathname = window.location.pathname;
console.log(pathname);
$('.navbar-nav > li > a[href="' + pathname + '"]').parent().addClass('active');
if (pathname == "/index.html") {
    $('.navbar-nav > li > a[href="/chicken.html"]').parent().addClass('active');
}

if (pathname == "/index.html") {
  $('.navbar-nav > li > a[href="/Vegetable.html"]').parent().addClass('active');
}

if (pathname == "/index.html") {
  $('.navbar-nav > li > a[href="/Margaret.html"]').parent().addClass('active');
}



$(document).ready(function() {
$('[data-toggle="tooltip"]').tooltip();

$('.add-to-cart-btn').click(function(){
alert('أضيف الطلب إلى عربة الشراء');
});


$('#copyright').text("	جميع الحقوق محفوظة  لسنة" + new Date().getFullYear());


$('.product-option input[type="radio"]').change(function() {
$(this).parents('.product-option').siblings().removeClass('active');
$(this).parents('.product-option').addClass('active');
});

$('[data-product-quantity]').on( "change",function() {                                      
    var newQuantity = $(this).val();
    var $parent = $(this).parents('[data-product-info]');
      var pricePerUnit = $parent.attr('data-product-price'); 
      var totalPriceForProduct = newQuantity * pricePerUnit; 
      $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');
       calculateTotalPrice();

    });


    $('[data-remove-from-cart]').on( "click",function() {  
        $(this).parents('[data-product-info]').remove(); 
         // أعد حساب السعر الإجمالي بعد حذف أحد المُنتجات
         calculateTotalPrice();
  
      });

    

    function calculateTotalPrice() {
      
        var totalPriceForAllProducts = 0;
        $('[data-product-info]').each(function() {
            var pricePerUnit = $(this).attr('data-product-price');
            var quantity = $(this).find('[data-product-quantity]').val();
            var totalPriceForProduct = pricePerUnit * quantity;
            totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);
        });
        $('#total-price-for-all-products').text(totalPriceForAllProducts + '');
      }

      var citiesByCountry = {
        ka: ['الدوحة'],
        eg: ['القاهرة','الإسكندرية'],
        ba: ['المنامة'],
        li: ['بيروت'],
    };


   $('#form-checkout select[name="country"]').on( "change",function() {
    var country = $(this).val();
    var cities = citiesByCountry[country];
    $('#form-checkout select[name="city"]').empty();
    $('#form-checkout select[name="city"]').append(
        '<option disabled selected value="">اختر المدينة</option>'
    );
    cities.forEach(function(city) {
        var newOption = $('<option></option>');
        newOption.text(city);
        newOption.val(city);
        $('#form-checkout select[name="city"]').append(newOption);
      });
  
    });

       $('#form-checkout input[name="payment_method"]').on( "change",function() {
        var paymentMethod = $(this).val();
        if (paymentMethod === 'on_delivery') {
          $('#credit-card-info input').prop('disabled', true);
        } else {
          $('#credit-card-info input').prop('disabled', false);
        }
        $('#credit-card-info').toggle();
      });

});