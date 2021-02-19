FROM greenstand/treetracker-tile-libraries:first

ENV PATH="/root/.nvm/versions/node/v12.16.3/bin/:${PATH}"

ENV DIR /opt/treetracker-map-tile-server

COPY . $DIR

WORKDIR $DIR

#don't know how to set path for npm
RUN /root/.nvm/versions/node/v12.16.3/bin/npm install

#replace the module with the built-in mapnik in the docker image
RUN mv $DIR/node_modules/\@carto/mapnik/ $DIR/node_modules/\@carto/mapnik.bak

RUN ln -s /root/node-mapnik/ $DIR/node_modules/\@carto/mapnik

#to test the db connection, using .env, please set it up targeting to our dev DB
RUN /root/.nvm/versions/node/v12.16.3/bin/npm test

ENTRYPOINT /root/.nvm/versions/node/v12.16.3/bin/npm start
#ENTRYPOINT /bin/bash
