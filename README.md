## Queries and Mutations

Once installed and running, you can reproduce the bug by subscribing as shown below and running the mutation shown below.

```gql
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
input object
"""

{
   "cust": {
    "firstName": "Bill",
    "lastName": "Jones",
    "email": "billjones@email.com"
   }
 }

"""
subscription
"""

subscription custAdd {
  custAdded {
    firstName
    lastName
  }
}
```