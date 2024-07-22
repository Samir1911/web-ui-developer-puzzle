- Code Review
Here are a list of code smells in libs/books:
    1. Use of magic strings instead of string constants.
    2. Binding Data without following a specific standard/pattern. The code works fine but It is best practice to use specific binding approach for specific task.
        a. string interpolation is used for attributes like src, href,...
        b. when string interpolation can be done, attribute binding is performed.
    3. Return type of many functions is not declared in the code. declaring the return type helps in echancing type safety, code readability and accidental assignation. 
    examples: searchBooks(), formatDate()...




- Accessibility Issues
    - LightHouse 
        1. Buttons do not have an accessible name.
        2. Background and foreground colors do not have a sufficient contrast ratio.

    - Manual 
        1. alt attribute is missing in img tag.
        2. form labels are missing.
        3. When we navigate back after search it opens blank page.
        4. javascript link is not accessible.


Lint test -- All pass
unit test -- 6 pass, 1 failure
e2e       -- All specs passed.





