FROM node:12-slim

LABEL "com.github.actions.name"="Pull Request Checklist"
LABEL "com.github.actions.description"="Creates a pull request checklist"
LABEL "com.github.actions.icon"="check-square"
LABEL "com.github.actions.color"="purple"
LABEL "repository"="https://github.com/balevine/pull-request-checklist"
LABEL "homepage"="https://github.com/balevine/pull-request-checklist"
LABEL "maintainer"="balevine"

COPY . .

RUN npm install --production

ENTRYPOINT ["node", "/main.js"]
