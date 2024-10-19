---
layout: t1
title: Website
ogd: A very cool personal website that belongs to a cockroach that learned how to type
propd: A very cool personal website that belongs to a cockroach that learned how to type
---

# !!! greetings !!!
# !! users !!
---

***click the image below to enter the website!***

[<img src="/_img/1entrance.webp" onclick="this.src = '/_img/1entrance_hover.webp;" onmouseover="this.src = '/_img/1entrance_hover.webp';"  onmouseout="this.src = '/_img/1entrance.webp';" style="width:80%; border-radius:15px; border:2px solid var(--brdr);">](/home)

## Some Extra Stuff
<div class="bx1">
  <div class="crnlft">
Have a button that I made:
<br><br>
<img class="bton" src="/_img/1button.webp">
<br><br>
<textarea class="copyButton"><a href="https://mechagic.lexiqqq.com/" target="_blank"><img src="https://i.ibb.co/wyKpKxK/1button.png"></a></textarea>
</div>
 <hr class="vr">
<div class="crnrht">
    Sign my guestbook!

[<img src="/_img/1guestbook.webp" style="width:50%; border-radius:15px; border:2px solid var(--brdr);">](/guestbook)

  </div>
</div>

## My Friendos

A buncha people I met on the `r/neocities discord server`

[<img class="bton" style="image-rendering: smooth;" src="https://xobyte.org/files/poyo-reporter.png">](https://reporter.poyo.study/) [<img class="bton" src="https://april.lexiqqq.com/buttons/button.webp">](https://april.lexiqqq.com/) [<img class="bton" src="https://xobyte.org/files/button.gif">](https://xobyte.org/) [<img class="bton" src="https://moosyu.github.io/assets/swirlCatppuccin.gif">](https://moosyu.github.io/)

## Microblog
code taken from [bechnokid <i class="ph ph-link"></i>](https://bechnokid.neocities.org/resources/tut_statuscafefeed)

<div id='feed-reader'></div>

<script>
  const feedURL = 'https://status.cafe/users/mechagic.atom';
  fetch(feedURL).then(response =>response.text()).then(str =>new window.DOMParser().parseFromString(str, "text/xml")).then(data =>{
    const entries = data.querySelectorAll("entry");
    let html = ``;
    let title,
    content,
    dateString = ``;
    entries.forEach(el =>{
      title = el.querySelector("title").innerHTML.slice(0, 11).trim();
      content = el.querySelector("content").textContent.trim();
      dateString = el.querySelector("published").innerHTML.slice(0, 10);
      html += ` 
      <p> $ {title} - $ {dateString}<p> 
      <p> $ {content} </p>`;});
    let html2 = ``;for (i = 0; i < 15; i++) {title = entries[i].querySelector("title").innerHTML.slice(0, 12).trim();content = entries[i].querySelector("content").textContent.trim();dateString = entries[i].querySelector("published").innerHTML.slice(0,10);html2 += `<p>${title} - ${dateString}<p><p>${content}</p>  <hr class="th">`;
    }
    html2 += ` <p> <a href='https://status.cafe/users/mechagic'> See more at StatusCafe <i class="ph ph-link"></i></a></p> `; document.getElementById("feed-reader").innerHTML = html; document.getElementById("feed-reader").innerHTML = html2;
  })
</script>

## Webrings

<div class="bx2">
                    <div style="width: fit-content; margin: auto;" id='furryring'>
                        <script type="text/javascript" src="https://furryring.neocities.org/onionring-variables.js"></script>
                        <script type="text/javascript" src="https://furryring.neocities.org/onionring-widget.js"></script>
                    </div>
                    <div id='xenicRing'>
                        <script type="text/javascript" src="https://xenics.neocities.org/onionring-variables.js"></script>
                        <script type="text/javascript" src="https://xenics.neocities.org/onionring-widget.js"></script>
                        <link rel="stylesheet" href="https://xenics.neocities.org/onionring.css">
                    </div>
                    <script src="https://webcatz.neocities.org/beepbox-webring/ring.js"></script>
                    <!--START OF SELF INSERT WEBRING-->
                    <div id="selfinsertwebring">
                        <script src="/_assets/showWebring.js"></script>
                    </div>
                    <!--END OF SELF INSERT WEBRING-->
</div>