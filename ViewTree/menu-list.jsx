//Display the menu list
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="mb-0 mt-0 list-none">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
