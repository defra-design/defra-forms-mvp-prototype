# Repeated questions

## Key things we are designing for

- users able add another thing of the same type in a form
- add this pattern to a form in as little steps as possible
  
---
### Version 1
Designed in the context of the [support-attestation-costs-reimbursement-application form](https://www.gov.uk/government/publications/support-attestation-costs-reimbursement-application)

| What we've done  | Why we did it |
| ------------- | ------------- |
|  Use the [DWP 'Add another' pattern](https://design-system.dwp.gov.uk/patterns/add-another-thing) |  Pre-tested feature with the flexibility for adapting to any specific defra needs |
| Avoid in-line table editor patterns | Riddled with accessibility issues/|
| Spreadsheet upload will not fall part of MVP |  To start small and build up as the product becomes more sophisticated |

<h3>
<details>
  <summary>view screens</summary>
  
  <h4>Page 1</h4>

![form status tag in form editor pages v3](/app/design/assets/multiple.png)

  <h4>Page 2: add another page </h4>

![form status tag in form editor pages v3](/app/design/assets/multiple-3.png)

  <h4>Page 3: item 2</h4>

![form status tag in form editor pages v3](/app/design/assets/multiple-1.png)

  <h4>Page 3: add another page</h4>

![form status tag in form editor pages v3](/app/design/assets/multiple-4.png)

> Cycle then repeats itself until stops adding items
  
</details>
</h3>

<br>

## What we learned
- not all questions will be on a single page so we need to incorporate DWP's pattern for more complex items
- save and return won't fall part of our MVP so we need to consider a limit of items users can add to avoid them being timed out and losing all their progress

<br>
