var haveSeenADeadBody = false;
var haveWatchedOz = false;
var haveMicrowaved = false;
var scratchNoise : AudioClip;

function crossOff(item) {
    GetComponent("ClickToOpen").open();
    AudioSource.PlayClipAtPoint(scratchNoise, new Vector3 (0, 0, -10));
}