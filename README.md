# koa-coffee
Server-side part for my front-app. 

## Contains:
1. Koa in base
2. Additional koa packages for eager start
3. Moongoose odm. Mongo was selected due to it has already installed :)
4. Nodemone

## Structure:
1. All BL are grouped by entity, not functionality
2. All entities have at least a schema
3. Routes' files are located in each entity and are searched on start automatically. Need just  have schema "entity folder -> folder -> routes"
4. All names and settings are taken from config.

## Start:
- mongo in docker `docker run -d -p 27017-27019:27017-27019 --name some-mongo mongo`
- npm start localhost:3000

## Need to:
1. Add graphQL
2. Add swagger
3. Add testing
4. Add joi
5. Add node-config
6. postre as an option
7. Docker container auto deployment
