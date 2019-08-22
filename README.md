# koa-coffee
Server-side part for my front-app. 

##Contains:
1. Koa in base
2. Additional koa packages for eager start
3. Moongoose odm. Mongo was selected due to it has already installed :) Even though postgres more suits for the project.
Docker container with postres failed to install locally :(
4. Nodemone

##Structure:
1. All BL grouped by entity, not functionality
2. All entity has have at least schema
3. Routes files are located in each entity and are searched on start automatically. Need just  have schema "entity folder -> folder -> routes"
4. All names and settings are taken from config.

##Need to:
1. Add graphQL
2. Add swagger
3. Add testing
4. Add joi