import React from 'react'

type ListProps<T> = {
  list: T[];
  renderItem: (item: T) => React.ReactNode
}

function List<T>({
  list,
  renderItem
}: ListProps<T>) {
  if (!list.length) {
    return <div>Список пуст</div>
  }

  return (
    <div className="list">
      {list.map((item) => renderItem(item))}
    </div>
  );
};

export {
  List
};