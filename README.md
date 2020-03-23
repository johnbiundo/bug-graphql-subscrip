## Issue 

Adding a subscription triggered by a mutation; returns `data: null` in the subscription when a correct mutation succeeds.

## Install

Usual install `npm i`

## Subscription and Mutation queries

Once installed and running, you can reproduce the bug by subscribing as shown below and running the mutation shown below in the playground on `localhost:3000/graphql`

```gql
"""
subscription
"""

subscription custAdd {
  custAdded {
    firstName
    lastName
  }
}

"""
mutation
"""

mutation addCustomer($cust: NewCustomer!)
{
  addCustomer(newCustomer: $cust) {
    id
    email
    firstName
    lastName
  }
}

"""
input object for addCustomer mutation
"""

{
   "cust": {
    "firstName": "Bill",
    "lastName": "Jones",
    "email": "billjones@email.com"
   }
 }
```
