#! /usr/local/bin/fish

function send_npm_run -a cmd
    tmux send-keys "source .env; npm run $cmd" C-m
end 

send_npm_run assemble-watch
tmux split-window -v
tmux selectp -t 0
tmux split-window -h -p 66
send_npm_run server
tmux split-window -h 
send_npm_run dev
tmux selectp -t 3
send_npm_run start
