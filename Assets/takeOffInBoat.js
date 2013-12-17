#pragma strict

function OnCollisionEnter2D(other: Collision2D) {
    if (other.gameObject.tag == "swimmer") {
        Application.LoadLevel("credits");
    }
}