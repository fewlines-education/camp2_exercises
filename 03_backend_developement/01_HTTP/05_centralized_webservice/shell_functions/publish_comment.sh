curl --header 'Content-Type: application/json' \
--request POST \
--data "{\"postId\": \"$1\", \"name\": \"$2\", \"email\": \"$3\", \"body\": \"$4\"}" \
--url "http://jsonplaceholder.typicode.com/comments"
