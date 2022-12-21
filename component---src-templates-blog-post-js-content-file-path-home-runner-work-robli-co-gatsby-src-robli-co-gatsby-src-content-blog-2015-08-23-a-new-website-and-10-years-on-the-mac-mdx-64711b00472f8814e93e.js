"use strict";(self.webpackChunkrobli_co_gatsby_src=self.webpackChunkrobli_co_gatsby_src||[]).push([[923],{7902:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(1151),o=n(7294);function l(e){const t=Object.assign({h2:"h2",p:"p",a:"a",blockquote:"blockquote",ol:"ol",li:"li",hr:"hr",div:"div",em:"em",h3:"h3",h4:"h4",ul:"ul"},(0,a.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.h2,null,"A new website"),"\n",o.createElement(t.p,null,"Steve Jobs ",o.createElement(t.a,{href:"https://youtu.be/FF-tKLISfPE?t=1m46s"},"once said"),":"),"\n",o.createElement(t.blockquote,null,"\n",o.createElement(t.p,null,"You’ve got to start with the customer experience and work backwards to the technology."),"\n"),"\n",o.createElement(t.p,null,"I believe this is the right approach to doing most things. Start  by thinking about the outcome you want, then figure out the how. The common mistake is to instead look at the skills and resources available, then figure out what can be created given those constraints."),"\n",o.createElement(t.p,null,"I had 3 goals for this new website."),"\n",o.createElement(t.ol,null,"\n",o.createElement(t.li,null,"I want the site to be fast."),"\n",o.createElement(t.li,null,"I want it to be cheap to run."),"\n",o.createElement(t.li,null,"I want all my ",o.createElement(t.a,{href:"/about/"},"stuff")," to live in a central hub I control."),"\n"),"\n",o.createElement(t.hr),"\n",o.createElement(t.h2,null,"10 years on the Mac"),"\n",o.createElement(t.p,null,"The Macintosh is an example of a product where the people who made it first thought about the outcome, the user experience, then figured out the technology (like ",o.createElement(t.a,{href:"http://www.folklore.org/StoryView.py?story=Round_Rects_Are_Everywhere.txt"},"rounded rects"),") that were required to get there."),"\n",o.createElement(t.p,null,"The process of building this website reminded me of all the reasons why I love the Mac. All the tools I need are easily available - either pre-installed, or a simple ",o.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<code class="language-text">brew install $WHATEVER</code>'}})," ",o.createElement(t.a,{href:"http://brew.sh"},"command")," away."),"\n",o.createElement(t.p,null,"For example, OS X runs on top of Unix. The open web is usually some flavour of Unix[^1]. Developing for the web on the Mac is a joy because most concepts and commands are the same (e.g. file systems, permissions, tools like ",o.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<code class="language-text">rsync</code>'}}),"). Everything feels native and familiar. When I open up the Mac terminal app and SSH into my web server it’s the same environment I’m familiar with on my Mac. ",o.createElement(t.a,{href:"https://www.ruby-lang.org/en/"},"Ruby"),", ",o.createElement(t.a,{href:"http://httpd.apache.org"},"Apache"),", ￼",o.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Bash_(Unix_shell)"},"Bash"),"￼…it’s just all there and it’s all the same."),"\n",o.createElement(t.p,null,"The past 10 years on the Mac have been the most creative of my life simply because there is so much support out there for making things on the Mac. Beyond the tutorials, the available apps are best of breed and usually open-source. I learned photography, video editing and programming all on the Mac."),"\n",o.createElement(t.p,null,"I hope the Mac and OS X continue to evolve and stay true to themselves[^2]."),"\n",o.createElement(t.hr),"\n",o.createElement(t.h2,null,"It’s just some implementation detail, don’t worry about it…"),"\n",o.createElement(t.p,null,"Execution ",o.createElement(t.a,{href:"/blog/2014-10-12-Executing-on-the-vision/"},"is everything"),"."),"\n",o.createElement(t.p,null,"This site is far from great. But I believe a lot of the fundamental architecture and design decisions are ",o.createElement(t.em,null,"ok"),"."),"\n",o.createElement(t.h3,null,"Solving for outcome 1 - speed"),"\n",o.createElement(t.p,null,"The problem with the web in 2015 is it’s slow and bloated. Many popular sites are full of ads and tracking that make pages load slowly, suck your phone battery dry and blast noise from autoplaying videos you don’t want to watch."),"\n",o.createElement(t.p,null,"You can see below from a simple test I did on the ",o.createElement(t.a,{href:"http://smh.com.au"},"SMH")," homepage I found 22 trackers active - a lot of them are advertising related. These trackers each fire off their own scripts and make additional network requests - often running long after the main webpage has loaded - chewing up battery life unnecessarily."),"\n",o.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 78.33333333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAADn0lEQVR42p2Ty29bRRTGR4ItdM+Sv4IlC9hUsEE16qYbKG5Ru++VEAixYNVN0lSWeBTxVJJCaUUSOXIcG/s6pEnTJM7Db/vm+vr6eW3f92PG86HrmMCqC0b6ac45OvrmOzMakn/86+ul7SefDqTSnW7lVGgV88KgURJ0pS6YqiR0qqdC4dlfglI8EoxWQxhKFaFZOBS0RlEwurJglfOC06zc0ZuVT7Tk4mvk7dtfXH3vy+9wfX4ZHy88RHR+CdF7DxG9t4wbCw9xK/YI0blFROeWcPP+b/hobhG3Y48R/WkbH34r4sYDEde/zuD9r7KI/Lhzn3yzkroiygY2Kz1v7VihiWKHZio9mm1oNF3t0993y3TlQKKPdkp05VCi24pBRWlMv99T6Q97bfrL4YA+2Gm7c6KMxX0lQfLPn0UQLj5hgWPxie9y7to8rITUiie8fJLn+b0dflYtXdQROJxZYw7QMKfMd0DN0QrZiMcjLaUFWVHYmTrgTaWFxtkZmk0Z3U4Htm1NcR0HrutCH41h6gZ008JAG8ILKALGaXtooNcfrJE/lpYj1VIJarvN2p0e73Z7UPtDVOU2lP4Y6kBHZ2hA1XRougXXMmFbNkaGicFoDMcPEEw47Y5N9AfaGnmyuhap1uuQJIlpmsYNXUerO0ahbeKopeNY0VFQDRy3dKhjB9S2wQMPYA4wcTG7AgrfwcQKR17fiEgNCbIss+FwyLXBCD15BM4oMDknjEMopQD1UVBH+CDRRHRTxbV1BTfTHXotLuPzzUaSbCSTkdNCAYViifX7PT7QRmgNTDiOC9fz4Lr/4rguWOCj0RtjfruJhacK7opnfGFbZndzMm79vPUZyYrZSL1Wx/7BAcvnj3in04ZhezBMBzQIEPj+FH+G5/uY0GA65QwO5k7CWNpNvUXEnBipVavI54/Y8ckJb6sqNNNFX7fheR5sx50SvnCYe1PXLiznAm6b1sS0HSQ20++QXChYa6BYLLFCsTgVHFkeaj0L6shBo29D6ttT1/91eoHncd+2J+FBf6bTl0PBK9VKDXvP94PDwzxrNmU2tlzWH9vM91zmuC5zX4TjMM8yaeg6nUpdJltbW1dlWUG5XEatXoemafAZhxOw8w/EZ5+D8/N4tk85b8Bk5lYUxXdJLBZ7c319fXd1dTUbj8dzicRGLpPJ5jKZTC6bzb6Qf3pSqZSYTCafxmKxNwgh5GVCyCuEkEuEkFf/J5dmGi/9Df+nFvo8X9g3AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="smh trackers"\n        title="smh trackers"\n        src="/static/ad90b1e4b6795316a09ee5bcac175f70/64756/smh-trackers.png"\n        srcset="/static/ad90b1e4b6795316a09ee5bcac175f70/a8a0d/smh-trackers.png 300w,\n/static/ad90b1e4b6795316a09ee5bcac175f70/dface/smh-trackers.png 600w,\n/static/ad90b1e4b6795316a09ee5bcac175f70/64756/smh-trackers.png 1200w,\n/static/ad90b1e4b6795316a09ee5bcac175f70/d9191/smh-trackers.png 1203w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",o.createElement(t.p,null,"I did two things to tackle this problem."),"\n",o.createElement(t.h4,null,"Scripts"),"\n",o.createElement(t.p,null,"Firstly, this site runs as little JavaScript as possible. This is an easy decision for me because I don’t need to make money off this site."),"\n",o.createElement(t.p,null,"I do run some JavaScript where it’s needed. However, I do not put any scripts in the ",o.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<code class="language-text">&lt;header></code>'}})," of the HTML because I don’t want anything taking priority over the rendering of the content."),"\n",o.createElement(t.p,null,"I like to use footnotes in my blogs to add little bits of info[^3] but I don’t like the traditional method of linking to footnotes at the bottom of an article. It makes for a bad reading experience to have to jump up and down within an article. I use ",o.createElement(t.a,{href:"http://www.bigfootjs.com"},"bigfoot")," to show the footnotes in a pop-up. The traditional footnotes are still at the bottom. As with any JavaScript library, ",o.createElement(t.a,{href:"https://jquery.com"},"jQuery")," is also required. What can you do[^4]."),"\n",o.createElement(t.p,null,"In addition, I also run ",o.createElement(t.a,{href:"http://www.google.com.au/analytics/"},"Google Analytics"),"[^5] to track what’s happening on this site. You can read about some of the privacy implications ",o.createElement(t.a,{href:"/privacy/"},"here"),"."),"\n",o.createElement(t.h4,null,"Static site"),"\n",o.createElement(t.p,null,"A lot of blogs use a CMS like ",o.createElement(t.a,{href:"https://wordpress.org"},"Wordpress"),". I like Wordpress. My ",o.createElement(t.a,{href:"http://robertwli.com"},"previous effort")," ran on Wordpress and I have been using it for almost 10 years. The problem with Wordpress is that I believe a CMS is overkill for a blog. There is no need for a server to put together a blog post for the user every time a page is requested. The page is going to be the same for every visitor!"),"\n",o.createElement(t.p,null,"Building once and serving the same page to everyone is a better approach for a site like mine. This way, my server[^6] is only sending raw HTML/CSS/JavaScript to each request which is retrieved directly from the server’s file system. This minimises work done by the server which speeds up the overall request/response cycle. As a side benefit, this also bypasses many security issues that can arise from having a database backend."),"\n",o.createElement(t.p,null,o.createElement(t.em,null,"But")," I don’t want to craft every single page like an animal - programming can help with that."),"\n",o.createElement(t.p,null,"I built this site using ",o.createElement(t.a,{href:"https://middlemanapp.com"},"Middleman")," which is a static site generator. It programatically pieces together each page and every possible permutation of a page. That way, I can build once and then deploy."),"\n",o.createElement(t.p,null,"Middleman is quite capable so far, easy to use[^7] and very customisable. It has dedicated blogging tools and plenty of modules to add-on functionality later."),"\n",o.createElement(t.p,null,"Some tidbits about the design:"),"\n",o.createElement(t.ul,null,"\n",o.createElement(t.li,null,"I designed the site from the ground up and wrote a lot of custom CSS to get it looking how I wanted. The foundation is ",o.createElement(t.a,{href:"http://getbootstrap.com"},"Bootstrap")," so I didn’t have to worry too much about mobile vs desktop rendering and sizes."),"\n",o.createElement(t.li,null,"Why orange? I wanted the background to be white because I wanted images to blend easily into the page. I didn’t want the usual boring blue highlight colours so I opted for orange which goes well with white, I think."),"\n"),"\n",o.createElement(t.p,null,"As a great side benefit of the static site approach, it means there is significantly less demand on the server’s resources and hence only minimum computing power is required bringing down costs and brings me to the next outcome required…"),"\n",o.createElement(t.h3,null,"Solving for outcome 2 - server running costs"),"\n",o.createElement(t.p,null,"My choice in using a static site also results in minimum server requirements."),"\n",o.createElement(t.p,null,"I am using a ",o.createElement(t.a,{href:"http://digitalocean.com/"},"VPS")," that costs $5/month with 512MB of memory and uses SSDs for storage. SSDs are fairly cheap now in a VPS environment, and given the limited memory, the storage performance must be top notch."),"\n",o.createElement(t.p,null,"The VPS also hosts all my other content from the ",o.createElement(t.a,{href:"http://robertwli.com/"},"robertwli.com")," and robli.org domains."),"\n",o.createElement(t.h3,null,"Solving for outcome 3 - central hub"),"\n",o.createElement(t.p,null,"I find the web is moving to a place where everyone’s content is stored and owned by private companies like Facebook, Google and Apple. This in itself is not a bad thing. They provide great services."),"\n",o.createElement(t.p,null,"I am a believer in the power of the open web. A web where you control, store and serve your own content over the internet."),"\n",o.createElement(t.h4,null,"My projects"),"\n",o.createElement(t.p,null,"My ",o.createElement(t.a,{href:"/about/"},"About")," page lists all the stuff I have worked on past and present. Hopefully, I will keep adding to this page as I tackle new projects."),"\n",o.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1000px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.33333333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABDrAAAQ6wFQlOh8AAACvUlEQVR42p2Sy2oUQRSGC/ICIpi123HhzhfwEcSl6EYRsnfhIlm0EQyYjWAEIZNkgi40gogYQRDizHQyaXMll4kx5jrTM5m+VVe6q6e7un6pTgxBQ0QL/jpVxTlfnVN1SGno5bnV8uue2rfpXrM6q20vTmr16letuT6veTurmru9rH2f/aLtrRjZ3tutaubarLa5oGe2Xp1RtndjrtRTGOg/R0af9ufo5hx4fQW8vopIyayC11YO1/VVBHvLx3u2vQB/ax7uxgxUXHh0TrcWMPjkUY4MDo/kBBAAECkQB1ES8ziNAfyLhGIMjRRyZCifz8XtKAIAzkO5t7srG2ZdMp9K5vuSMV9Sz5U8DGQqEillKnFCMk0lIBG321E+n88RNcVx3FbAKIpkrVaDSz2kaYokSZBKid+HlPKkMgfF+AOYylRGIUcSxoeBAIIgxObSLCrjb1H6+D675AT5bGDG+LQF5N8ASx8gkxjL+hieP7yDvrvX0dd1C1EcI0klKKUQOL73FOBhZdIuOfg8pGNkbgw84VjWx9F18xquXrmMe7dvoNHcR63RhOd6sFwKkb3hGRmGPlCp+njVWgNP2misL+Ldi2E8e3AfowOP4bouKDuAEAIR52eXHMeJDKgNcAehz+C5LlrmLjyrAadZQ2PnR1ZqEARgjGX2L8BYOrYNz7ZgOzZsx4FHfbgeheN6mVSGlmVlQPVBpwLb7Xaoyo2iSJimKWp1UzTMumD7e8Jv7ogD6gjGDgRjvmCMCd/3BaVUcM6FlFJJKkYGLBQKl351geq9lmXBslpwHQeO1YLd2ofn2HAcB7Ztq17NMlNWvePJoViku7v7YqVSKU5PT89MTU0Z5XLZ0MslY0ovGZN6+VDlolEsFo2JiQlDn5w0dF03lK9SpVIxVKxiKBYhhHQQQs4TQjoJIRf+U51HjI6fHlzYD4+KiMUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="roblico about section"\n        title="roblico about section"\n        src="/static/d531756c09b4b81c2388a00b39f9cfd7/1263b/roblico-about-section.png"\n        srcset="/static/d531756c09b4b81c2388a00b39f9cfd7/a8a0d/roblico-about-section.png 300w,\n/static/d531756c09b4b81c2388a00b39f9cfd7/dface/roblico-about-section.png 600w,\n/static/d531756c09b4b81c2388a00b39f9cfd7/1263b/roblico-about-section.png 1000w"\n        sizes="(max-width: 1000px) 100vw, 1000px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",o.createElement(t.h4,null,"My photos"),"\n",o.createElement(t.p,null,"I also finally have a ",o.createElement(t.a,{href:"/photos/"},"place for my photos")," that I’m fairly happy with. Ironically, I started to learn programming because I was not happy with any of the templates the typical photo portfolio websites offered. After getting side-tracked with programming for 2 years, I circled back to the original task."),"\n",o.createElement(t.p,null,"I will be adding progressively to this as well."),"\n",o.createElement("img",{className:"img-hero",src:"/images/2015/08/roblico-photos-section-combined.jpg"}),"\n",o.createElement(t.p,null,"[^1]:\tusually linux"),"\n",o.createElement(t.p,null,"[^2]:\tAfterall, it’s the existence of the Mac that allows the next generaiton of computing devices like iOS devices to have the freedom to stay simple and be true to themselves."),"\n",o.createElement(t.p,null,"[^3]:\tlike this"),"\n",o.createElement(t.p,null,"[^4]:\tOn the bright side, chances are you already have 4 different versions of jQuery cached on your computer."),"\n",o.createElement(t.p,null,"[^5]:\tWhy? I don’t know, I guess I like to know what’s going on with the site."),"\n",o.createElement(t.p,null,"[^6]:\tjust a bare bones Linux box somewhere in ",o.createElement(t.a,{href:"https://www.digitalocean.com"},"Digital Ocean’s")," farm."),"\n",o.createElement(t.p,null,"[^7]:\tif you’re experienced with the Ruby/Rails conventions"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?o.createElement(t,e,o.createElement(l,e)):l(e)},i=n(1883),s=n(4107),c=n(8183),h=n(9482);const m=e=>{var t;let{data:n,location:a,children:l}=e;const r=n.mdx,m=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",{previous:u,next:p}=n;return o.createElement(s.Z,{location:a,title:m},o.createElement(c.Z,{title:r.frontmatter.title,description:r.frontmatter.description||r.excerpt}),o.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,o.createElement("h1",{itemProp:"headline"},r.frontmatter.title),o.createElement(h.KE,null,r.frontmatter.date," by ",o.createElement(i.Link,{to:"/about"},"Rob Li"))),o.createElement("section",null,l),o.createElement("hr"),o.createElement("footer")),o.createElement("nav",{className:"blog-post-nav"},o.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.createElement("li",null,u&&o.createElement(i.Link,{to:"/blog"+u.fields.slug,rel:"prev"}," ← ",u.frontmatter.title)),o.createElement("li",null,p&&o.createElement(i.Link,{to:"/blog"+p.fields.slug,rel:"next"},p.frontmatter.title," →")))))};function u(e){return o.createElement(m,e,o.createElement(r,e))}},1151:function(e,t,n){n.d(t,{ah:function(){return l}});var a=n(7294);const o=a.createContext({});function l(e){const t=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-home-runner-work-robli-co-gatsby-src-robli-co-gatsby-src-content-blog-2015-08-23-a-new-website-and-10-years-on-the-mac-mdx-64711b00472f8814e93e.js.map