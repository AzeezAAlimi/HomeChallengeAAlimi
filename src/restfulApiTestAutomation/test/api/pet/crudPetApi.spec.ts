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
});

test("Delete - DELETE /pet/{id}", async ({ request }) => {
  const response = await request.delete(`${baseUrl}/pet/${petId}`);
  expect(response.status()).toBe(200);
});

// import { test, expect } from "@playwright/test";

// test("Add a new pet to the store POST/pet", async ({ request }) => {
//   const response = await request.post("http://localhost:8080/api/v3/pet", {
//     data: {
//       id: 10,
//       name: "lebron",
//       category: {
//         id: 1,
//         name: "Dogs",
//       },
//       photoUrls: ["string"],
//       tags: [
//         {
//           id: 0,
//           name: "string",
//         },
//       ],
//       status: "available",
//     },
//   });
//   expect(response.status()).toBe(200);
//   const body = await response.json();
//   expect(body.id).toBe(10);
//   expect(body.name).toBe("lebron");
//   expect(body.status).toBe("available");
// });

// test("Returns a single pet GET/pet/{petId}", async ({ request }) => {
//   const response = await request.get("http://localhost:8080/api/v3/pet/10");
//   const body = await response.json();
//   console.log(body);
// });

// test("Update an existent pet in the store PUT/pet", async ({ request }) => {
//   const response = await request.put("http://localhost:8080/api/v3/pet/10", {
//     data: {
//       id: 10,
//       name: "lebron",
//       category: {
//         id: 1,
//         name: "Dogs",
//       },
//       photoUrls: ["string"],
//       tags: [
//         {
//           id: 0,
//           name: "string",
//         },
//       ],
//       status: "sold",
//     },
//   });
// });

// test("Finds Pets by status GET/pet", async ({ request }) => {
//   const response = await request.get("http://localhost:8080/api/v3/pet/findByStatus?status=sold");
// });

// test("Deletes a pet DELETE/pet/{petId}", async ({ request }) => {
//   const response = await request.delete("http://localhost:8080/api/v3/pet/10")
// });
