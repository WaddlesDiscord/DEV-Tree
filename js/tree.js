var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)


addLayer("tree-tab", {
    tabFormat: [["tree", function() {if(!hasUpgrade("inv","21") || player.storyc > 3){return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}}],
    ["display-text", function() {if(hasUpgrade("inv","21") && player.storyc >= 0 && player.storyc < 4){return "What? What is this? Where did everything go!"}}],
    "blank"
    ["display-text", function() {if(hasUpgrade("inv","21") && player.storyc >= 1  && player.storyc < 4){return "Oh no it's happening... Everything is collapsing"}}],
    "blank",
    ["display-text", function() {if(hasUpgrade("inv","21") && player.storyc >= 2 && player.storyc < 4){return "This is the end"}}],
    "blank",
    ["display-text", function() {if(hasUpgrade("inv","21") && player.storyc >= 3 && player.storyc < 4){return "The universe shall be REBORN"}}],
    "blank",
    ["clickable", "11"]
],
    clickables: {
        11:{
            display(){return "<h1>Next</h1>"},
            canClick(){return true},
            unlocked(){
                return hasUpgrade("inv","21") && player.storyc < 3
            },
            onClick(){
                console.log(player.storyc)
                console.log(hasUpgrade("inv","21") && player.storyc >= 1  && player.storyc < 4)
                player.storyc = player.storyc + 1
            }
        }       
    },
    previousTab: "",
    leftTab: true,
})