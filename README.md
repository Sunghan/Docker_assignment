# To Run API and DB
docker-compose up -d

# To shutdown API and DB
docker-compose down

# To shutdown and remove data
docker-compose down --volumes

# To build Dockerfile for webApi
docker build -t taskapi .