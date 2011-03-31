(function($){
  
  function Boo() {
    var self = this;
    this.players = {};
    this.oldPlayers = ['Conner', 'Nathan', 'Steve', 'John'];
    this.characters = {
      small: ['Baby Mario', 'Baby Luigi', 'Baby Peach', 'Baby Daisy', 'Toad', 'Toadette', 'Koopa Troopa', 'Dry Bones', 'Mii S'],
      medium: ['Mario', 'Luigi', 'Peach', 'Daisy', 'Yoshi', 'Birdo', 'Diddy Kong', 'Bowser Jr.', 'Mii'],
      large: ['Wario', 'Waluigi', 'Donkey Kong', 'Funky Kong', 'Bowser', 'Dry Bowser', 'Rosalina', 'King Boo']
    };
    this.vehicles = {
      small: {
        karts: ['Standard Kart S', 'Booster Seat', 'Mini Beast', 'Cheep Charger', 'Tiny Titan', 'Blue Falcon'],
        bikes: ['Standard Bike S', 'Bullet Bike', 'Bit Bike', 'Quacker', 'Magikruiser', 'Jet Bubble']
      },
      medium: {
        karts: ['Standard Kart M', 'Classic Dragster', 'Wild Wing', 'Super Blooper', 'Daytripper', 'Sprinter'],
        bikes: ['Standard Bike M', 'Mach Bike', 'Sugarscoot', 'Zip Zip', 'Sneakster', 'Dolphin Dasher']
      },
      large: {
        karts: ['Standard Kart L', 'Offroader', 'Flame Flyer', 'Piranha Prowler', 'Jetsetter', 'Honeycoupe'],
        bikes: ['Standard Bike L', 'Flame Runner', 'Wario Bike', 'Shooting Star', 'Spear', 'Phantom']
      }
    };
    
    this.el = {
      players: $('#players'),
      addPlayer: $('#addPlayer'),
      startSet: $('#start'),
      remove: $('.remove')
    };
    
    $('.mode').buttonset();
    
    $("button, input:submit, a").button();
        
    this.el.startSet.click($.proxy(this.addPlayers, this));
    this.el.addPlayer.click($.proxy(this.addPlayerForm, this));
    this.el.remove.live('click', $.proxy(this.removePlayerForm, this));
  }
  
  Boo.prototype = {
    
    removePlayerForm: function(e) {
      this.el.addPlayer.show();
      $(e.currentTarget).parent().remove();
      console.log(this, e, $(e.currentTarget).parent());
    },
    
    addPlayerForm: function(e) {
      e.preventDefault();
      
      var n = $('.player').length + 1,
          p = 'p' + n;

      var playerContainer = $('<p class="player" class="'+p+'">');
            
      var buRemove = $('<button class="remove">-</button>'),
          inPlayer = $('<input class="name" placeholder="Name">'),
          inCharacter = $('<input class="character" placeholder="Character">'),
          inVehicle = $('<input class="vehicle" placeholder="Vehicle">');
      
      buRemove.button();
      
      var inMode = $('<span class="mode">')
          .append('<input name="'+p+'m" type="radio" id="'+p+'a" value="a" checked="checked" /><label for="'+p+'a">Automatic</label>')
          .append('<input name="'+p+'m" type="radio" id="'+p+'m" value="m" /><label for="'+p+'m">Manual</label>')
          .buttonset();
      
      if (n > 1) playerContainer.append(buRemove);
      playerContainer.append(inPlayer, inCharacter, inVehicle, inMode);
      
      this.el.players.append(playerContainer);
      
      if (n == 4) {
        this.el.addPlayer.hide();
      }
    },
    
    addPlayers: function(e) {
      e.preventDefault();
      
      $.each(this.el.players.children('.player'), function(k, v){
        console.log(k, v);
      });
            
    }
    
    
  };
  
  
  var app = new Boo();
}(jQuery))