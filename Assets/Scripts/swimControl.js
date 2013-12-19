#pragma strict

var speed = 100;
var maxSpeed = 5;

function Start () {

}

function FixedUpdate () {
	if (Input.GetKey(KeyCode.RightArrow)) { 
        rigidbody2D.AddForce(Vector2.right * speed);	
	}
	
	if (Input.GetKey(KeyCode.LeftArrow)) { 
	    rigidbody2D.AddForce(Vector2.right * -speed);
	}

	if (Input.GetKey(KeyCode.UpArrow)) {
		rigidbody2D.AddForce(Vector2.up * speed);
	}

	if (Input.GetKey(KeyCode.DownArrow)) { 
	    rigidbody2D.AddForce(Vector2.up * -speed);
	}
	
	if (Mathf.Abs(rigidbody2D.velocity.x) > maxSpeed) {
		// ... set the player's velocity to the maxSpeed in the x axis.
		rigidbody2D.velocity = new Vector2(Mathf.Sign(rigidbody2D.velocity.x) * maxSpeed, rigidbody2D.velocity.y);
	}
	
	if (Mathf.Abs(rigidbody2D.velocity.y) > maxSpeed) {
		// ... set the player's velocity to the maxSpeed in the x axis.
		rigidbody2D.velocity = new Vector2(rigidbody2D.velocity.x, Mathf.Sign(rigidbody2D.velocity.y) * maxSpeed);
	}
	
}