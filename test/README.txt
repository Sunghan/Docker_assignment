1. docker-compose up -d  -> To run webapi and db
2. docker inspect asgmt_task   -> To get ip address of the webapi
3. docker build -t testapi -> To build test container
4. docker run --net asgmt_task --rm -e IP={IP_ADDRESS} testapi

ex) docker run --net asgmt_task --rm -e IP=172.25.0.3 testapi
