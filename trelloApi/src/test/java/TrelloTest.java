import io.restassured.http.ContentType;
import io.restassured.response.ValidatableResponse;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import static io.restassured.RestAssured.given;
import static org.hamcrest.core.IsEqual.equalTo;

public class TrelloTest {

    private String propFileName = "config.properties";
    private String host = "";

    private static String DEVKEY = "d5e32667237d74f31d3207305771ed99";
    private static String OAUTHSECRET = "5ec3a6ef3b4985d572df6f43322f2b62822a817d809c05a0c4224900595acf26";
    private static String PERSONALTOKEN = "d1bda81d559106a18ce238c5a31c6fe8fce4c1ce56c13f0b8b2c2559670a97a6";

    @Before
    public void setUp() throws IOException {
        // Extends java.util.Hashtable and will allow us to load key/value pairs
        Properties properties = new Properties();
        // Read the config file
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
        // Load key/value pairs
        properties.load(inputStream);
        // Get the host property from the Properties object
        host = properties.getProperty("host");
    }

    @Test
    public void getAllBoards() {
        given().auth().oauth(DEVKEY, OAUTHSECRET, PERSONALTOKEN, "")
                .when().get(host + "/1/members/me/boards")
                .then().statusCode(200);
    }

    @Test
    public void createNewBoard() {
        String boardName = "TestBoard";
        given().auth().oauth(DEVKEY, OAUTHSECRET, PERSONALTOKEN, "")
                .given().contentType(ContentType.JSON).post(host + "/1/boards/?name=" + boardName)
                .then().statusCode(200)
                .and().body("name", equalTo(boardName));
    }

    @Test
    public void createNewList() {
        String boardName = "BoardWithList";
        String listName = "NewList";

        ValidatableResponse response = given().auth().oauth(DEVKEY, OAUTHSECRET, PERSONALTOKEN, "")
                .when().contentType(ContentType.JSON).post(host + "/1/boards/?name=" + boardName)
                .then().statusCode(200)
                .and().body("name", equalTo(boardName));

        JSONObject body = new JSONObject(response.extract().body().asString());
        String boardId = body.getString("id");

        given().auth().oauth(DEVKEY, OAUTHSECRET, PERSONALTOKEN, "")
                .when().contentType(ContentType.JSON).post(host + "/1/lists/?name=" + listName + "&idBoard=" + boardId)
                .then().statusCode(200)
                .and().body("name", equalTo(listName));
    }
}
