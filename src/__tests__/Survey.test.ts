import request from "supertest";
import createConnection from "../database";
import { app } from "../app";
import { getConnection } from "typeorm";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async ()=>{
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new survey", async () => {
    const response = await request(app).post("/surveys").send({
      title: "Title Example",
      description: "Description Example"
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to get all survey", async () => {
    await request(app).post("/surveys").send({
      title: "Title Example",
      description: "Description Example"
    });

    const response = await request(app).get("/surveys");

    expect(response.status).toBe(200);
  });
});
