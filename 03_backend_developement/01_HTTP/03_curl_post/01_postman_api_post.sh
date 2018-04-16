touch 01_postman_api_post.result
curl --data "Hello from postman" https://postman-echo.com/post | jq .form > 01_postman_api_post.result
