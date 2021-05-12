#!/bin/bash

mysql='/usr/bin/mysql'

create_table() {
  $mysql -u root -p nodedb --password=root -e "CREATE TABLE people (id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);"
}

create_table

