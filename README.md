## Queries and Mutations

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