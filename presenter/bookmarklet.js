document.body.appendChild(document.createElement('script')).src = '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'
document.body.appendChild(document.createElement('script')).src = '//cdn.mlkcca.com/v2.0.0/milkcocoa.js'
document.body.appendChild(document.createElement('script')).src = '//nabettu.github.io/niconicocoa/presenter/script.js'


link.href = 'https://nabettu.github.io/niconicocoa/presenter/style.css';
link.type = 'text/css';
link.rel = 'stylesheet';
document.body.appendChild(link);




function cssChange( file ){
    var link = document.createElement('link');

      link.href=""
    with( link ) {
        href = file;
        type = 'text/css';
        rel = 'stylesheet';
    }

    var head = document.getElementsByTagName('head');
    head.item(0).appendChild(link);
}
