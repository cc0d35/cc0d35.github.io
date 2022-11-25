#!/usr/bin/env bash

cd "$(dirname "$0")" || return 1

cd astro || return 1

TMP_DIR=/tmp/astro-build
GHPAGES_BRANCH=gh-pages
PUBLISH_COMMIT=$(git rev-parse HEAD)

npm install && \
    npm run astro build && \
    (rm -fr "$TMP_DIR" || true) && \
    mkdir "$TMP_DIR" && \
    cp -R ../.git "$TMP_DIR" && \
    git --work-tree="$TMP_DIR" --git-dir="$TMP_DIR/.git" checkout -f "$GHPAGES_BRANCH" && \
    cp -R ./dist/* "$TMP_DIR" && \
    cd "$TMP_DIR" && \
    git add . && \
    git commit -S -m "[Automated] Publish ${PUBLISH_COMMIT}" && \
    git push --force-with-lease && \
    echo "Published successfully."
