@echo off
setlocal

REM Use npm.cmd to bypass PowerShell execution-policy blocks on npm.ps1.
call npm.cmd run site:update

endlocal