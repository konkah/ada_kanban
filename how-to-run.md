---

<a name="menu"></a>

<p align="center">
<a href="README.md">Home</a>
&nbsp;&bull;&nbsp;
<a href="installation.md">Installation</a>
&nbsp;&bull;&nbsp;
<b>How to run</b>
&nbsp;&bull;&nbsp;
<a href="features.md">Features</a>
</p>

<p align="center">
<a href="#backend">Backend</a>
&nbsp;&bull;&nbsp;
<a href="#frontend">Frontend</a>
&nbsp;&bull;&nbsp;
<a href="#running-the-containers">Running the containers</a>
</p>

---

# How to run

First, you need to set the environment variable files. Then you will be able to run the project using Make commands.


## Backend

[![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.docker.com/)

There is a folder at the root of the project called `env`, with another folder inside called `back`. Inside `back` folder there is a file called `example.env`. Make a copy of it, calling the copy `dev.env`.

Open `dev.env` file. There are some environment variables without value in the file. Each one of them must have a value:

- `JWT_SECRET`: create a random string, any sequence of characters between letters and numbers is enough;
- `API_USERNAME`: username to allow people and services to access the API;
- `API_PASSWORD`: password to allow people and services to access the API;
- `MYSQL_ROOT_PASSWORD`: a password to access the MySQL database as root;
- `MYSQL_DATABASE`: name of the database inside MySQL;
- `MYSQL_USER`: username for the API to access MySQL database;
- `MYSQL_PASSWORD`: password for the API to access MySQL database;


<a href="#menu">&#129033; back to top</a>


## Frontend

[![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

There is a folder at the root of the project called `FRONT`. Inside `FRONT` folder there is a file called `example.env`. Make a copy of it, calling the copy `.env`.

Open `.env` file. There are two environment variables without value in the file. They should have same value that was already set in the `env/back/dev.env` file:

- `REACT_APP_API_USERNAME`: username to people and services to access the API;
- `REACT_APP_API_PASSWORD`: password to people and services to access the API;


<a href="#menu">&#129033; back to top</a>


## Running the containers

[![Docker](https://img.shields.io/badge/docker-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Makefile](https://img.shields.io/badge/Make-FF1E0D.svg?style=for-the-badge&logo=gnu&logoColor=white)](https://www.gnu.org/software/make/manual/make.html)


### Initialize project

```bash
make start
```

This command is used to initialize the **database**, **backend** and **frontend** containers.


### Check Backend logs

```bash
make api-print-logs
```

This command displays logs from within the **backend** container. You must have previously run `make start`.


### Check Frontend logs

```bash
make front-print-logs
```

This command displays logs from within the **frontend** container. You must have previously run `make start`.


### Finish and clean project

```bash
make finish
```

This command releases the resources used by the project on your local computer. It is important to run `make finish` at the end of using the project to save computer resources, such as memory, CPU and storage space.


<a href="#menu">&#129033; back to top</a>
