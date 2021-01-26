$(function(){
    var $mainMenuItemps = $("#main-menu ul").children("li"),
        totalMainMenuItemps = $mainMenuItemps.length,
        openedIndex = 2,
        
        init = function(){
            bindEvents();
            if(validIndex(openedIndex))
                animateItem($mainMenuItemps.eq(openedIndex), true, 700);
        },    
        
        bindEvents = function(){
            
            $mainMenuItemps.children(".images").click(function(){
                var newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);
                
            });
            
            $(".button").hover(function(){
                $(this).addClass("hovered");  
            },
                function(){
                    $(this).removeClass("hovered");  
                 
                })
            
             $(".button").click(function(){
                 var newIndex = $(this).index();
                 checkAndAnimateItem(newIndex);
             });
        },
        
    validIndex = function(indexTocheck){
        return(indexTocheck >= 0) && (indexTocheck < totalMainMenuItemps);
    },
                
        animateItem = function($item, toOpen, speed){
            var $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width: "420px"}:{width: "140px"},
            colorImageParam = toOpen ? {left:"0px"}:{left: "140px"};
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
        },
        
        checkAndAnimateItem = function(indexTocheckAndAnimate){
            if(openedIndex === indexTocheckAndAnimate)
                    {
                        animateItem($mainMenuItemps.eq(indexTocheckAndAnimate), false, 250);
                        openedIndex =  -1;
                    }
                else
                    {
                        if(validIndex(indexTocheckAndAnimate))
                            {
                                animateItem($mainMenuItemps.eq(openedIndex), false, 250);
                                openedIndex = indexTocheckAndAnimate;
                                animateItem($mainMenuItemps.eq(openedIndex), true, 250);
                            }
                    }
        };
    
    init();
    
});
        