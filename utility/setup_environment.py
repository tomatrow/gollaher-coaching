#!/usr/bin/env python3

import iterm2
import os
import sys

def get_script_path():
    return os.path.dirname(os.path.realpath(sys.argv[0]))

projectDir = os.path.dirname(get_script_path())

async def main(connection):
    app = await iterm2.async_get_app(connection)
    window = app.current_window
    
    # splitting 
    topLeft = window.current_tab.current_session
    bottom = await topLeft.async_split_pane()
    topCenter = await topLeft.async_split_pane(vertical=True)
    topRight = await topCenter.async_split_pane(vertical=True)
    
    # go to prodect directory and load environment
    for session in [topLeft, topRight, topCenter, bottom]:
        await session.async_send_text(f"cd {projectDir}\n")
        await session.async_send_text(f"source .env\n")
    
    # run commands
    await topCenter.async_send_text(f"npm run assemble-watch\n")
    await topRight.async_send_text(f"npm run server\n")
    await topLeft.async_send_text(f"npm run dev\n")
    await bottom.async_send_text(f"npm run start\n")

iterm2.run_until_complete(main)