# PATHS
## DESCRIPTION
Paths is educational platform, focused on offering a flexible set of content and support material to help in the process of learning a group of skills.

In this repo you can find the back-end of the project. 

Front-end: coming soon

Demo: coming soon


# DB SCHEMAS

## USERS

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION       |
|------------|--------------|-----------|----------|------------------|
| name       | string       |           | NO       |                  |
| email      | string       |           | YES      | RegExp, Unique   |
| password   | string       |           | YES      |                  |
| role       | enum         |           | YES      | Teacher, Student |
...

## PATHS

| KEY         | TYPE          | REFERENCE | REQUIRED | VALIDATION        |
|-------------|---------------|-----------|----------|-------------------|
| title       | string        |           | YES      |                   |
| description | string        |           | YES      |                   |
| teacher     | ObjectId      | User      | YES      | { role: teacher } |
| students    | [ ObjectId ]  | User      |          | { role: student } |
...

## STAGES

| KEY    | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------------|-----------|----------|----------------|
...

## LESSONS

| KEY    | TYPE           | REFERENCE | REQUIRED | VALIDATION                         |
|--------|----------------|-----------|----------|------------------------------------|
| title  | string         |           | YES      |                                    |
| slides | [ { Object } ] |           | YES      | { slide: number, content: string } |
...

## QUESTIONS

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
...

# API ROUTES

## AUTHENTICATION ENDPOINTS

| METHOD | URL             | AUTH | FUNCTION                 |
|--------|-----------------|------|--------------------------|
| POST   | '/auth/student' | YES  | Create a student account |
| POST   | '/auth/login'   | NO   | Authenticate a user      |

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

## LESSON ENDPOINTS

| METHOD | URL                   | AUTH | FUNCTION                                 |
|--------|-----------------------|------|------------------------------------------|
| GET    | '/lessons'            | YES  | List all lessons                         |
| POST   | '/lessons'            | YES  | Create new lesson                        |
...

## QUESTIONS ENDPOINTS

| METHOD | URL                   | AUTH | FUNCTION                                 |
|--------|-----------------------|------|------------------------------------------|
...
