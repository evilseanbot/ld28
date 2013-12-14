#pragma strict

var speed = 100;
var maxSpeed = 5;
var jumpSpeed = 200;
var isGrounded = false;

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
	    if (isGrounded) {
    		rigidbody2D.AddForce(Vector2.up * jumpSpeed);
    	}
	}

	if (Input.GetKey(KeyCode.DownArrow)) { 
	    rigidbody2D.AddForce(Vector2.up * -speed);
	}
	
	if (Mathf.Abs(rigidbody2D.velocity.x) > maxSpeed) {
		// ... set the player's velocity to the maxSpeed in the x axis.
		rigidbody2D.velocity = new Vector2(Mathf.Sign(rigidbody2D.velocity.x) * maxSpeed, rigidbody2D.velocity.y);
	}
		
}

function OnCollisionEnter2D ( collision: Collision2D)
{
   Debug.Log("Collision checked!");
   if ( collision.collider.tag == "Ground" )
   {
      isGrounded = true ;
      Debug.Log("Grounded!");
   }
}
 
function OnCollisionExit2D ( collision : Collision2D )
{
   if ( collision.collider.tag == "Ground" )
   {
      isGrounded = false ;
   }
}