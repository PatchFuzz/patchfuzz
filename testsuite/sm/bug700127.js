



function addThis() {}
function Integer( value ) {
  try {
    checkValue( value )
  } catch (e) {  }
}
function checkValue( value ) {
  if ( addThis() != value || value )
        throw value='foo';
  return value;
}
Integer( 3 );
Integer( NaN );
