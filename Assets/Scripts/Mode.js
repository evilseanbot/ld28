﻿var hasIntroMovieBeenWatched: boolean = false;

function Awake() {
    DontDestroyOnLoad (transform.gameObject);

}

function Update() {
    if(GameObject.Find("Slideshow") && hasIntroMovieBeenWatched) {
        Destroy(GameObject.Find("Slideshow"));
        Destroy(GameObject.Find("SlideshowBlack"));        
    }
}