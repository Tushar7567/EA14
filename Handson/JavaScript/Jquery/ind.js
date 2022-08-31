
// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$('#btn1').click(function () {
    $('p').toggle();
    // $('.ex1').hide();
    // .hide();
    // $(this).toggle();
});



// Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page


$('#btn').click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success: function (data) {
            console.log(data);
            document.getElementsByTagName('h1')[0].innerText = data.title;
            document.getElementsByTagName("h1")[0].style.backgroundColor = 'yellow';

        }
    })
})