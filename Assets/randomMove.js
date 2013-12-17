#pragma strict

function FixedUpdate() {
    if (Random.value > .5) {
        rigidbody2D.AddForce(Vector2.right * 10 * 10 * Random.value);
    } else {
        rigidbody2D.AddForce(Vector2.right * -10 * 10 * Random.value);
    }

    if (Random.value > .5) {
        rigidbody2D.AddForce(Vector2.up *  10 * 10 * Random.value);
    } else {
        rigidbody2D.AddForce(Vector2.up * -10 * 10 * Random.value);
    }
        
    
}