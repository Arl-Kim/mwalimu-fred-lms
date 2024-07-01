"use strict"

new window.IntaSend({
publicAPIKey: "ISPubKey_live_a9fbbbb9-38ce-4309-99cc-4866f10b5122",
live: false //set to true when going live
})
.on("COMPLETE", (results) => {console.log("Do something on success", results)})
.on("FAILED", (results) => {console.log("Do something on failure", results)})
.on("IN-PROGRESS", (results) => {console.log("Payment in progress status", results)})