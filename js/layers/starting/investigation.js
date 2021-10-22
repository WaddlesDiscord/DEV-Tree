addLayer("inv", {
    name:"Investigation",
    symbol: "I",
    position: 0, // Horizontal
    row: 0,
    startData() { return {
        unlocked: true,
		    points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Resources", // Name of prestige currency
    update(diff){
        let gain = new Decimal(0.1)

        if(hasUpgrade("inv", "12")) gain = gain.plus(upgradeEffect("inv", "12"))
        if(hasUpgrade("inv", "13")&&!hasUpgrade("inv","14")) gain = gain.times(upgradeEffect("inv", "13"))
        if(hasUpgrade("inv", "14")) gain = gain.times(upgradeEffect("inv", "14"))
        player.invgain = gain
        player.inv.points = player.inv.points.plus(gain)
    },
 // Name of resource prestige is based on
    baseAmount() {return new Decimal(0)}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    layerShown(){return true},
	infoboxes: {
    },
    upgrades: {
		11:{
            cost: 15,
			unlocked(){
				return true
			},
			title() {return "Investigate"},
			description() {return "<h3>You must find the Eternal Spec at all costs! <b>Or else...</b></h3>"}
		},
        12:{
            cost: 20,
			unlocked(){
				return hasUpgrade("inv", 11)
			},
			title() {return "Allocate staff"},
			description() {return "Add 10 to the base gain of recources"},
            effect(){
                return new Decimal(10)
            }
		},
        13:{
            cost: 100,
			unlocked(){
				return hasUpgrade("inv", 11)
			},
			title() {return "Allocate even more staff"},
			description() {return "Double the gain of recources"},
            effect(){
                return new Decimal(2)
            }
		},
        14:{
            cost: 1000,
			unlocked(){
				return hasUpgrade("inv", 11)
			},
			title() {return "MORE MORE MORE staff"},
			description() {return "Increase the previous upgrade to TRIPPLE"},
            effect(){
                return new Decimal(3)
            }
		},
    },
tabFormat: {
    "Info": {
        content: [
        "main-display",
        ["display-text", function(){return `Current gain is ${Math.floor(player.invgain)}`}]
        ]
    },
    "Upgrades":{
        content:[
            "blank",
            ["microtabs", "stuff"],
        ],
    },
    "Story":{
        content:[
            ["display-text", "test"],
        ],
        embedLayer: "s"
    }
},
microtabs:{
    stuff:{
        One:{
            content: [
                "main-display",
                ["display-text", function(){return'<h3 style="margin:10px">I must start my investigation into this strange concept</h3>'}],
                "blank",
                ["upgrade", "11"],
                "blank"
            ],
            unlocked(){
                return true
            }
        },
        Two:{
            content: [
                "main-display",
                ["display-text", function(){return '<h3 style="margin:10px">I have learned of the Eternal Spec and the importance is clear. More staff must be alloacted to this job. NOW!</h3>'}],
                ["display-text", function(){return "<b>Story Note 1 avilable</b>"}],
                "blank",
                ["row", [["upgrade", "12"],["upgrade", "13"],["upgrade", "14"]]],
                "blank",
            ],
            unlocked(){
                return hasUpgrade("inv",11)
            }
        },
        Three:{
            content: [
                "main-display",
                ["display-text", "test"]
            ],
            unlocked(){
                return hasUpgrade("inv",12)
            }
        },
        Four:{
            content: [
                "main-display",
                ["display-text", "test"]
            ]
        },
        Five:{
            content: [
                "main-display",
                ["display-text", "test"]
            ]
        },
    }
},   
})
