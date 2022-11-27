import { Badge, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tag } from "./App";
import styles from "./NoteList.module.css";

export type SimplifiedNote = {
  id: string;
  title: string;
  tags: Tag[];
};
export function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Card
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
      as={Link}
      to={`${id}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="text-align-center justify-content-center h-100"
        >
          <span className="fs-5">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map((tag) => {
                return (
                  <Badge key={tag.id} className="text-truncate">
                    {tag.label}
                  </Badge>
                );
              })}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
}
