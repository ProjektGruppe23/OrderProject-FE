export function getOrder() {
    const orderApiId = document.getElementById("inpOrderApiId").value;
    const productName = document.getElementById("inpProductName").value;
    const price = document.getElementById("inpPrice").value;
    const quantity = document.getElementById("inpQuantity").value;
    const costumerAddressId = document.getElementById("inpCostumerAddressId").value;
    const vendorId = document.getElementById("inpVendorId").value;

    // Construct the order object
    const order = {
        orderApiId: orderApiId,
        productName: productName,
        price: price, //parseFloat(price) hvis du vil være sikker på at det er et tal
        quantity: quantity, //parseInt(quantity) hvis du vil være sikker på at det er et tal
        costumerAddress: {
            costumerAddressId: costumerAddressId
        },
        vendor: {
            vendorId: vendorId
        }
    };

    console.log(order);
    return order;
}
