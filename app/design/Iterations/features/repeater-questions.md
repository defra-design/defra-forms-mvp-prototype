# Repeated questions

## Key things we are designing for

- users able add another thing of the same type in a form
- add this pattern to a form in as little steps as possible
  
---
### Version 1
Designed in the context of the [support-attestation-costs-reimbursement-application form](https://www.gov.uk/government/publications/support-attestation-costs-reimbursement-application)

#### Screens for v1
Designed in the context of the [support-attestation-costs-reimbursement-application form](https://www.gov.uk/government/publications/support-attestation-costs-reimbursement-application)

<details>
  <summary>View character rule configurations</summary>

Page 1: item 1

![form status tag in form editor pages v3](/app/design/assets/multiple.png)
  
</details>
</h3>


![form status tag in form editor pages v3](/app/design/assets/custom-field-validation_page1.png)
<br> *Process of adding custom field validation in which users can specify the length requirements for user input*

<br>

#### Page 2 for adding custom field validation
![form status tags v3](/app/design/assets/custom-field-validation_page2.png)
<br> *They can specify the letters/number requirements for each characters or still use Regex if inclined to. They can also add a custom validaiton message when errors occur*



#### Custom field validation - citizen view example
![form status tag in form editor pages v3](/app/design/assets/custom-field-validation-error-message.png)
<br> *Example of the types of custom validations users need and an custom validation messaging when users enter incompatible characters*


## What we learned
- the interface enabled content designers to avoid the very steep learning curve of using Regex and create their own custom field validation requirements
- additional need was identified to allow users to have more than one reange of letters in a single cell. For example, A-C, Y-Z

<br>
