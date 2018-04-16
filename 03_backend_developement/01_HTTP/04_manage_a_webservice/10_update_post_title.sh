touch 10_update_post_title.result
curl -X PUT -d "postId=$1&title=$2" "https://jsonplaceholder.typicode.com/posts/$1"
