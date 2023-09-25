/*###############################################################*/
/*##                                                           ##*/
/*##  ######  ######  #    #     #    #  ######  ####   #####  ##*/
/*##  #       #    #   #  #      ##  ##  #    #  #   #  #      ##*/
/*##  ####    #    #    ##       # ## #  #    #  #    # #####  ##*/
/*##  #       #    #   #  #      #    #  #    #  #   #      #  ##*/
/*##  #       ######  #    #     #    #  ######  ####   #####  ##*/
/*##                                                           ##*/
/*###############################################################*/

Hooks.on('init', () => {
    console.debug("Fox Mods: Init");
	game.settings.register('foxmods', 'no-tables', {
		name: "Remove the Rollable Tables tab",
		hint: "This will remove the Rollable Tables tab from the sidebar.",
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
	game.settings.register('foxmods', 'no-cards', {
		name: "Remove the Cards tab",
		hint: "This will remove the Cards Tables tab from the sidebar.",
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
        onChange: () => {
            location.reload();
        }
	});
	game.settings.register('foxmods', 'no-music', {
		name: "Remove the Music tab",
		hint: "This will remove the Music Tables tab from the sidebar.",
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
	game.settings.register('foxmods', 'unpause', {
		name: "Start unpaused",
		hint: "This will unpause the game when loading.",
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

});

Hooks.on("ready", function() {
    if(game.settings.get("foxmods", "no-tables")!=false){
		$('[data-tab=tables]').hide();
	};
    if(game.settings.get("foxmods", "no-cards")!=false){
		$('[data-tab=cards]').hide();
	};
    if(game.settings.get("foxmods", "no-music")!=false){
		$('[data-tab=playlists]').hide();
	};
	if(game.settings.get("foxmods", "unpause")!=false){
		game.togglePause();
	}
});