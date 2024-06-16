# LLD

### directory structure 

vending-machine/
|-- index.js
|-- models/
    |-- Item.js
    |-- Inventory.js
    |-- Transaction.js
    |-- UPI.js
    |-- VendingMachine.js

### UML diagram

+-------------------+          +------------------+
|   VendingMachine  |<-------->|     Inventory    |
+-------------------+          +------------------+
| - inventory: Inventory       | - items: Map     |
| - currentTransaction: Transaction | + addItem()      |
| - upi: UPI        |          | + getItem()      |
+-------------------+          | + updateItemQuantity() |
| + selectItem()    |          +------------------+
| + makePayment()   |
| + dispenseItems() |
| + cancelTransaction()|
| + refillItems()   |
+-------------------+

                 |
                 |
                 v
          +------------------+
          |   Transaction    |
          +------------------+
          | - selectedItems: Item[] |
          | - totalAmount: number   |
          +------------------+
          | + addItem(item: Item): void |
          | + clear(): void            |
          +------------------+

          +------------------+
          |       UPI        |
          +------------------+
          | + processPayment(amount: number): boolean |
          +------------------+

+------------------+
|       Item       |
+------------------+
| - name: string |
| - price: number |
| - quantity: number |
+------------------+

