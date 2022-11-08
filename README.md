# Backend Node Template

## ✅ Primero lo primero: instalar las dependencias iniciales del proyecto antes de trabajar:

```
npm install
```

## 🚩 Recomendaciones:

Utilizar la versión de Node v14.x

## 💡 El proyecto utliza Sequelize como ORM. Comandos utiles del CLI:

### Como generar un modelo desde cero

```
npx sequelize model:generate --name Ejemplo --attributes ejemplo:string
```

### Crear la base de datos

```
npx sequelize db:create
```

### Migrar modelos creados previamente

```
npx sequelize db:migrate
```

### Borrar la base de datos que creamos

```
npx sequelize db:drop
```

## 🏗 Algunos datos del proyecto:

- La estructura de carpetas es del patron MVC
- Las respuestas positivas las devuelve como un objecto. Las negativas las gestiona como un HTML
- En el proyecto encontrarán un ejemplo de como se implementa el flujo de información dentro de la app.
- Para el flujo de trabajo utilizaremos Gitflow. Para el mismo deberan crear una rama con el numero de tarjeta con el que esten trabajando

![image](https://user-images.githubusercontent.com/79473217/193649836-2720c8f4-a038-4014-b9a5-c515a9aee273.png)

- Cuando el trabajo este terminado, se debe generar el "Pull Request" o PR como le solemos llamar. El proyecto ya cuenta con un template de PR, por lo que ustedes solo tendran que completar con los datos que les indica el template. Esta seria una imagen de ejemplo de un PR con su evidencia en caso de falla y su caso de éxito.

![image](https://user-images.githubusercontent.com/79473217/193650283-f9d52ece-3548-4a27-8cbf-63fc9fcf72e2.png)

- Las respuestas positivas se gestionan con el helper enpodintResponse, y los negativos con createHtppError de la libreria http-errors.
  Ejemplo de satisfactoria

Ejemplo de respuesta negativa:
![image](https://user-images.githubusercontent.com/79473217/193651690-f0081ce6-9d2e-43ca-9986-bec8a9082d7f.png)

## 🚑 Helpers basicos:

### catchAsync

Es una función para estandarizar la forma en la que se crean los metodos en los controladores. Para ver mas buscar en helpers/catchAsync.js

### endpointResponse:

Estructura las respuestas positivas de toda la app. Dentro del archivo helpers/success.js podran ver que parametros le pueden pasar.

### ErrorObject:

Un objecto de error, el cual puede recibir varios atributos (pueden verlo en helpers/error.js)
El mismo es una extensión de el objecto Error nativo de JS. Sirve para devolver errores cuando esten por fuera del controlador, y que los errores sean interceptados por el CATCH que tendran en los controllers.

## Seeders:

### Users:

Users:
 - id: 1, firstName: "Linus", lastName: "Torvalds", email: "theboss@linux.com", password: "WindowsTrash", avatar: "default.png", roleId: 2
 - id: 2, firstName: "Elon", lastName: "Musk", email: "thebiggestboss@tesla.com", password: "DogueToTheMoon", avatar: "default.png", roleId: 2
 - id: 3, firstName: "Mark", lastName: "Zuckerberg", email: "thelittlegenius@facebook.com", password: "FacebookForEver", avatar: "default.png", roleId: 2
 - id: 4, firstName: "Johnny", lastName: "Depp", email: "jacksparrow@gmail.com", password: "ByeForeverAmber", avatar: "default.png", roleId: 2
 - id: 5, firstName: "Jeff", lastName: "Bezos", email: "imbetterthanelon@amazon.com", password: "password1234", avatar: "default.png", roleId: 2
 - id: 6, firstName: "Joanne", lastName: "Rowling", email: "jkrowling@yahoo.com", password: "WingardiumLeviosa", avatar: "default.png", roleId: 2
 - id: 7, firstName: "Bartole", lastName: "Narfendez", email: "elpresi@yahoo.com", password: "CarmiFuePeor", avatar: "default.png", roleId: 2
 - id: 8, firstName: "ObiWan", lastName: "Kenobi", email: "theteacher@tomorrow.com", password: "MayTheForceBeWithYou", avatar: "default.png", roleId: 2
 - id: 9, firstName: "Donald", lastName: "Trump", email: "donaldt@hotmail.com", password: "ImTheBest2017", avatar: "default.png", roleId: 2
 - id: 10, firstName: "Stephen", lastName: "King", email: "theking@gmail.com", password: "TheMatteIsFantastic", avatar: "default.png", roleId: 2

Administrators:
- id: 11, firstName: "Margaret", lastName: "Hamilton", email: "mhamilton@hotmail.com", password: "qwert1234", avatar: "default.png", roleId: 1
- id: 12, firstName: "Donald", lastName: "Knuth", email: "donald.knuth@yahoo.com", password: "onlyadmin", avatar: "default.png", roleId: 1
- id: 13, firstName: "Ken", lastName: "Thompson", email: "thompsonken@yahoo.com", password: "bisthebest", avatar: "default.png", roleId: 1
- id: 14, firstName: "Richard", lastName: "Stallman", email: "stallman.gnu@hotmail.com", password: "TheWorldsIsFreeSoftware", avatar: "default.png", roleId: 1
- id: 15, firstName: "Anders", lastName: "Hejisberg", email: "anders.hejisberg@gmail.com", password: "PascalsCompiler", avatar: "default.png", roleId: 1
- id: 16, firstName: "Jeff", lastName: "Dean", email: "jeffdean@gmail.com", password: "GooglesStepfather", avatar: "default.png", roleId: 1
- id: 17, firstName: "John", lastName: "Carmack", email: "carmack.john@hotmail.com", password: "ImaFatherofDoom", avatar: "default.png", roleId: 1
- id: 18, firstName: "Jon", lastName: "Skeet", email: "jon.skeet@yahoo.com", password: "AnswerMachineofStack", avatar: "default.png", roleId: 1
- id: 19, firstName: "Petr", lastName: "Mitrechev", email: "pet.mitrechev@gmail.com", password: "MastermingoftheAlgorithm", avatar: "default.png", roleId: 1
- id: 20, firstName: "Gennady", lastName: "Korotkevich", email: "genna.korot@gmail.com", password: "LastnameUnpronounceable", avatar: "default.png", roleId: 1

