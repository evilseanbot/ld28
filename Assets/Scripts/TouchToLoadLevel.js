var levelName: String;

function OnCollisionEnter2D(other: Collision2D) {
    if (other.gameObject.tag == "Player") {
        Application.LoadLevel(levelName);
    }
}