var client = ShopifyBuy.buildClient({
  storefrontAccessToken: 'c58ca270ca441a779329580f45916a74',
  domain: 'better-web-type.myshopify.com'
  // appId: '6'
});

client.collection.fetchAllWithProducts().then((collections) => {
  console.log(collections);
  getCollections(collections);
});

// console.log(client);

function getCollections(collections) {
  for (var collection in collections) {
    const currentCollection = collections[collection];
    const title = currentCollection.title;
    const products = currentCollection.products;

    if (currentCollection.hasOwnProperty('title')) {
      $('.book-products').append(
        `<div class="product-${title}">
          <h4>${title}</h4>
        </div>`
      );
    }
    getProducts(currentCollection.products, title);
  }
}

function getProducts(products, title) {
  for (var product in products) {
    const currentProduct = products[product];
    const description = currentProduct.descriptionHtml;

    if (currentProduct.hasOwnProperty('title')) {
      const productClass = '.product-' + title;
      const productOptionsLength = currentProduct.options.length;
      const productOptionId = currentProduct.options[productOptionsLength - 1].id;

      $(productClass).append(`
        <p>${description}</p>
        <a class="add-to-cart" data-option-id="${productOptionId}" href="#">Add to cart</a>
      `);
    }
  }
}

// Add to cart button
$(document).on('click','.add-to-cart',function(e) {
  e.preventDefault();
  const id = $(this).data('option-id');
  // console.log(id);

  var cartItems = {
    lineItems: [
      { variantId: id, quantity: 1 }
    ]
  };
  client.checkout.create(cartItems).then((checkout) => {
    // Do something with the checkout
    console.log(checkout);
    // window.open(checkout.webUrl, '_self');
  });
});
