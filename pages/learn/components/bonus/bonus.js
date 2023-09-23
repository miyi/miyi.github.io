export const removeTask = ($scope) => {
  $scope.all_tasks = $scope.all_tasks.filter((task) => task.id != $scope.id);
  console.log($scope.all_tasks);
};

export const pushToList = ({
  title,
  assignee,
  details,
  complete,
  priority,
  all_tasks,
}) => {
  const data = {
    id: all_tasks.length + 1,
    title,
    assignee,
    details,
    complete,
    priority,
  };
  all_tasks.push(data);
};

export const filterByPriority = (all_tasks, priority) => {
  return all_tasks.filter((task) => task.priority == priority);
};
