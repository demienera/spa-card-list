import { Pagination } from "antd";
import { usePaginationStyles } from "./styles";

type Props = {
  currentPage: number;
  total: number;
  onChange: (page: number) => void;
};

export const ItemsPagination = ({ currentPage, total, onChange }: Props) => {
  const styles = usePaginationStyles();

  return (
    <div style={styles.conteiner}>
      <Pagination
        current={currentPage}
        pageSize={20}
        total={total}
        onChange={onChange}
        showSizeChanger={false}
      />
    </div>
  );
};
