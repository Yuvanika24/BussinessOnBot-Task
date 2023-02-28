<h3> BussinessonBot-Task</h3>
<h3> Backend</h3>
To create a REST service that can fetch bank details, using the data given in the API’s query parameters.

<h3>Case 1</h3>
Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.

Request URL  - /api/search?q=Mumbai&limit=2&offset=1 

OUTPUT:

<h3>Case 2</h3>
Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset

Request URL  - /api/branch?q=LONI&limit=1&offset=1 

OUTPUT:
