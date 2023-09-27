---

<a name="menu"></a>

<p align="center">
<a href="README.md">Home</a>
&nbsp;&bull;&nbsp;
<b>Installation</b>
&nbsp;&bull;&nbsp;
<a href="how-to-run.md">How to run</a>
&nbsp;&bull;&nbsp;
<a href="features.md">Features</a>

<p align="center">
<a href="#wsl">WSL</a>
&nbsp;&bull;&nbsp;
<a href="#docker">Docker</a>
&nbsp;&bull;&nbsp;
<a href="#docker-compose">Docker Compose</a>
&nbsp;&bull;&nbsp;
<a href="#makefile">Makefile</a>
</p>

</p>

---

# Installation

[![WSL](https://img.shields.io/badge/wsl-20232A.svg?style=for-the-badge&logo=windows-terminal&logoColor=white)](https://learn.microsoft.com/en-us/windows/wsl/install)
[![Docker](https://img.shields.io/badge/docker-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Makefile](https://img.shields.io/badge/Make-FF1E0D.svg?style=for-the-badge&logo=gnu&logoColor=white)](https://www.gnu.org/software/make/manual/make.html)


## WSL (for Windows only)

WSL is a way of executing Linux commands within the Windows operating system. It exists since Windows 10 and can be activated, making it possible to choose a Linux distribution to use within Windows. This functionality is mainly useful in the development area, where it is often necessary to execute commands that only exist in Linux operating systems.

If the project is created on Windows, it is necessary to create WSL to install all other tools used for the project.

https://learn.microsoft.com/en-us/windows/wsl/install


<a href="#menu">Back to top</a>


## Docker

Docker is a tool for creating isolated environments that are easy to activate and deactivate. It is mainly used for two purposes:

- Have an environment ready to upload a project online to make it available to clients;
- Create development environments quickly without the need to install different tools on the developer's computer.

The second use was applied in this project.

To make this isolated environment possible, an operating system image is created and from this image is created a machine, as known as a container.

In the project, three containers are created: one for the database, another for the backend and a third for the frontend.

Download Docker following the instructions on the website and install:

https://docs.docker.com/engine/install/ubuntu/


<a href="#menu">Back to top</a>


## Docker Compose

Docker Compose is used to manage containers. This tool allows you to create and organize containers, in order to facilitate initialization, communication and removal of the set of containers.

To install Docker Compose, follow the instructions in this article:

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04


<a href="#menu">Back to top</a>


## Makefile

Make is a way created to execute commands in a simplified way. During development it may be necessary to execute several sequences of complex commands for each task and people often write these sequences of commands in text files and pass them on to the next people who join the project.

Instead, it is possible to place these commands inside a file called Makefile and each sequence receives a name to be used later. This way it becomes possible to execute these commands in a simplified way, executing `make` in the terminal followed by the name given to the sequence of commands within the file.

On Linux operating systems, Make commands usually work natively. On Windows, one of the possible ways to use Make is to install WSL.


<a href="#menu">Back to top</a>
