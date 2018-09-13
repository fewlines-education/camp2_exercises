touch 08_publish_post.result
curl -d "userId=$1&id&title=$2&body=$3" https://jsonplaceholder.typicode.com/posts
