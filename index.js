function a(e) {
     e.classList.remove("fa-copy");
     e.classList.add("fa-check")
}







var imagecount = 400;

var backgroundimage = ""

for (var i = 0; i <= 10; i++) {
     imagecount = imagecount + 25
     // let backgroundimage = `https://source.unsplash.com/${imagecount}x${imagecount}/?nature`

     let backgroundimage = `https://picsum.photos/${imagecount}/${imagecount}`

     fetch("https://api.quotable.io/random").then((data) => { return data.json() }).catch((err) => { console.log(err); })
          .then((data) => {
               let quote = data.content
               var quotetag = ""
               if (data.tags[0] == "famous-quotes") {
                    quotetag = "famous quote"
               }
               else {

                    quotetag = data.tags[0] + " quote"
               }

               fetch(`https://en.wikipedia.org/w/rest.php/v1/search/page?q=${data.author}&limit=1`)
                    .then((wdata) => { return wdata.json() }).catch((err) => { console.log(err); })
                    .then((wikidata) => {
                         const author = wikidata.pages[0].title
                         const authorimage = wikidata.pages[0].thumbnail.url
                         var authordescription = ""
                         if (wikidata.pages[0].description == null) {
                              authordescription = "A famous personality"
                         }

                         else {
                              authordescription = wikidata.pages[0].description
                         }


                         const authorinfo = wikidata.pages[0].excerpt




                         var div = document.createElement("div")
                         div.innerHTML = `<div class=\"card\"> <div class=\"header\"> <div class=\"headermain\"> <div class=\"authorimage\"><img src=\"http://${authorimage}" alt=\"\"></div> <div class=\"authornameandknowmore\"> A <span>${quotetag}</span> by <span class=\"headerauthorname\">${author}</span> <br> <span style=\"font-size: 11px;\"> <span>${authordescription}. <br>Know more <a href="https://google.com/search?q=${author}" target="_blank">Google <i style="font-size: 9px" class="fa fa-external-link"></i></a></span> </div> </div> </div> <div class=\"maincontent\"> <img src=\"${backgroundimage}\" height=\"100%\" width=\"100%\" alt=\"\"> <div class=\"quote\"> <span class="innertitle">BY<b>GREATES</b></span><br><br> "${quote}" <br>   <i class="fa   mainquotebutton fa-copy" onclick="navigator.clipboard.writeText('${quote}'); a(this)"></i>   </div> </div> <div class=\"personinfo\"> ${authorinfo}. <a href="https://en.wikipedia.org/wiki/${author}" target="_blank">Wikipedia <i style="font-size: 9px" class="fa fa-external-link"></i></a> </div> <hr> <div class=\"tools\"> <center> <i class=\"fa fa-bullhorn\"></i> <a href=\"https://wa.me/?text=${quote}\"><i class=\"fa whatsappicon fa-whatsapp\" target="_blank"></i></a> <a href=\"https://www.facebook.com/sharer/sharer.php?quote=${quote}" target="_blank"><i class=\"fa facbookicon fa-facebook-f\" ></i></a> <a href=\"https://twitter.com/intent/tweet?text=${quote}\" target="_blank"><i class=\"fa twittericon fa-twitter\" ></i></a> <a href=\"https://www.reddit.com/submit?title=${quote}&url=${window.location.href}\" target="_blank"><i class=\"fa redditicon fa-reddit\" ></i></a>             <a href="https://www.linkedin.com/shareArticle/?url=${window.location.href}" target="_blank" class="fa linkedinicon fa-linkedin"></a><i class="fa linkedicon fa-copy" onclick="navigator.clipboard.writeText('${quote}'); a(this)"></i>                        </center></div></div> <br>`

                         var maincontent = document.getElementById("maincontent")
                         maincontent.append(div)


                    })

          }).catch((err) => { console.log(err); })
}


var secondimagecounter = 400
var numberofloop = 0;






window.onscroll = function (ev) {
     if ((window.scrollY) >= (document.body.scrollHeight) * 0.7 && (window.scrollY) <= (document.body.scrollHeight) * 0.71 || (window.scrollY) > (document.body.scrollHeight) * 0.91) {

          if (secondimagecounter >= 1000) {

               numberofloop++

          }

          secondimagecounter = secondimagecounter + 40

          if (secondimagecounter >= 1000) {
               secondimagecounter = 401 + numberofloop
          }



          console.log(secondimagecounter);

          // let backgroundimage = `https://source.unsplash.com/${imagecount}x${imagecount}/?nature`
          let backgroundimage = `https://picsum.photos/${secondimagecounter}/${secondimagecounter}`




          fetch("https://api.quotable.io/random").then((data) => { return data.json() }).catch((err) => { console.log(err); })
               .then((data) => {
                    const quote = data.content
                    let quotetag = ""
                    if (data.tags[0] == "famous-quotes") {
                         quotetag = "famous quote"
                    }
                    else {

                         quotetag = data.tags[0] + " quote"
                    }

                    fetch(`https://en.wikipedia.org/w/rest.php/v1/search/page?q=${data.author}&limit=1`)
                         .then((wdata) => { return wdata.json() }).catch((err) => { console.log(err); })
                         .then((wikidata) => {
                              const author = wikidata.pages[0].title
                              const authorimage = wikidata.pages[0].thumbnail.url
                              var authordescription = ""
                              if (wikidata.pages[0].description == null) {
                                   authordescription = "A famous personality"
                              }

                              else {
                                   authordescription = wikidata.pages[0].description
                              }


                              const authorinfo = wikidata.pages[0].excerpt




                              var div = document.createElement("div")
                              div.innerHTML = `<div class=\"card\"> <div class=\"header\"> <div class=\"headermain\"> <div class=\"authorimage\"><img src=\"http://${authorimage}" alt=\"\"></div> <div class=\"authornameandknowmore\"> A <span>${quotetag}</span> by <span class=\"headerauthorname\">${author}</span> <br> <span style=\"font-size: 11px;\"> <span>${authordescription}. <br>Know more <a href="https://google.com/search?q=${author}" target="_blank">Google <i style="font-size: 9px" class="fa fa-external-link"></i></a></span> </div> </div> </div> <div class=\"maincontent\"> <img src=\"${backgroundimage}\" height=\"100%\" width=\"100%\" alt=\"\"> <div class=\"quote\"> <span class="innertitle">BY<b>GREATES</b></span><br><br> "${quote}" <br><i class="fa  mainquotebutton fa-copy" onclick="navigator.clipboard.writeText('${quote}'); a(this)"></i>         </div> </div> <div class=\"personinfo\"> ${authorinfo}. <a href="https://en.wikipedia.org/wiki/${author}" target="_blank">Wikipedia <i style="font-size: 9px" class="fa fa-external-link"></i></a> </div> <hr> <div class=\"tools\"> <center> <i class=\"fa fa-bullhorn\"></i> <a href=\"https://wa.me/?text=${quote}\" target="_blank"><i class=\"fa whatsappicon fa-whatsapp\" ></i></a> <a href=\"https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${quote}" target="_blank"><i class=\"fa facbookicon fa-facebook-f\" ></i></a> <a href=\"https://twitter.com/intent/tweet?text=${quote}%20${window.location.href}\" target="_blank"><i class=\"fa twittericon fa-twitter\" ></i></a> <a href=\"https://www.reddit.com/submit?title=${quote}&url=${window.location.href}\" target="_blank"><i class=\"fa redditicon fa-reddit\" ></i></a>             <a href="https://www.linkedin.com/shareArticle/?url=${window.location.href}" target="_blank" class="fa linkedinicon fa-linkedin"></a><i class="fa linkedicon fa-copy" onclick="navigator.clipboard.writeText('${quote}'); a(this)"></i>                              </center></div></div> <br>`

                              var maincontent = document.getElementById("maincontent")
                              maincontent.append(div)


                         })

               }).catch((err) => { console.log(err); })



     }
}


























