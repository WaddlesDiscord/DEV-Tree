addLayer("s", {
    name:"Story",
    symbol: "S",
    position: 0, // Horizontal
    row: "side",
    startData() { return {
        unlocked: true,
		    points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Story Notes", // Name of prestige currency
    baseAmount() {return new Decimal(0)}, // Get the current amount of baseResource
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
	infoboxes: {
    	sn1: {
        	title: "Story Note 1",
        	body() { return "In the beginning there was nothing. Nothing but a small spec of dust. However, this was not a normal spec of dust. For this was the Eternal Spec, the Spec of Life!" },
            unlocked() {return hasUpgrade("inv", "11")}
        },
    },

tabFormat: [
    ["infobox", "sn1"],
]
    
})
