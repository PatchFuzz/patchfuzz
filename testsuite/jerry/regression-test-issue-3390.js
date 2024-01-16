













var a = Promise.resolve( 'a' );
var b = Promise.reject( 'b' );
Promise.race( [ a , b ] ).then ( function ( x ) { var a , b ; [ a , b ] = [ 1 , 2 ]; String( a === 1 ); } , function ( x ) { } );
Promise.race( [ b , a ] ).then ( function ( x ) { String ( false ) ;}, function ( x ) { } );
Promise.race( [ , b , a ] ).then ( function ( x ) { String ( x === undefined ) ; }, function ( x ) { String ( false ); } );
Promise.race( a ).then ( function ( x ) { String ( false ); }, function ( x ) { String ( x.name === "TypeError" ); } );
