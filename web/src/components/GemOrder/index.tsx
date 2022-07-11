import classNames from "classnames";
import { HiChevronDoubleUp, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./GemOrder.module.css";

import { GemReward } from "../GemReward";
import { RequiredGem } from "../../../../common/routes";
import { InlineFakeBlock } from "../InlineFakeBlock";

interface GemOrderProps {
  requiredGem: RequiredGem;
  onMoveTop?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onDelete?: () => void;
}

export function GemOrder({
  requiredGem,
  onMoveTop,
  onMoveUp,
  onMoveDown,
  onDelete,
}: GemOrderProps) {
  return (
    <div className={classNames(styles.gemOrder)}>
      {GemReward(requiredGem, "gem")}
      <div className={classNames(styles.orderButtonGroup)}>
        <InlineFakeBlock
          child={
            <HiChevronUp
              className={classNames(styles.orderButton)}
              onClick={onMoveUp}
            />
          }
        />
        <InlineFakeBlock
          child={
            <HiChevronDown
              className={classNames(styles.orderButton)}
              onClick={onMoveDown}
            />
          }
        />
        <InlineFakeBlock
          child={
            <HiChevronDoubleUp
              className={classNames(styles.orderButton)}
              onClick={onMoveTop}
            />
          }
        />
        <InlineFakeBlock
          child={
            <MdDeleteOutline
              className={classNames(styles.orderButton)}
              onClick={onDelete}
            />
          }
        />
      </div>
    </div>
  );
}
