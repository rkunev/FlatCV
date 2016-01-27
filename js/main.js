var Main = function( window, document, undefined ) {

    function toggleHeaderInfo() {
        var togglers = document.getElementsByClassName( 'toggler' );

        for ( var i = 0; i < togglers.length; i++ ) {
            togglers[ i ].addEventListener( 'click', toggleAdjParagraphs, false );
        };

        function toggleAdjParagraphs() {
            this.nextElementSibling.classList.toggle( 'slide' );
        };
    };

    function toggleTimeline() {
        var togglers = document.getElementsByClassName( 'data-toggler' );

        for ( var i = 0; i < togglers.length; i++ ) {
            togglers[ i ].addEventListener( 'click', toggleTarget, false );
        };
    };

    function toggleTarget() {
        var selector = this.getAttribute( 'data-toggle' ),
            targets;

        if ( selector ) {
            this.parentNode.classList.toggle( 'collapsed' );

            targets = document.querySelectorAll( selector );

            for ( var i = 0; i < targets.length; i++ ) {
                targets[ i ].classList.toggle( 'slide' );
            }
        }
    };

    return {
        init: function() {
            toggleHeaderInfo();
            toggleTimeline();
        }
    }
}( window, document );
Main.init();
