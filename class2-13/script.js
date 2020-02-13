$(()=>{
    //jquery
    // let result = $('div')
    // $('#paragraph')
    // let $result = $('.myImage')
    // console.log(result);
    // $('div').html("<span class='someClass' >This is  great day!</span>");
    let $a = $('<a>', {
        'class': 'myAnchor',
        'text': "Digital Crafts",
        'href': "https://www.digitalcrafts.com/"
    });
})


// let $img = $('<img>', {
//     'src': 'https://media.entertainmentearth.com/assets/images/cb11f9860a0e4b95846313406921bc09lg.jpg',
//     'alt': 'image of puppies',
// })

    $('div').append($img)

    // $('P').removeClass('myImage')

    $('p').click(()=>{
        alert('you clicked on the yellow box')
    })

    // $('p').on('click', (e)=>{
    //     alert("you clicked on the yellow box")
    // })

    $('body').keydown((e)=>{
        console.log(`key down: ${e.keyCode}`);
    })

    $('body').keyup((e)=>{
        console.log(`Key up: ${e.keyCode}`);
    })

    // let $inputCount = $('input')
    // $('input').keyup((e)=>{
    //     console.log($inputCount.val().length);
    //     $('#count').html($inputCount.val().length);
    // })


    $('#aButton').click((e)=>{
        $('textarea').fadeToggle(3000);
    })

    $('#aButton').click((e)=>{
        $('img').fadeToggle(3000).slideToggle(3000);
    })


    function myFunction() {
        console.log("form submitted!")
      };