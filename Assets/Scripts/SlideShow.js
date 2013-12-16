var imageCounter = 0;
var images: Sprite[];
var isFading = true;
var isFadingIn = false;
var fadeValue: float;
var fadeTime: float = 2;
var fadeTimeElapsed: float = 0;
var switchingNewImage: boolean = false;

function Awake() {
    startFadeIn();
}

function Update() {
    if (isFading) {
        fadeTimeElapsed += Time.deltaTime;
        
        if (fadeTimeElapsed <= fadeTime) {
            if (isFadingIn) {
                fadeValue = 0 + (fadeTimeElapsed / fadeTime);
            } else {
                fadeValue = 1 - (fadeTimeElapsed / fadeTime);
            }
            
            var sprite = GetComponent("SpriteRenderer");
            sprite.color = Color(1, 1, 1, fadeValue);
        } else {
            if (switchingNewImage) {
                if (isFadingIn) {
                    isFadingIn = false;
                    isFading = false;
                } else {
                    isFadingIn = true;
                    GetComponent("SpriteRenderer").sprite = images[imageCounter];                    
                    startFadeIn();
                }
            } else {
                isFading = false;
                isFadingIn = false;
            }
        }        
    }
}

function OnMouseDown() {
    if (!isFading) {
        imageCounter++;
        if (imageCounter == images.length) {
            Application.LoadLevel("Overview");
        } else {
            fadeSwitchNewImage();
        }
        //GetComponent("SpriteRenderer").sprite = images[imageCounter];
    }
}

function startFadeIn() {
    isFading = true;
    isFadingIn = true;   
    fadeTimeElapsed = 0;
}

function startFadeOut() {
    isFading = true;
    isFadingIn = false;   
    fadeTimeElapsed = 0;
}



function fadeSwitchNewImage() {
    switchingNewImage = true;
    startFadeOut();
}