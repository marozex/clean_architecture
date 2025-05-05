#!/bin/bash -eu

docker compose exec mysql mysql -uroot -prootpass -Dreversi
