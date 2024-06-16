import { PaymentMethod } from "./payment-method.js"

export class PaymentProcesser {
    constructor(){
        this.paymentMethods = []
    }

    addPaymentMethod(method){
        if(method instanceof PaymentMethod){
            this.paymentMethods.push(method)
        }else {
            throw new Error("Method 'addPaymentMethod' must be an instance of PaymentMethod.");
          }
    }

    processPayment(amount){
       let totalBalance = 0;
       for (let method of this.paymentMethods) {
          totalBalance += method.getBalance();
      }
      if (totalBalance < amount) {
      throw new Error("Not enough balance.");
      }
      for (let method of this.paymentMethods) {
       if (method.getBalance() >= amount) {
        method.addPayment(-amount);
        break;
      } else {
        let coinBalance = method.getBalance();
        method.addPayment(-coinBalance);
        amount -= coinBalance;
      }
     }
    }

    addBalance(amount, paymentMethodName) {
        const paymentMethod = this.paymentMethods.find(
          (method) => method.getName() === paymentMethodName
        );
    
        if (!paymentMethod) {
          throw new Error(`Payment method "${paymentMethodName}" not found.`);
        }
    
        paymentMethod.addBalance(amount);
      }
}