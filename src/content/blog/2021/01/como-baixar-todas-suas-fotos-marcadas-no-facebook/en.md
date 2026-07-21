---
title: How to download all your tagged photos from Facebook
description: "Facebook has been falling out of favor for a while. So recently I
  thought about backing up all my photos, until I ran into a problem: How to
  download photos where I'm tagged?"
date: 2021-01-05T19:06:13.000Z
lang: en
translationKey: como-baixar-todas-suas-fotos-marcadas-no-facebook
slug: how-to-download-all-your-tagged-pics-on-facebook
category: technology
tags: []
wpId: 11821
canonicalPath: /en/technology/how-to-download-all-your-tagged-pics-on-facebook/
needsReview: false
updated: 2021-12-12T11:17:18.000Z
---

Facebook has been falling out of favor for a while. So recently I thought about backing up all my photos, until I ran into a problem: How to download the photos I've been tagged with? 

Facebook now allows you to download all data provided to it, photos, likes, posts, contacts and more, but it doesn't offer the option to download your tagged/tagged photos by friends.

I found a solution, relatively simple, but you will need to have Python 2 installed to run a script:

1\. Download the Python script: [https://github.com/mgjohnston/fmpd](https://github.com/mgjohnston/fmpd)

two. Go to the "Photos with you" page and scroll to the bottom of it- [https://www.facebook.com/me/photos](https://www.facebook.com/me/photos)

3\. Open Google Chrome Inspect ( `ctrl + shift + i` ), ignore the security warning and run the following code:

for (link of document.getElementsByTagName('a')) { if (!link.href.includes("?fbid=")) continue; console.log(new URL(link.href).searchParams.get("fbid")); }

Now you need to copy all generated URLs and save in a file called list.txt. Don't forget to clean the file and leave only the FBIDs of the photos.

4\. We will now need Facebook cookies for the script to work and access the photos to download to your computer. I recommend you use the extension [cookies.txt for Chrome](https://chrome.google.com/webstore/detail/cookiestxt/njabckikapfpffapmjgojcnbfjonfjfg) and save the file as "cookies.txt" in the same folder where you downloaded the script.

5\. Use Python 2 to run the script and download the photos.

python download.py
