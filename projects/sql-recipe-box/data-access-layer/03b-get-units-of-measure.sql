-- This query needs to select the following columns:
--
--   * From the "units_of_measure" table:
--     * id
--     * name
--
-- It should order the results by the name
--
-- This has the general form
-- SELECT ...
-- FROM ...
-- ORDER BY ...


select id, name
from units_of_measure
order by name;
