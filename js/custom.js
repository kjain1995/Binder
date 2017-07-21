$( document ).ready(function() {
  $('.user-images').click(function(){
    openNav($(this).attr('src'), $(this).attr('data-name'), $(this).attr('data-price'), $(this).attr('data-condition'));
    addCart($(this).attr('data-name'),$(this).attr('data-price'));
  });
});

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Set all tabs to unfocused
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openNav(imgSrc, cardName, cardPrice, cardCondition) {
    document.getElementById("mySidenav").style.width = "400px";
    $("#main-image").attr('src', imgSrc);
    $("#sideName").html("Name: " + cardName);
    $("#sidePrice").html("Price: " + cardPrice);
    $("#sideCondition").html("Condition: " + cardCondition);

    console.log ($("#sideName").html());
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
function addCart(name, price) {
    //document.forms[0].item_name.value = name;
    $('#item_name').value = name;
    $('#amount').value = price;
}
