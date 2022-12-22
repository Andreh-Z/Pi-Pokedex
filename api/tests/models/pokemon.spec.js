const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));

    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "Pikachu" });
      });
    });

    describe("vida", () => {
      it("should throw an error if vida is null", (done) => {
        Pokemon.create({ name: "Pikachu" })
          .then(() => done(new Error("It requires a valid vida")))
          .catch(() => done());
      });
      it("should work when its a valid vida", () => {
        Pokemon.create({ name: "Pikachu", vida: 100 });
      });
    });

    describe("ataque", () => {
      it("should throw an error if ataque is null", (done) => {
        Pokemon.create({ name: "Pikachu", vida: 100 })
          .then(() => done(new Error("It requires a valid ataque")))
          .catch(() => done());
      });
      it("should work when its a valid ataque", () => {
        Pokemon.create({ name: "Pikachu", vida: 100, ataque: 50 });
      });
    });

    describe("defensa", () => {
      it("should throw an error if defensa is null", (done) => {
        Pokemon.create({ name: "Pikachu", vida: 100, ataque: 50 })
          .then(() => done(new Error("It requires a valid defensa")))
          .catch(() => done());
      });
      it("should work when its a valid defensa", () => {
        Pokemon.create({ name: "Pikachu", vida: 100, ataque: 50, defensa: 40 });
      });
    });

    describe("velocidad", () => {
      it("should throw an error if velocidad is null", (done) => {
        Pokemon.create({ name: "Pikachu", vida: 100, ataque: 50, defensa: 40 })
          .then(() => done(new Error("It requires a valid velocidad")))
          .catch(() => done());
      });
      it("should work when its a valid velocidad", () => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
        });
      });
    });

    describe("altura", () => {
      it("should throw an error if altura is null", (done) => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
        })
          .then(() => done(new Error("It requires a valid altura")))
          .catch(() => done());
      });
      it("should work when its a valid altura", () => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
          altura: 2,
        });
      });
    });

    describe("peso", () => {
      it("should throw an error if peso is null", (done) => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
          altura: 2,
        })
          .then(() => done(new Error("It requires a valid peso")))
          .catch(() => done());
      });
      it("should work when its a valid peso", () => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
          altura: 2,
          peso: 6,
        });
      });
    });

    describe("createOnDataBase", () => {
      it("should throw an error if createOnDataBase is null", (done) => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
          altura: 2,
          peso: 6,
        })
          .then(() => done(new Error("It requires a valid createOnDataBase")))
          .catch(() => done());
      });
      it("should work when its a valid createOnDataBase", () => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
          altura: 2,
          peso: 6,
          createOnDataBase: false,
        });
      });
    });

    describe("image", () => {
      it("should work when image is null", () => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
          altura: 2,
          peso: 6,
          createOnDataBase: false,
        });
      });
      it("should work when its a valid image", () => {
        Pokemon.create({
          name: "Pikachu",
          vida: 100,
          ataque: 50,
          defensa: 40,
          velocidad: 60,
          altura: 2,
          peso: 6,
          createOnDataBase: false,
          image: "http://example.com/pikachu.jpg",
        });
      });
    });
  });
});
