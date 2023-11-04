AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker is Found");
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is Lost");
            this.handleMarkerLost();
        });

    },
handleMarkerFound:function(){
    var buttonDiv=document.getElementById("button-div");
    buttonDiv.style.display="flex";

    var ratingButton=document.getElementById("rating-button");
    var orderButton=document.getElementById("order-button");

    ratingButton.addEventListener("click",function(){
        swal({
            icon:"warning",
            title:"rate Dish",
            text:"working on it!",

        })
    })

    orderButton.addEventListener("click",function(){
        swal({
            icon:"https://imgur.com/4NZ6uLY",
            title:"order Dish",
            text:"your order will be delivered someday,worry about ur MONEY FIRST :/",
        
        })
    })
},
handleMarkerLost:function(){
    var buttonDiv=document.getElementById("button-div");
    buttonDiv.style.display=none;
    
}
})