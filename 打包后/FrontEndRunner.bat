@echo off
set BACKEND_EXE=my-midway.exe
set FRONTEND_PORT=8080
set DIST_DIRECTORY=./dist

%BACKEND_EXE% &
python -m http.server %FRONTEND_PORT% --directory=%DIST_DIRECTORY%