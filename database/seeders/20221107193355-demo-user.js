'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        firstName: "Linus",
        lastName: "Torvalds",
        email: "theboss@linux.com",
        password: "$2a$10$.GODAzri84iIHLgi/8Kvgu2FN8nwKTGRx8IHo6vvmtnxpsBcmvjSm",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 2,
        firstName: "Elon",
        lastName: "Musk",
        email: "thebiggestboss@tesla.com",
        password: "$2a$10$rKWpJwRqHnYgJIA3020gi.L347lPtqAarwlAVa7qgWVOqW/99Zjbu",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 3,
        firstName: "Mark",
        lastName: "Zuckerberg",
        email: "thelittlegenius@facebook.com",
        password: "$2a$10$zoI.8PxRa0jHBwPJWwIGYujPIrzF3nwzXy6CenDY5aK9OWElDzt92",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 4,
        firstName: "Johnny",
        lastName: "Depp",
        email: "jacksparrow@gmail.com",
        password: "$2a$10$eVPYbslEgaS.W93HP3wyMeJ7I0TFEB40NNfQkncqrBrNliEMlIm0e",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 5,
        firstName: "Jeff",
        lastName: "Bezos",
        email: "imbetterthanelon@amazon.com",
        password: "$2a$10$P2YvJIWaH8YgQnWdDBOR5u7DhwBLTwe7IqCymB5giXTdzWlS4.4VS",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 6,
        firstName: "Joanne",
        lastName: "Rowling",
        email: "jkrowling@yahoo.com",
        password: "$2a$10$3Bo4tRGQ3sJ4nV3RDhTO5..uffBJfudBU3qSp2hIEiMg9KHnFzIVa",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 7,
        firstName: "Bartole",
        lastName: "Narfendez",
        email: "elpresi@yahoo.com",
        password: "$2a$10$oknMQit.ldi1Du20YPnmrekdxDezMcN6WDia6KFnHgaoWs2qSVMCK",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 8,
        firstName: "ObiWan",
        lastName: "Kenobi",
        email: "theteacher@tomorrow.com",
        password: "$2a$10$f1k4TjZpJC64gSjPj8h/GeBVYFzfrU0mbA.DeyEaqFCTUeDqdRl3K",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 9,
        firstName: "Donald",
        lastName: "Trump",
        email: "donaldt@hotmail.com",
        password: "$2a$10$ZRZ4jFJ8X8ZArf45XP86QOqznP1jOwxIUj2L4PffLBbxDPw9pedjq",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 10,
        firstName: "Stephen",
        lastName: "King",
        email: "theking@gmail.com",
        password: "$2a$10$95BDwEF405RQHqQI6ZoTAO3HbKv/yuoZ4TWcMQ8da9FD/0uUIGbse",
        avatar: "default.png",
        roleId: 2
      },
      {
        id: 11,
        firstName: "Margaret",
        lastName: "Hamilton",
        email: "mhamilton@hotmail.com",
        password: "$2a$10$NxS3dlPT.4s6BiBmQGnisOsXz3uuuBbDm62uRzSh4d1Lj8sK/fIyO",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 12,
        firstName: "Donald",
        lastName: "Knuth",
        email: "donald.knuth@yahoo.com",
        password: "$2a$10$6IRxaAIazGbTLcYkE1XDK.8Sv4mL2G5z8uIiyqdS6gpPutP20Ljju",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 13,
        firstName: "Ken",
        lastName: "Thompson",
        email: "thompsonken@yahoo.com",
        password: "$2a$10$/EsZoX4XhKdspdZxYI4GxOdeGn3m8pIJdD8CkPGkly3fNUV5IuxWa",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 14,
        firstName: "Richard",
        lastName: "Stallman",
        email: "stallman.gnu@hotmail.com",
        password: "$2a$10$zSDPfN0vRpWZAzuPSAKNWepLkBdN3HkVpDqCvt.uVmixD02Ic5LQq",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 15,
        firstName: "Anders",
        lastName: "Hejisberg",
        email: "anders.hejisberg@gmail.com",
        password: "$2a$10$TZ6NAVWMwixPwnOvVZon0udrAOa9LCnRSe0b6RdCYUtBiA18XjGjm",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 16,
        firstName: "Jeff",
        lastName: "Dean",
        email: "jeffdean@gmail.com",
        password: "$2a$10$3RlTeXoXHTP3eLuvg.XwiOvNwGZuSQSnV5CQrIFxqTO5R40RmJIXK",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 17,
        firstName: "John",
        lastName: "Carmack",
        email: "carmack.john@hotmail.com",
        password: "$2a$10$s6rgTMLL8jkgQTfpFvdhjuLMQAvyzhXdQrSVL1m.SqbahKkhZ8iNO",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 18,
        firstName: "Jon",
        lastName: "Skeet",
        email: "jon.skeet@yahoo.com",
        password: "$2a$10$BRTgwuMWMqg/8SxVfxOiZ.NhIzF/LOX5K/PewzMvsNyG7/NkNl/kO",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 19,
        firstName: "Petr",
        lastName: "Mitrechev",
        email: "pet.mitrechev@gmail.com",
        password: "$2a$10$CEoQjUuosdOc7jGjhyflGeElc6GVhxvgj63VK8FhaVlsiFyDtbQta",
        avatar: "default.png",
        roleId: 1
      },
      {
        id: 20,
        firstName: "Gennady",
        lastName: "Korotkevich",
        email: "genna.korot@gmail.com",
        password: "$2a$10$WniL5QuYISMzfStac1WRQezmXFdG6CfkmrG.WQNJduKnU8xEvM6JS",
        avatar: "default.png",
        roleId: 1
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
