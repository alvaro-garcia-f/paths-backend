# IDDLE 
## DESCRIPTION
Paths is educational platform, focused on offering a flexible set of content and support material to help in the process of learning a group of skills.

In this repo you can find the back-end of the project. 

Front-end: coming soon

Demo: coming soon


# DB SCHEMAS

## USERS

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|------------|--------------|-----------|----------|----------------|
| name       | string       |           | NO       |                |
| username   | string       |           | YES      |                |
| email      | string       |           | YES      | RegExp, Unique |
| password   | string       |           | YES      |                |
...

## PATHS

| KEY         | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|-------------|--------------|-----------|----------|----------------|
| title       | string       |           | YES      |                |
| description | string       |           | YES      |                |
...

## STAGES

| KEY    | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------------|-----------|----------|----------------|
...

## QUESTIONS

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
...

# API ROUTES

## AUTHENTICATION ENDPOINTS

| METHOD | URL            | AUTH | FUNCTION             |
|--------|----------------|------|----------------------|
| POST   | '/auth/signup' | NO   | Create a new account |
| POST   | '/auth/login'  | NO   | Authenticate a user  |

## USERS ENDPOINTS

| METHOD | URL               | AUTH | FUNCTION                    |
|--------|-------------------|------|-----------------------------|
...

## PATHS ENDPOINTS

| METHOD | URL                                       | AUTH | FUNCTION                                 |
|--------|-------------------------------------------|------|------------------------------------------|
...

## STAGES ENDPOINTS

| METHOD | URL                   | AUTH | FUNCTION                                 |
|--------|-----------------------|------|------------------------------------------|
...

## QUESTIONS ENDPOINTS

| METHOD | URL                   | AUTH | FUNCTION                                 |
|--------|-----------------------|------|------------------------------------------|
...
