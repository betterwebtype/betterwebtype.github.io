var productId = '122281558040';


$(document).ready(function() {
  getProduct();
  $('.product-type').on('click', function(){
    var dataId = $(this).attr('id');
    var data = document.getElementById(dataId);

    productId = data.dataset.productId;
    // console.log(productId);
    getProduct();
  });
});

/* Remove commas
============================================================ */
function removeCommas(str){
  return(str.replace(/,/g,''));
};

function getProduct(){
// $(function() {

  /* Build new ShopifyBuy client
  ============================================================ */

  var client = ShopifyBuy.buildClient({
    accessToken: 'c58ca270ca441a779329580f45916a74',
    domain: 'better-web-type.myshopify.com',
    appId: '6'
  });

  var product;
  var cart;
  var cartLineItemCount;
  if(localStorage.getItem('lastCartId')) {
    client.fetchCart(localStorage.getItem('lastCartId')).then(function(remoteCart) {
      cart = remoteCart;
      cartLineItemCount = cart.lineItems.length;
      renderCartItems();
    });
  } else {
    client.createCart().then(function (newCart) {
      cart = newCart;
      localStorage.setItem('lastCartId', cart.id);
      cartLineItemCount = 0;
    });
  }

  var previousFocusItem;


  /* Fetch product and init
  ============================================================ */
  client.fetchProduct(productId).then(function (fetchedProduct) {
    product = fetchedProduct;
    // console.log(product);
    var selectedVariant = product.selectedVariant;
    // console.log(selectedVariant.id);
    var selectedVariantImage = product.selectedVariantImage;
    var currentOptions = product.options;

    var variantSelectors = generateSelectors(product);
    $('.variant-selectors').html(variantSelectors);
    $('input.bookVariant:first-child').attr('checked', true);

    // updateProductTitle(product.title);
    // updateVariantImage(selectedVariantImage);
    // updateVariantTitle(selectedVariant);
    // updateVariantPrice(selectedVariant);
    attachOnVariantSelectListeners(product);
    updateCartTabButton();
    bindEventListeners();
  });

  /* Generate DOM elements for variant selectors
  ============================================================ */
  // function generateSelectors(product) {
  //   var elements = product.options.map(function(option) {
  //     var optionsHtml = option.values.map(function(value) {
  //       return '<option value="' + value + '">' + value + '</option>';
  //     });

  //     return '<div class="shopify-select">\
  //               <select class="select" name="' + option.name + '">' + optionsHtml + '</select>\
  //               <svg class="shopify-select-icon" viewBox="0 0 24 24"><path d="M21 5.176l-9.086 9.353L3 5.176.686 7.647 12 19.382 23.314 7.647 21 5.176z"></path></svg>\
  //             </div>'
  //   });

  //   return elements;
  // }

  function generateSelectors(product) {
    var elements = product.options.map(function(option) {
      var optionsHtml = option.values.map(function(value) {
        var desc;
        var price;
        var remains;
        if (value == 'eBook'){
          desc = "epub (iBooks), mobi (Kindle) & PDF."
          price = "19.95";
          remains;
        } else if (value == 'Paperback'){
          desc = "High-quality colour print with free shipping."
          price = "34.95";
          remains = "Sold out";
        }
        return '<input class="bookVariant" type="radio" id="' + value + '" name="' + option.name + '" value="' + value + '"><label for="' + value + '" class="book-option ' + value + '">' + value + ' <span class="remaining"><b>' + remains + '</b></span><br><span class="desc">' + desc + '</span><span class="price">$' + price + '</span></label>';
        // return '<option value="' + value + '">' + value + '</option>';
      });
      optionsHtml = optionsHtml.toString();
      optionsHtml = removeCommas(optionsHtml);

      return '<div>\
      <form class="select">' + optionsHtml + '<input class="bookVariant" type="radio" name="Type" id="hardcover" value="hardcover"><label for="hardcover" class="book-option Hardcover">Hardcover Deluxe <span class="remaining"><b>Sold out</b></span><br><span class="desc">Limited edition pack with your name in the&nbsp;book.</span><span class="price-from">From</span><span class="price">$59.95</span></label></form>\
      </div>'
    });

    return elements;
  }


  /* Bind Event Listeners
  ============================================================ */
  function bindEventListeners() {
    /* cart close button listener */
    $('.cart .btn--close').on('click', closeCart);

    /* click away listener to close cart */
    $(document).on('click', function(evt) {
      if((!$(evt.target).closest('.cart').length) && (!$(evt.target).closest('.js-prevent-cart-listener').length)) {
        closeCart();
      }
    });

    /* escape key handler */
    var ESCAPE_KEYCODE = 27;
    $(document).on('keydown', function (evt) {
      if (evt.which === ESCAPE_KEYCODE) {
        if (previousFocusItem) {
          $(previousFocusItem).focus();
          previousFocusItem = ''
        }
        closeCart();
      }
    });

    /* checkout button click listener */
    $('.btn--cart-checkout').on('click', function () {
      window.open(cart.checkoutUrl, '_self');
    });

    /* buy button click listener */
    $('.buy-button').on('click', buyButtonClickHandler);

    /* increment quantity click listener */
    $('.cart').on('click', '.quantity-increment', function () {
      var variantId = $(this).data('variant-id');
      incrementQuantity(variantId);
    });

    /* decrement quantity click listener */
    $('.cart').on('click', '.quantity-decrement', function() {
      var variantId = $(this).data('variant-id');
      decrementQuantity(variantId);
    });

    /* update quantity field listener */
    $('.cart').on('keyup', '.cart-item__quantity', debounce(fieldQuantityHandler, 250));

    /* cart tab click listener */
    $('.btn--cart-tab').click(function() {
      setPreviousFocusItem(this);
      openCart();
    });
  }


  /* Variant option change handler
  ============================================================ */
  function attachOnVariantSelectListeners(product) {
    $('.variant-selectors').on('change', '.bookVariant', function(event) {
      var $element = $(event.target);
      var name = $element.attr('name');
      var value = $element.val();
      // console.log(value);
      if (value != 'hardcover'){
        $('#buyButton').show();
        $('#findOutMore').hide();
      } else {
        $('#buyButton').hide();
        $('#findOutMore').show().css('display', 'block');
      }
      product.options.filter(function(option) {
        return option.name === name;
      })[0].selected = value;

      var selectedVariant = product.selectedVariant;
      var selectedVariantImage = product.selectedVariantImage;
      // updateProductTitle(product.title);
      // updateVariantImage(selectedVariantImage);
      // updateVariantTitle(selectedVariant);
      // updateVariantPrice(selectedVariant);
    });
  }

  /* Update product title
  ============================================================ */
  function updateProductTitle(title) {
    $('#buy-button-1 .product-title').text(title);
  }

  /* Update product image based on selected variant
  ============================================================ */
  function updateVariantImage(image) {
    var src = (image) ? image.src : ShopifyBuy.NO_IMAGE_URI;

    $('#buy-button-1 .variant-image').attr('src', src);
  }

  /* Update product variant title based on selected variant
  ============================================================ */
  function updateVariantTitle(variant) {
    $('#buy-button-1 .variant-title').text(variant.title);
  }

  /* Update product variant price based on selected variant
  ============================================================ */
  function updateVariantPrice(variant) {
    $('#buy-button-1 .variant-price').text('$' + variant.price);
  }

  /* Attach and control listeners onto buy button
  ============================================================ */
  function buyButtonClickHandler(evt) {
    // console.log(product);
    // var id = [];
    // console.log("pre: " + id);
    evt.preventDefault();
    var id = product.selectedVariant.id;
    var quantity;
    var cartLineItem = findCartItemByVariantId(id);
    // console.log(cartLineItem);

    quantity = cartLineItem ? cartLineItem.quantity + 1 : 1;

    addOrUpdateVariant(product.selectedVariant, quantity);
    setPreviousFocusItem(evt.target);
    $('#checkout').focus();
    // console.log("post: " + id);
  }

  /* Update product variant quantity in cart
  ============================================================ */
  function updateQuantity(fn, variantId) {
    // console.log(variantId);
    var variant = product.variants.filter(function (variant) {
      return (variant.id === variantId);
    })[0];
    // console.log(variant);
    // console.log(variant.id);
    var quantity;
    var cartLineItem = findCartItemByVariantId(variant.id);
    // console.log(cartLineItem);
    if (cartLineItem) {
      quantity = fn(cartLineItem.quantity);
      updateVariantInCart(cartLineItem, quantity);
    }
  }

  /* Decrease quantity amount by 1
  ============================================================ */
  function decrementQuantity(variantId) {
    updateQuantity(function(quantity) {
      return quantity - 1;
    }, variantId);
  }

  /* Increase quantity amount by 1
  ============================================================ */
  function incrementQuantity(variantId) {
    updateQuantity(function(quantity) {
      return quantity + 1;
    }, variantId);
  }

  /* Update product variant quantity in cart through input field
  ============================================================ */
  function fieldQuantityHandler(evt) {
    var variantId = parseInt($(this).closest('.cart-item').attr('data-variant-id'), 10);
    var variant = product.variants.filter(function (variant) {
      return (variant.id === variantId);
    })[0];
    var cartLineItem = findCartItemByVariantId(variant.id);
    var quantity = evt.target.value;
    if (cartLineItem) {
      updateVariantInCart(cartLineItem, quantity);
    }
  }

  /* Debounce taken from _.js
  ============================================================ */
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    }
  }

  /* Open Cart
  ============================================================ */
  function openCart() {
    $('.cart').addClass('js-active');
  }

  /* Close Cart
  ============================================================ */
  function closeCart() {
    $('.cart').removeClass('js-active');
    $('.overlay').removeClass('js-active');
  }

  /* Find Cart Line Item By Variant Id
  ============================================================ */
  function findCartItemByVariantId(variantId) {
    return cart.lineItems.filter(function (item) {
      return (item.variant_id === variantId);
    })[0];
  }

  /* Determine action for variant adding/updating/removing
  ============================================================ */
  function addOrUpdateVariant(variant, quantity) {
    openCart();
    cartLineItem = findCartItemByVariantId(variant.id);
    // console.log(cartLineItem);

    if (cartLineItem) {
      updateVariantInCart(cartLineItem, quantity);
    } else {
      addVariantToCart(variant, quantity);
    }

    updateCartTabButton();
  }

  /* Update details for item already in cart. Remove if necessary
  ============================================================ */
  function updateVariantInCart(cartLineItem, quantity) {
    variantId = cartLineItem.variant_id;
    
    var cartLength = cart.lineItems.length;
    cart.updateLineItem(cartLineItem.id, quantity).then(function(updatedCart) {
      var $cartItem = $('.cart').find('.cart-item[data-variant-id="' + variantId + '"]');
      if (updatedCart.lineItems.length >= cartLength) {
        $cartItem.find('.cart-item__quantity').val(cartLineItem.quantity);
        $cartItem.find('.cart-item__price').text(formatAsMoney(cartLineItem.line_price));
      } else {
        $cartItem.addClass('js-hidden').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
         $cartItem.remove();
       });
      }

      updateCartTabButton();
      updateTotalCartPricing();
      if (updatedCart.lineItems.length < 1) {
        closeCart();
      }
    }).catch(function (errors) {
      console.log('Fail');
      console.error(errors);
    });
  }

  /* Add 'quantity' amount of product 'variant' to cart
  ============================================================ */
  function addVariantToCart(variant, quantity) {
    openCart();

    cart.createLineItemsFromVariants({ variant: variant, quantity: quantity }).then(function() {
      var cartItem = cart.lineItems.filter(function (item) {
        return (item.variant_id === variant.id);
      })[0];
      var $cartItem = renderCartItem(cartItem);
      var $cartItemContainer = $('.cart-item-container');
      $cartItemContainer.append($cartItem);
      setTimeout(function () {
        $cartItemContainer.find('.js-hidden').removeClass('js-hidden');
      }, 0)

    }).catch(function (errors) {
      console.log('Fail');
      console.error(errors);
    });

    updateTotalCartPricing();
    updateCartTabButton();
  }

  /* Return required markup for single item rendering
  ============================================================ */
  function renderCartItem(lineItem) {
    var lineItemEmptyTemplate = $('#CartItemTemplate').html();
    var $lineItemTemplate = $(lineItemEmptyTemplate);
    var itemImage = lineItem.image.src;
    $lineItemTemplate.attr('data-variant-id', lineItem.variant_id);
    $lineItemTemplate.addClass('js-hidden');
    $lineItemTemplate.find('.cart-item__img').css('background-image', 'url(' + itemImage + ')');
    $lineItemTemplate.find('.cart-item__title').text(lineItem.title);
    $lineItemTemplate.find('.cart-item__variant-title').text(lineItem.variant_title);
    $lineItemTemplate.find('.cart-item__price').text(formatAsMoney(lineItem.line_price));
    $lineItemTemplate.find('.cart-item__quantity').attr('value', lineItem.quantity);
    $lineItemTemplate.find('.quantity-decrement').attr('data-variant-id', lineItem.variant_id);
    $lineItemTemplate.find('.quantity-increment').attr('data-variant-id', lineItem.variant_id);

    return $lineItemTemplate;
  }

  /* Render the line items currently in the cart
  ============================================================ */
  function renderCartItems() {
    var $cartItemContainer = $('.cart-item-container');
    $cartItemContainer.empty();
    var lineItemEmptyTemplate = $('#CartItemTemplate').html();
    var $cartLineItems = cart.lineItems.map(function (lineItem, index) {
      return renderCartItem(lineItem);
    });
    // console.log(cartLineItems);
    $cartItemContainer.append($cartLineItems);

    setTimeout(function () {
      $cartItemContainer.find('.js-hidden').removeClass('js-hidden');
    }, 0)
    updateTotalCartPricing();
  }

  /* Update Total Cart Pricing
  ============================================================ */
  function updateTotalCartPricing() {
    $('.cart .pricing').text(formatAsMoney(cart.subtotal));
  }

  /* Format amount as currency
  ============================================================ */
  function formatAsMoney(amount, currency, thousandSeparator, decimalSeparator, localeDecimalSeparator) {
    currency = currency || '$';
    thousandSeparator = thousandSeparator || ',';
    decimalSeparator = decimalSeparator || '.';
    localeDecimalSeparator = localeDecimalSeparator || '.';
    var regex = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');

    return currency + parseFloat(amount, 10).toFixed(2)
    .replace(localeDecimalSeparator, decimalSeparator)
    .replace(regex, '$1' + thousandSeparator)
    .toString();
  }

  /* Update cart tab button
  ============================================================ */
  function updateCartTabButton() {
    if (cart.lineItems.length > 0) {
      $('.btn--cart-tab .btn__counter').html(cart.lineItemCount);
      $('.btn--cart-tab').addClass('js-active');
    } else {
      $('.btn--cart-tab').removeClass('js-active');
      $('.cart').removeClass('js-active');
    }
  }

  /* Set previously focused item for escape handler
  ============================================================ */
  function setPreviousFocusItem(item) {
    previousFocusItem = item;
  }

};
