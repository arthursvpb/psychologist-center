#

<h1 align="center">Psychologist Center</h1>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-running">Running</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <!-- <a href="#-testing">Testing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;   -->
  <a href="#-license">License</a>
</p>

<p align="center">
  <a href="#-license">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=4a79a5&labelColor=000000">
  </a>
</p>

<!-- <p align="center">
  <img alt="" src=".github/preview.png" width="100%">
</p> -->

## 💻 Project

Psychologist Center is a web system that connects psychologists with their patients.

## ✨ Technologies

This project was built using the following technologies:

### Backend

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)

### Frontend

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [SASS](https://sass-lang.com/)

## ▶️ Running

It is necessary having Git, Node 18.x, Yarn, Docker and Docker Compose.

1. Clone this project

```sh
git clone https://github.com/arthursvpb/psychologist-center.git
```

<!-- Create `.env` file using `.env.example` model (you can copy `.env.example` file and change it's name to `.env`). -->

2. Start the back-end in `api/` folder using the command:

```sh
npm i # install all dependencies
docker-compose up # start server and database instance
```

3. Start the front-end in `web/` folder using the command:

```sh
yarn # install all dependencies
yarn dev # start application
```

4. Server is running on `http://localhost:5173/`

<!-- ## ✔️ Testing

Run the command `yarn test` on both `backend/` and `web/` folder to run tests. -->

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
