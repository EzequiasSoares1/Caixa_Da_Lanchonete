# Lanchonete Checkout - Automation Challenge Solution

In this repository, I present the solution developed for the DB Lanchonete Checkout automation challenge. The objective of this challenge was to build the logic that calculates the value of a purchase according to the menu, rules, and discounts of the Lanchonete.

## The Challenge

The challenge consisted of creating a solution capable of calculating the total value of a purchase based on the menu items, considering different forms of payment, discounts, and specific rules.

### Menu

The menu consists of a list of items with their codes, descriptions, and values. Additionally, there is the possibility of adding extra items to some products.

### Payment Methods

The solution must accept three forms of payment: cash, debit, and credit. Each payment method has discount or surcharge rules on the total purchase value.

### Discounts and Fees

- Payment in cash: 5% discount.
- Payment by credit: 3% surcharge on the total value.

### Additional Rules

- Extra items cannot be ordered without the corresponding main item.
- Combos are not considered main items.
- It is possible to order more than one extra item without needing more than one main item.
- Specific error messages should be displayed for each invalid situation.

## How to Run the Solution

### Prerequisites
1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installing Dependencies
1. Open the terminal in the root folder of the project.
2. Execute the following command to install project dependencies:

    ```
    npm install
    ```

### Testing Your Solution

- In the terminal, still in the root folder of the project, execute the following command to run the tests:

    ```
    npm test
    ```

- The provided tests will verify if your solution is correct according to the challenge rules.

### Input (calculatePurchaseValue method):

The calculatePurchaseValue method receives two parameters:

- paymentMethod: A string with the possible valid values: debit, credit, and cash.
- items: An array containing the items to be purchased, where each item is a string containing the item code and quantity separated by a comma.

### Output:

- The return of the calculatePurchaseValue method will be a string, which can be the total purchase value or an error message, according to the challenge rules.

