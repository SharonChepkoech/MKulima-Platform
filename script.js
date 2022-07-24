class Mkulima{
    constructor(){
    this.farm = [];
    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmName, farmId, farmer, phone, address) => {
    this.farm.push({farmName, farmId,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let selected = this.farm.find(item => item.farmId ===farmId);
    let farmIndex = this.farm.indexOf(selected);
    this.farm.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmersName,newPhone,newAddress){
    let currentFarm = this.farm.find(item => item.farmId ===farmId)
    currentFarm.farmId =newFarmId;
    currentFarm.farmName =newFarmName;
    currentFarm.farmer =newFarmersName;
    currentFarm.phone =newPhone;
    currentFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farm.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    }
    this.removeProduct = (productId) => {
    let selected = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(selected);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let selectedProduct = this.product.find(item => item.productId ===productId)
    selectedProduct.productId =newProductId;
    selectedProduct.productName = newProductName;
    selectedProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for Kshs ${quantity*specificProduct.price}`);
    }
    }
    }
    let firstFarm = new Mkulima();
    firstFarm.addFarm("Kilele Farm", "123 Kile South","Mkulima Bora","0711122342","477- South")
    firstFarm.addFarm("Malel Farm","777 - 12 North", "Metto", "01828738", "8263 - North")    
    console.log(firstFarm.farm); 