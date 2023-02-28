<h3> BussinessOnBot-Task</h3>
<h3> BACKEND</h3>
To create a REST service that can fetch bank details, using the data given in the API’s query parameters.

<h3>Case 1</h3>
Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.

Request URL  - /api/search?q=Mumbai&limit=2&offset=1 

<h3>OUTPUT:</h3>

![image](https://user-images.githubusercontent.com/85669318/221779534-e0aff3a0-12e5-4586-94d2-80e2be19a69c.png)

<h3>Case 2</h3>
Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset

Request URL  - /api/branch?q=LONI&limit=1&offset=1 

<h3>OUTPUT:</h3>

Branch : With offset 0

![image](https://user-images.githubusercontent.com/85669318/221779620-3207621f-9069-4152-a0de-953b9d343e2f.png)

Branch : With offset 1

![image](https://user-images.githubusercontent.com/85669318/221779751-82363c51-438b-4bac-9e55-deb062533207.png)


