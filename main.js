$(document).ready(function() {

    var ghost = document.getElementsByClassName("ghost_container")[0];
    var sound = new Audio("file.wav"); // buffers automatically when created

    var showGhost = function() {
        sound.play();
        ghost.style.visibility = "visible";
        console.log('show');
    };

    $("#ghostbutton").click(function(){

      $(".inner").addClass("faded");
      //Shows ghost and plays sound after one second
      setTimeout(showGhost, 1000);

      //Hides ghost 3 seconds after appears
      setTimeout(function () {
        $(".inner").removeClass("faded");
        ghost.style.visibility = "hidden";
        console.log('hide');
      }, 3000);

    });


//campaign monitor form capture
  $('.cm-embedded-subscribe-form').submit(function (e) {
        e.preventDefault();
        var header = $(this).siblings("h3, h4").first(),
            that = this;
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                $(header)
                .html('<div>Hmm, something went wrong. If the error persists email </div><a target="_blank" href="mailto:nora.wessel@thinkful.com">nora.wessel@thinkful.com</a>');

                //have to select h3 and h4 because of discrepencies between the guides
                $(header)
                .html('<div>Hmm, something went wrong. If the error persists email </div><a target="_blank" href="mailto:nora.wessel@thinkful.com">nora.wessel@thinkful.com</a>');
            } else { // 200
                var email = $(this)[0].url.split('%40')[1].split('&')[0];
                if (emailUrl(email)) {
                    $(header)
                    .html('<div>Sweet! We just emailed you a little something.</div><p><a target="_blank" href=' + "'" +
                        emailUrl(email) + "'" +'class="email-link">' + 'Open ' +
                        emailCopy(email) + ' &raquo;</a></p>');

                    $(header)
                    .html('<div>Sweet! We just emailed you a little something.</div><p><a target="_blank" href=' + "'" +
                        emailUrl(email) + "'" +'class="email-link">' + 'Open ' +
                        emailCopy(email) + ' &raquo;</a></p>');
                } else {
                    $(header).html('<div>Sweet! We just emailed you a little something.</div>');

                    $(header)
                    .html('<div>Sweet! We just emailed you a little something.</div>');
                }
                $(that).css('display', 'none');
            }
        });
    });


    function emailUrl(email) {
        var email_map = new Object();
        email_map['gmail.com'] = 'https://mail.google.com/mail/#inbox';
        email_map['yahoo.com'] = 'https://www.yahoo.com';
        email_map['hotmail.com'] = 'https://www.hotmail.com';
        email_map['aol.com'] = 'https://www.aol.com';
        return email_map[email];
    }

    function emailCopy(email) {
        var email_map = new Object();
        email_map['gmail.com'] = 'Gmail';
        email_map['yahoo.com'] = 'Yahoo';
        email_map['hotmail.com'] = 'Hotmail';
        email_map['aol.com'] = 'Aol';
        return email_map[email];
    }

});



