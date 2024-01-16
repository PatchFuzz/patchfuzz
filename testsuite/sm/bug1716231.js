

const too_big_for_float32 = 67109020;

function call_with_no_ic_data() {}

function foo() {
    call_with_no_ic_data();

    let x = too_big_for_float32;
    let result;

    
    for (let i = 0; i < 100; i++) {
        const float32 = Math.fround(0);

	
	
        result = float32 || x;
    }

    return result;
}

assertEq(foo(), too_big_for_float32);
