//refer database (firebase) --- AR MENU CARD --- NAME OF THE DATABASE
AFRAME.registerComponent("marker-handler", {
    init: async function() //async function = waiting time to run the function
    {
        this.el.addEventListener('markerFound', ()=>{ //
            console.log('MARKER IS FOUND!!!')

            //call a funciton to handle marker events - FOUND
            this.handleMarkerFound();
        });

        this.el.addEventListener('markerLost', ()=>{ //
            console.log('MARKER IS LOST!!!')
            //call a funciton to handle marker events - LOST
            this.handleMarkerLost();
        })
    },
    handleMarkerFound: function()
    {
        //Changingbutton div visibility
        var buttondiv = document.getElementById("button-div");
        buttondiv.style.display = "flex" //output will be displayed only if the marker is found

        var orderbutton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary-button");

        //Handling Click Events
        ratingbutton.addEventListener('click', ()=>{
            swal({ 
                icon: 'https://i.imgur.com/4NZ6uLY.jpg',
                title: 'Thanks For Order',
                text: 'Your Order will be served soon at your table'
            })
        });

        orderbutton.addEventListener('click', ()=>{
            swal({ 
                icon: 'warning',
                title: 'Order Summary',
                text: 'Work In Progress...'
            })
        });

    },

    handleMarkerLost: function()
    {
        var buttondiv = document.getElementById('button-div')
        buttondiv.style.display = "none" //output will be displayed only if the marker is lost
    }
})