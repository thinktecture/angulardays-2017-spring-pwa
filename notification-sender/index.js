const webpush = require('web-push');

webpush.setGCMAPIKey('<Your API key>');

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
	"endpoint": "https://android.googleapis.com/gcm/send/…",
	"keys": {
		"p256dh": "…",
		"auth":"…"
	}
};

webpush.sendNotification(pushSubscription, '{"notification":{"title":"foobarx","body":"foobario","tag":"foo","icon":"assets/launcher-icon-3x.png"}}')
.catch(err => console.log(err));