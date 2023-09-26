---

<a name="menu"></a>
<p align="center">
<a href="README.md">Home</a>
&nbsp;&bull;&nbsp;
<a href="installation.md">Installation</a>
&nbsp;&bull;&nbsp;
<a href="how-to-run.md">How to run</a>
&nbsp;&bull;&nbsp;
<a href="features.md">Features</a>
</p>

---

# How to run

First, you need to set the environment variable files. Then you will be able to run the project using Make commands.


## Backend

[![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.docker.com/)
[![Docker](https://img.shields.io/badge/docker-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Makefile](https://img.shields.io/badge/Make-FF1E0D.svg?style=for-the-badge&logo=gnu&logoColor=white)](https://www.gnu.org/software/make/manual/make.html)

There is a folder at the root of the project called `env`, with another folder inside called `back`. Inside `back` folder there is a file called `example.env`. Make a copy of it, calling the copy `dev.env`.

Open `dev.env` file. There are some environment variables without value in the file. Each one of them must have a value:

- `JWT_SECRET`: create a random string, any sequence of characters between letters and numbers is enough;
- `API_USERNAME`: username to allow people and services to access the API;
- `API_PASSWORD`: password to allow people and services to access the API;
- `MYSQL_ROOT_PASSWORD`: a password to access the MySQL database as root;
- `MYSQL_DATABASE`: name of the database inside MySQL;
- `MYSQL_USER`: username for the API to access MySQL database;
- `MYSQL_PASSWORD`: password for the API to access MySQL database;


<a href="#menu">Back to top</a>


## Frontend

[![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/docker-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Makefile](https://img.shields.io/badge/Make-FF1E0D.svg?style=for-the-badge&logo=gnu&logoColor=white)](https://www.gnu.org/software/make/manual/make.html)

There is a folder at the root of the project called `FRONT`. Inside `FRONT` folder there is a file called `example.env`. Make a copy of it, calling the copy `.env`.

Open `.env` file. There are two environment variables without value in the file. They should have same value that was already set in the `env/back/dev.env` file:

- `REACT_APP_API_USERNAME`: username to people and services to access the API;
- `REACT_APP_API_PASSWORD`: password to people and services to access the API;


<a href="#menu">Back to top</a>


## Running the machines

[![Docker](https://img.shields.io/badge/docker-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Makefile](https://img.shields.io/badge/Make-FF1E0D.svg?style=for-the-badge&logo=gnu&logoColor=white)](https://www.gnu.org/software/make/manual/make.html)

### `make start`

<!-- Explicar que faz o build das imagens e roda as três máquinas - mysql, back e front -->


<a href="#menu">Back to top</a>


### `make finish`

<!-- Explicar que faz pára as três máquinas - mysql, back e front -, remove os containers e remove as imagens -->


<a href="#menu">Back to top</a>


### `make api-print-logs`

<!-- Explicar que mostra os logs da máquina de api -->


<a href="#menu">Back to top</a>


### `make front-print-logs`

<!-- Explicar que mostra os logs da máquina do front -->


<a href="#menu">Back to top</a>
