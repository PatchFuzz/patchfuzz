const inner_module_source = "print('executing inner module');";

const outer_module_source =`
const inner_url = "data:text/javascript,${inner_module_source}";
import(inner_url);
`

const url = `data:text/javascript,${outer_module_source}`;
import(url);
