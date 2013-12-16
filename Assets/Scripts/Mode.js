var hasIntroMovieBeenWatched: boolean = false;
var gotMPDGIdea: boolean = false;

function Awake() {
    DontDestroyOnLoad (transform.gameObject);

}

function Update() {
    if(GameObject.Find("Slideshow") && hasIntroMovieBeenWatched) {
        Destroy(GameObject.Find("Slideshow"));
        Destroy(GameObject.Find("SlideshowBlack"));        
    }
    
    if (GameObject.Find("MPDG(Clone)") && GameObject.Find("QuirkyWoman")) {
        Destroy(GameObject.Find("QuirkyWoman"));
    }
}