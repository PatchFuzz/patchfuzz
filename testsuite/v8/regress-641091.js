



assertEquals(["🍤", "🍤"],
             '🍤🍦🍋ππ🍋🍦🍤'.match(/🍤/ug));

assertEquals(["🍤", "🍦", "🍦", "🍤"],
             '🍤🍦🍋ππ🍋🍦🍤'.match(/🍤|🍦/ug));

assertEquals(["🍤", "🍦", "🍋", "🍋", "🍦", "🍤"],
             '🍤🍦🍋ππ🍋🍦🍤'.match(/🍤|🍦|🍋/ug));

assertEquals(["🍤", "🍦", "🍋", "π", "π", "🍋", "🍦", "🍤"],
             '🍤🍦🍋ππ🍋🍦🍤'.match(/🍤|🍦|π|🍋/ug));
