# 1. Design documentation
The following is where the design history of Defra forms will be stored.

Decisions are organised according to whether it's for the Form designer or Form runner.
 
## 2. Our approach
One of our core design principles is to always **start with what already exists**. We believe that this is not only more efficient, but also ensures we're using components and patterns that have already been tested and proven to be effective. 

We reviewed several existing form builder used across government against their suitability to meet Defra's needs. Consequently, we decided to adapt the [XGov Digital Form Builder](https://github.com/XGovFormBuilder/digital-form-builder/tree/main).

## 3. Heuristic evaluation of the XGov Digital Form Builder
"A heuristic evaluation is a method for identifying design problems in a user interface"-[NNGroup](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/#:~:text=A%C2%A0heuristic%20evaluation%20is%20a%C2%A0method%20for%20identifying%20design%20problems%20in%20a%20user%20interface.%20Evaluators%20judge%20the%20design%20against%20a%20set%20of%20guidelines%20(called%20heuristics)%20that%20make%20systems%20easy%20to%20use.)

One senior interaction designer and two senior content designers (core users) took part in a heuristics evaluation. The following issues were found:

### 3a. Visibility of system status
"The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time"

| What didn't perform well well |
| ------------- |
| The main form builder lacks a clear title, making it difficult to understand its purpose and where to start. |  
| Selected elements are not easily visible during keyboard navigation and easily become disoriented and lose track of their actions  | 
| The system lacks progressive disclosure, overwhelming users with all options at once and requiring trial and error to understand. There's no clear, intuitive sequence of actions.  |  
| when creating a new component and saving it, there is no confirmation message besides the addition of an illustration to the page visualizer component | 

### 3b. Match between system and the real world
"The design should use language and terminology that users are familiar with, avoiding internal jargon. It should adhere to real-world conventions, presenting information in a natural and logical order that users can easily understand."

| What didn't perform well well |
| ------------- |
| unclear prompts and button labels, with actions like "Create component" not accurately reflecting their functions |  
| Headings accessed from green buttons lack breadcrumb formatting, and the mix of verbs and nouns in button labels adds confusion | 
| Excessive text, such as in the "Add link" box, overwhelms users, while some components like "Fees" lack any description, leaving users without guidance |  





