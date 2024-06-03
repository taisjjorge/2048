import styles from "@/styles/board.module.css";

export default function Board() {
  const renderGrid = () => {
    const cells: JSX.Element[] = [];
    const totalCellsCount = 16;

    for (let index = 0; index < totalCellsCount; index++) {
      cells.push(<div key={index} className={styles.cell} />);
    }

    return cells;
  };

  return (
    <div className={styles.board}>
      <div className={styles.grid}>{renderGrid()}</div>
    </div>
  );
}
