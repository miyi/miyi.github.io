export const pushToList = ({
  title,
  assignee,
  details,
  complete,
  list_number,
  list1,
  list2,
  ...$scope
}) => {
  const data = {
    id: list1.length + 1 + list2.length + 1,
    title,
    assignee,
    details,
    complete,
  };
  if (list_number == 2) {
    list2.push(data);
  } else {
    list1.push(data);
  }
};
