#! /usr/local/bin/fish
while not squarespace deploy --force --watch
    echo 'Deploy tool exited...restarting...' >& 2
    sleep 1
end