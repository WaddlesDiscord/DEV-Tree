addLayer("Fragments", {
    name: "Fragment Combiner",
    symbol: "FC",
    position: 0, // Horizontal
    row: 0,
    startData() { return {
        unlocked: true,
		    points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Fragments", // Name of prestige currency
    baseResource: "Dust", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    layerShown(){return true},
    clickables: {
		11:{
			unlocked(){
				return true;
			},
			title() {return "Story Note #1"},
			display() {return "<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Purus gravida quis blandit turpis cursus in hac habitasse platea. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Nec ultrices dui sapien eget mi. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh venenatis cras sed felis eget velit aliquet. Nulla pharetra diam sit amet. Id volutpat lacus laoreet non. Pulvinar etiam non quam lacus suspendisse faucibus. Sed augue lacus viverra vitae congue eu consequat. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.</h3>"},
			canClick(){ return false}
		},
    },
})
