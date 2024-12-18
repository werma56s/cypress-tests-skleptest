FROM cypress/included:13.15.0

WORKDIR /app

VOLUME ["/app"]

COPY . .
RUN npm install 
RUN npm install cypress-cucumber-preprocessor

CMD ["npm","run", "npx cypress run"]