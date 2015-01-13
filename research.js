// Generated by CoffeeScript 1.8.0
(function() {
  var html, project, project_title, section, section_link, section_title, _ref;

  window.research = {
    "Big Data and Human Values": {
      "Human Values, Choicemaking, and Interface Design": {
        img: "img/menu.png",
        url: "http://nxhx.org/Choicemaking/",
        desc: "Why we're all wasting time on the internet, and what to do about it.",
        tags: 'long article',
        readtime: '2 hour'
      },
      "Two Kinds of Demand": {
        img: "img/slots.jpeg",
        url: "https://medium.com/@edelwax/two-kinds-of-demand-a36c54b97ee1",
        readtime: '2 min',
        desc: "Is our economy powered by activities (and pageviews) we later regret?",
        tags: 'essay'
      },
      "Collective Experience Project": {
        img: "img/signpost.png",
        url: "http://willandintent.org/cxp/",
        desc: "open, structured data about what people try and how it works out for them",
        tags: 'data'
      },
      "Winning the Platform Wars with Morality": {
        tags: "essay",
        img: "img/wandi.png",
        url: "https://medium.com/@edelwax/mobile-platforms-and-human-values-74e5380713eb",
        readtime: '2 min',
        desc: "Design is no longer enough for your customers; the next decade is about values-alignment"
      },
      "Every Screen Empowers Us or Weakens Us": {
        img: "img/walle.jpeg",
        url: "https://medium.com/@edelwax/every-screenful-of-every-app-either-empowers-us-or-weakens-us-2ef22a472b30",
        readtime: '4 min',
        desc: "We make a thousand choices a day, and the character of those choices is in the end who we become.",
        tags: "essay"
      }
    },
    "Discussion Formats for Playful Strategy and Critique": {
      "Hyperactive Listening": {
        tags: "group activity",
        img: "img/hyperl.jpg",
        url: "https://quip.com/kc4jAKO83gUD",
        desc: "A game where people bring their hopes, fears, or plans, and a team of listeners does live, playful research and simulations."
      },
      "Doubt Club": {
        tags: "event series",
        img: "img/question-gear.png",
        url: "http://twitter.com/doubtclubsf",
        desc: "A monthly event giving SF tech leaders a safe space for philosophically thinking about their impact."
      },
      "Free Critical Discussion": {
        tags: "public interventions",
        img: "img/fcd.jpg",
        url: "https://m.facebook.com/profile.php?id=523439091118445",
        desc: "Just like free hugs, but different"
      },
      "Nut or Fish": {
        tags: "group activity",
        img: "img/nutfish.jpg",
        url: "http://jxe-games.tumblr.com/post/103312737380/nut-or-fish-a-micro-interaction-coaching-game",
        desc: "Contemplate a big life choice with a stranger, then make a commitment to one another and seal it by eating an almond or a sardine."
      }
    },
    "Creative Tools for Rapid Coordination": {
      "CEML": {
        img: "img/ceml.png",
        url: "https://github.com/citizenlogistics/ceml/blob/master/guide/guide.md",
        desc: "a programming environment for describing &amp; coordinating group work",
        tags: 'language'
      },
      "Groundcrew": {
        img: "img/groundcrew2.jpg",
        url: "#groundcrew",
        tags: 'app',
        desc: "a realtime teambuilding command console used for disaster relief, city halls, political and activist campaign coordinators, etc"
      }
    },
    "Group Games": {
      "Sandbox SF": {
        img: "img/sandbox.jpg",
        desc: "An open mic and testing ground for newly invented group activities and games.",
        url: "https://www.facebook.com/groups/496677353748745/",
        tags: 'event series'
      },
      "Analog Cupid": {
        img: "img/flaskhat.png",
        url: "https://www.facebook.com/analogcupid",
        desc: "Local matchmaking, with polaroids and paper profiles",
        tags: 'event series'
      },
      "WPE": {
        img: "img/codered.jpg",
        url: "https://www.dropbox.com/sh/pt5k3bg48j33utr/SHoH1sOsWU",
        desc: "Immersive experiences in the unlikeliest places.",
        tags: 'event series'
      },
      "Notecard parties": {
        img: "img/cards.png",
        url: "/misc/notecard-party-faq.html",
        desc: "events where guests at a party are assigned precisely-timed tasks, distributed on little cards or via SMS",
        tags: 'event series'
      }
    }
  };

  html = [];

  _ref = window.research;
  for (section_title in _ref) {
    section = _ref[section_title];
    section_link = section_title.toLowerCase().replace(/\ /g, '-');
    html.push("<section><a id='" + section_link + "'><h3>" + section_title + "</h3><div class='list'>");
    for (project_title in section) {
      project = section[project_title];
      html.push("<a href='" + project.url + "'><div class='researchItem'>");
      if (project.img) {
        html.push("<img src='" + project.img + "'>");
      }
      html.push("<div><div class='title'>" + project_title);
      if (project.readtime) {
        html.push("<span class='readtime'>" + project.readtime + " read</span>");
      }
      html.push("</div>");
      if (project.desc) {
        html.push("<div class='desc'>" + project.desc);
        if (project.tags) {
          html.push("<span class='tag'>" + project.tags + "</span>");
        }
        html.push("</div>");
      }
      html.push("</div></div></a>");
    }
    html.push("</div></section>");
  }

  document.write(html.join(''));

}).call(this);
