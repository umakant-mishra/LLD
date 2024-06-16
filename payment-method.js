export class PaymentMethod {
    constructor() {
        if (new.target === PaymentMethod) {
          throw new TypeError("Cannot construct PaymentMethod instances directly");
        }
      }
    
      addPayment(amount) {
        throw new Error("Method 'addPayment' must be implemented.");
      }
    
      getBalance() {
        throw new Error("Method 'getBalance' must be implemented.");
      }
    
}