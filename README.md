# youtube-app

Youtube App with youtube-v3-alternative API built with ReactJS, Redux, Redux Toolkit, React Router DOM, Docker, CircleCI, and deployed on Netlify

With the YouTube app, you can easily search for and watch all your favorite videos without any annoying ads interrupting your viewing experience

### build & Deploy with

- React
- React Router Dom
- React Redux & toolkit
- Docker
- CircleCi
- Netlify

[View Demo](https://shatot-youtube.netlify.app/)

## Description

With the YouTube app, you can easily search for and watch all your favorite videos without any annoying ads interrupting your viewing experience. Whether you're looking for music videos, tutorials, vlogs, or funny clips, the YouTube app has it all right at your fingertips.
The app also allows you to easily share videos with friends and family through social media or messaging platforms. Stay entertained and informed with the YouTube app wherever you go

## Build and Start Project in Local Machine

Clone the project

```bash
  git clone https://github.com/ahmedsamyop/youtube-app.git
```

To Install all dependencies, run the following command

```bash
  npm install
```

To build, run the following command

```bash
  npm run build
```

To Test, run the following command

```bash
  npm run test
```

To Start developing , run the following command

```bash
  npm start
```

## Build and Start Project in Docker

Clone the project

```bash
  git clone https://github.com/ahmedsamyop/youtube-app.git
```

To Start developing , run the following command

```bash
  docker compose up -d --build
```

To Stop project , run the following command

```bash
  docker compose down
```

## Environment Variables

- Create a file `.env` to add environment variables
- To run this project, you will need to add the following environment variables to your .env file

```bash
REACT_APP_API_KEY="Your Api"
REACT_APP_API_HOST="Your Api"
```

## Get Your API

#### RapidAPI

RapidAPI provides developers with a powerful and straightforward API that makes it easy to create applications

- Create Account
- Subscribe youtube-v3-alternative

## Deployment

- CI / CD CircleCi Deploying to Netlify [@blog](https://circleci.com/blog/react-netlify-deploy/)

- To deploy this project run

```bash
  npm run deploy
```
