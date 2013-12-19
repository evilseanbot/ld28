function Update() {
	if (Input.GetKey(KeyCode.RightArrow)) {
	      GetComponent("Possessor").possess(new Vector2(4, 0));
//        anim = GetComponent(Animator);
//        anim.SetBool("isPosessing", true);
	}
	if (Input.GetKey(KeyCode.LeftArrow)) { 
	      GetComponent("Possessor").unpossess(new Vector2(0, 0));
//        anim = GetComponent(Animator);
//        anim.SetBool("isPosessing", false);
	}	
}