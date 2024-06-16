import { VendingItem } from "./vending-item.js";

export class InventoryManager {
    constructor() {
      this.items = [];
    }
  
    addItem(name, price, quantity) {
      const item = new VendingItem(name, price, quantity);
      this.items.push(item);
    }
  
    findItem(name) {
      return this.items.find(item => item.name === name);
    }
  
    updateInventory(item, quantity) {
      item.quantity -= quantity;
    }
  
    getItems() {
      return this.items;
    }
  }
  