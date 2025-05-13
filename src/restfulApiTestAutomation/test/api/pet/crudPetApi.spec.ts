import { test, expect } from "@playwright/test";
import { petTestData } from "../../../data/petData";

const baseUrl = "http://localhost:8080/api/v3";
const petId = petTestData.newPet.id;

test.describe.configure({ mode: "serial" });

test("Create - POST /pet", async ({ request }) => {
  const response = await request.post(`${baseUrl}/pet`, {
    data: petTestData.newPet,
  });
  expect(response.status()).toBe(200);
});

test("Read - GET /pet/{id}", async ({ request }) => {
  const response = await request.get(`${baseUrl}/pet/${petId}`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.name).toBe(petTestData.newPet.name);
});

test("Update - PUT /pet", async ({ request }) => {
  const response = await request.put(`${baseUrl}/pet`, {
    data: petTestData.updatedPet,
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.status).toBe(petTestData.updatedPet.status);
});

test("Delete - DELETE /pet/{id}", async ({ request }) => {
  const response = await request.delete(`${baseUrl}/pet/${petId}`);
  expect(response.status()).toBe(200);
  const body = await response.text()
  console.log(body)
  expect(body).toBe("Pet deleted")
});

test("Read after Delete - GET /pet/{id}", async ({ request }) => {
  const response = await request.get(`${baseUrl}/pet/${petId}`);
  expect(response.status()).toBe(404);
});


