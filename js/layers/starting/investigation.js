addLayer("inv", {
    layerShown(){return !hasUpgrade("inv","21")},
    name:"Investigation",
    symbol: "I",
    position: 0, // Horizontal
    row: 0,
    startData() { return {
        unlocked: true,
		    points: new Decimal(10000000000),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Resources", // Name of prestige currency
    update(diff){
        
        let gain = new Decimal(0.1)

        if(hasUpgrade("inv", "12")) gain = gain.plus(upgradeEffect("inv", "12"))
        if(hasUpgrade("inv", "13")&&!hasUpgrade("inv","14")) gain = gain.times(upgradeEffect("inv", "13"))
        if(hasUpgrade("inv", "14")) gain = gain.times(upgradeEffect("inv", "14"))
        if(hasUpgrade("inv", "20")) gain = gain.pow(upgradeEffect("inv", "20"))
        if(hasUpgrade("inv", "21")) gain = gain.times(upgradeEffect("inv", "21"))
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
    layerShown(){return !hasUpgrade("inv", "21")},
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
            cost: 50,
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
            cost: 1000,
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
            cost: 10000,
			unlocked(){
				return hasUpgrade("inv", 11)
			},
			title() {return "MORE MORE MORE staff"},
			description() {return "Increase the previous upgrade to TRIPPLE"},
            effect(){
                return new Decimal(3)
            }
		},
        15:{
            cost: 25000,
			unlocked(){
				return hasUpgrade("inv", 14)
			},
			title() {return "Build a base"},
			description() {return "The goverment has allowed you to build a base of operations. For a price of course"},
		},
        16:{
            cost: 25000,
			unlocked(){
				return hasUpgrade("inv", 15)
			},
			title() {return "Foundations"},
			description() {return "Build the foundation to put the walls and roof on"},
		},
        17:{
            cost:10000,
			unlocked(){
				return hasUpgrade("inv", 15)
			},
			title() {return "Walls"},
			description() {return "Construct the walls ready to place on the building"},
		},
        18:{
            cost: 15000,
			unlocked(){
				return hasUpgrade("inv", 15)
			},
			title() {return "Roof"},
			description() {return "Construct a roof ready to put on the building"},
		},
        19:{
            cost: 15000,
			unlocked(){
				return hasUpgrade("inv", 15)
			},
			title() {return "Decor"},
			description() {return "Decorations, they make the place look nice"},
		},
        20:{
            cost: 30000,
			unlocked(){
				return hasUpgrade("inv", 16) && hasUpgrade("inv", 17) && hasUpgrade("inv", 18) && hasUpgrade("inv", 19)
			},
			title() {return "Finish the base"},
			description() {return "Use all the things you bought and constructed to make a base.  Square your production"},
            effect(){
                return new Decimal(2)
            }
		},
        21:{
            cost: 1000000,
			unlocked(){
				return hasUpgrade("inv", 20)
			},
			title() {return "Prize Reward"},
			description() {return "Make a prize reward to find the spec faster. Double your production again"},
            effect(){
                return new Decimal(2)
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
        Start:{
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
                ["display-text", "Every opperation needs a base right? Let's build one!"],
                ["display-text", "A great reward at the end"],
                "blank",
                ["row",[["upgrade", "15"],["upgrade", "20"]]],
                ["row", [["upgrade", "16"],["upgrade", "17"],["upgrade", "18"],["upgrade", "19"]]]
            ],
            unlocked(){
                return hasUpgrade("inv",14)
            }
        },
        Four:{
            content: [
                "main-display",
                ["display-text", "Phase 3"],
                ["display-text", "We have recived warning from the government. ENACT PHASE 3"],
                "blank",
                ["row",[["upgrade","21"]]]
            ],
            unlocked(){
                return hasUpgrade("inv",20)
            }
        },
    }
},   
})
