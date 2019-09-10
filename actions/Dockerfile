FROM node:12-slim

LABEL "com.github.actions.name"="Pull Request Checklist"
LABEL "com.github.actions.description"="Creates a pull request checklist"
LABEL "com.github.actions.icon"="check-square"
LABEL "com.github.actions.color"="purple"
LABEL "repository"="https://github.com/balevine/actions"
LABEL "homepage"="https://github.com/balevine/actions"
LABEL "maintainer"="balevine"

COPY . .

RUN npm install --production

ENTRYPOINT ["node", "/checklist.js"]
