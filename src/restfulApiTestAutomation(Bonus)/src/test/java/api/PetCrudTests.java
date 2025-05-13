package api;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class PetCrudTests {

    @BeforeClass
    public void setup() {
        RestAssured.baseURI = "https://petstore.swagger.io/v3";
    }

    @Test(priority = 1)
    public void createPet() {
        String body = """
            {
              "id": 11,
              "name": "Lebron",
              "category": { "id": 1, "name": "Dogs" },
              "photoUrls": ["string"],
              "tags": [{ "id": 0, "name": "string" }],
              "status": "available"
            }
        """;

        given()
            .contentType(ContentType.JSON)
            .body(body)
        .when()
            .post("/pet")
        .then()
            .statusCode(200)
            .body("id", equalTo(11))
            .body("name", equalTo("Lebron"))
            .body("status", equalTo("available"));
    }

    @Test(priority = 2)
    public void getPet() {
        given()
        .when()
            .get("/pet/11")
        .then()
            .statusCode(200)
            .body("id", equalTo(11))
            .body("name", equalTo("Lebron"))
            .body("status", equalTo("available"));
    }

    @Test(priority = 3)
    public void updatePet() {
        String updatedBody = """
            {
              "id": 11,
              "name": "Lebron",
              "category": { "id": 1, "name": "Dogs" },
              "photoUrls": ["string"],
              "tags": [{ "id": 0, "name": "string" }],
              "status": "sold"
            }
        """;

        given()
            .contentType(ContentType.JSON)
            .body(updatedBody)
        .when()
            .put("/pet")
        .then()
            .statusCode(200)
            .body("status", equalTo("sold"));
    }

    @Test(priority = 4)
    public void deletePet() {
        given()
        .when()
            .delete("/pet/11")
        .then()
            .statusCode(200);
    }
}
