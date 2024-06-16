import { PaymentMethod } from "./payment-method.js";

export class CoinPaymentMethod extends PaymentMethod{
    constructor(){
        super();
        this.balance = 0;
    }

    getName() {
        return "coin";
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