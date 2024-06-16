import { InventoryManager } from "./inventory-manager.js";
import { PaymentProcesser } from "./payment-processor.js";
import { CoinPaymentMethod } from "./coin-payment-method.js";
import { UpiPaymentMethod } from "./upi-payment-method.js";
import { ItemDispenser } from "./item-dispenser.js";

class VendingMachine {
  constructor() {
    this.inventoryManager = new InventoryManager();
    this.paymentProcesser = new PaymentProcesser();
    this.itemDispenser = new ItemDispenser();

    this.paymentProcesser.addPaymentMethod(new CoinPaymentMethod());
    this.paymentProcesser.addPaymentMethod(new UpiPaymentMethod());

    this.inventoryManager.addItem("Coke", 1.5, 5);
    this.inventoryManager.addItem("Pepsi", 2, 3);
  }

  selectItem(name) {
    const item = this.inventoryManager.findItem(name);

    if (!item) {
      console.log("Item not found");
      return;
    }

    if (item.inventory === 0) {
      console.log("Item out of stock");
      return;
    }

    try {
      this.paymentProcesser.processPayment(item.price);
      this.inventoryManager.updateInventory(item);
      this.itemDispenser.dispenseItem(item);
    } catch (error) {
      console.log(error.message);
    }
  }

  addBalance(amount, paymentMethodName) {
    this.paymentProcesser.addBalance(amount, paymentMethodName);
  }
}

const vendingMachine = new VendingMachine();

// Add balance using coin payment method
vendingMachine.addBalance(10, "coin");

// Add balance using UPI payment method
vendingMachine.addBalance(20, "upi");

// Select item
vendingMachine.selectItem("Coke");
