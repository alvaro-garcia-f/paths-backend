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
| quiz   | [ { Object } ] |           | NO       | 
...

## QUESTIONS

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
...

# API ROUTES

## AUTHENTICATION ENDPOINTS

| METHOD | URL             | AUTH | FUNCTION                 |
|--------|-----------------|------|--------------------------|
| POST   | '/auth/login'   | NO   | Authenticate a user      |

## USERS ENDPOINTS

| METHOD | URL                  | AUTH    | FUNCTION                    |
|--------|----------------------|---------|-----------------------------|
| GET    | '/users/students'    | Teacher | List all students           |
| POST   | '/users/student'     | Teacher | Create a student account    |
| PUT    | '/users/student/:id' | Teacher | Update a student account    |
| DELETE | '/users/student/:id' | Teacher | Delete a student account    |
...

## PATHS ENDPOINTS

| METHOD | URL               | AUTH | FUNCTION                          |
|--------|-------------------|------|-----------------------------------|
...

## STAGES ENDPOINTS

| METHOD | URL                   | AUTH | FUNCTION                                 |
|--------|-----------------------|------|------------------------------------------|
...

## LESSON ENDPOINTS

| METHOD | URL            | AUTH    | FUNCTION                   |
|--------|----------------|---------|----------------------------|
| GET    | '/lessons'     | YES     | List all lessons           |
| GET    | '/lessons/:id' | YES     | Get a lessons              |
| POST   | '/lessons'     | Teacher | Create new lesson          |
...

## QUESTIONS ENDPOINTS

| METHOD | URL                          | AUTH    | FUNCTION                              |
|--------|------------------------------|---------|---------------------------------------|
| GET    | 'lessons/:lessonId/quiz'     | YES     | Lists all questions of a lesson       |
| GET    | 'lessons/:lessonId/quiz/:id' | YES     | Gets a question                       |
| POST   | 'lessons/:lessonId/quiz'     | Teacher | Creates a question                    |
...
