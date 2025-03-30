@echo off
setlocal enabledelayedexpansion

:: Output JSON file
set OUTPUT_FILE=certifications.json

echo { > %OUTPUT_FILE%
echo   "certificados": [ >> %OUTPUT_FILE%

set FIRST=1
for /r %%F in (*.jpg *.png *.jpeg *.gif *.bmp) do (
    set "FULL_PATH=%%F"
    set "REL_PATH=!FULL_PATH:%CD%\=!"
    set "REL_PATH=!REL_PATH:\=/!"

    :: Extract directory and filename separately
    for %%A in ("!FULL_PATH!") do (
        set "DIR_PATH=%%~dpA"
        set "FILE_NAME=%%~nxA"
    )

    :: Replace spaces with underscores in the filename
    set "NEW_FILE_NAME=!FILE_NAME: =_!"

    if not "!FILE_NAME!" == "!NEW_FILE_NAME!" ren "!DIR_PATH!!FILE_NAME!" "!NEW_FILE_NAME!"

    set "CLEAN_PATH=!REL_PATH: =_!"

    if !FIRST! == 1 (
        echo     {"nome": "!CLEAN_PATH!"} >> %OUTPUT_FILE%
        set FIRST=0
    ) else (
        echo     {"nome": "!CLEAN_PATH!"}, >> %OUTPUT_FILE%
    )
)

echo   ] >> %OUTPUT_FILE%
echo } >> %OUTPUT_FILE%

echo JSON file generated: %OUTPUT_FILE%
