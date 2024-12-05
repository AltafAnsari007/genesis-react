import TableSorting from "./components/Table/TableSorting";
import TableExpanding from "./components/Table/TableExpanding";
import TableFixedColumn from "./components/Table/TableFixedColumn";

const Tabletest = () => {
  return (
    <div className="py-5 px-3 space-y-10">
      <div className="space-y-2">
        <h1>Table With Fixed Column</h1>
        <TableFixedColumn />
      </div>
      <div className="space-y-2">
        <h1>Table With Row Expanding, Header and Pagination</h1>
        <TableExpanding />
      </div>
      <div className="space-y-2">
        <h1>Table With Sorting, Checkbox and Dense Mode</h1>
        <TableSorting />
      </div>
    </div>
  );
};

export default Tabletest;
