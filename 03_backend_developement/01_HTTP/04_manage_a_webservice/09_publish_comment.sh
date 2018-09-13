touch 09_publish_comment.result
curl -d "postId=$1&id&name=$2&email=$3&body=$4" "https://jsonplaceholder.typicode.com/comments"
