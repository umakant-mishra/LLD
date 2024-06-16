import { PaymentMethod } from "./payment-method.js";

export class UpiPaymentMethod extends PaymentMethod{
    constructor(){
        super();
        this.balance = 0;
    }

    getName() {
        return "upi";
      }
    
      getBalance() {
        return this.balance;
      }
    
      deductBalance(amount) {
        this.balance -= amount;
      }
    
      addBalance(amount) {
        this.balance += amount;
      }

      addPayment(amount) {
        this.balance += amount;
      }
}