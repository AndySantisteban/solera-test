# SOLERA - TEST

Simple CRUD for manage services.

### Architecture

I decided not to complicate the architecture even though I know that clean code and scalability will be analyzed, so I also prioritized ease of use because it is a simple crud.

Still I thought about at least structuring it a little more, because typescript minimo I must have the models of what will arrive from the server.

> The best code is the one that is not written

Folders:

📂 UI: Here I put that React code that can be reused, I included maybe the most important like the charts, the input and the navigation button that serves for filtering. Maybe you don't see it as components and it looks better as UI.

📂 Models: Es una carpeta donde pondré los tipos de datos que recibiré dentro del servicio, decidí apartarlo para poder saber donde tengo que modificar todos mi tipos recibidos además de si en un futuro se desea poner algunos intereceptores, será mucho mas sencillo de llamar esa interfaz recibida.

📂 Services: here I make the call to the APIs (In this case a simple JSON file), it was not necessary to implement other methods, because a backend was not yet created, but here could go the Use Cases, other than that I decided to do it with the fetch api to avoid more unnecessary dependencies.

=====================

### Developed with Vite.js, Yarn, TypeScript and Bootstrap

If you do not have yarn installed, you can do it with the command

```bash
$ npm install -g yarn
```

Install dependencies

```bash
$ yarn
```

Execute project

```bash
$ yarn dev
```

Build project

```bash
$ yarn build
```
