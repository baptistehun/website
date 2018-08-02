$(function(){
  
  $(".navbar a, footer a").on("click", function(event){
    event.preventDefault();
    var hash = this.hash;
    
    $("body, html").animate({scrollTop: $(hash).offset().top}, 900, function(){window.location.hash = hash;})
    
  });
  
  
})

var Slider = {
    id: '',
    nbSlides: 0,
    widthTotal: 0,
    actualPos: 0,
    init: function (id, nbSlides) {
        var self = this;
        self.id = id;
        self.nbSlides = nbSlides;
        self.widthTotal = 100 * nbSlides;

        var rollover = setInterval(function () {
            self.changeSlide(+1);
        }, 5000);

        $('#monSliderArrows').on('mouseover', function () {
            clearInterval(rollover)
        });

        $('#monSliderArrows').on('mouseout', function () {
            rollover = setInterval(function () { self.changeSlide(+1); }, 2500)
        });

        $('#monSliderArrows div:first-child').on('click', function () {
            self.changeSlide(-1);
        })

        $('#monSliderArrows div:last-child').on('click', function () {
            self.changeSlide(+1);
        })
    },

    changeSlide: function (incrementation) {
        var self = this;
        self.actualPos = (self.nbSlides + self.actualPos + incrementation) % self.nbSlides;
        var nextPos = '-' + self.actualPos * 100 + '%';
        $('#monSliderContent').css('left', nextPos);
    },
}

Slider.init('monSlider', 4);