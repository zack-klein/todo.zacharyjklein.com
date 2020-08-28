set -e

REGISTRY_URL=$1
DOCKER_REPO=$2
TAG=$3

echo "Publishing..."
docker build -f prod.Dockerfile -t "$DOCKER_REPO" .
docker tag  "$DOCKER_REPO" "$REGISTRY_URL/$DOCKER_REPO:$TAG"
docker push "$REGISTRY_URL/$DOCKER_REPO:$TAG"
