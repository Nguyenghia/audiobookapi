import { styled } from "styled-components";
import CenterMode from "../../component/base/CustomImageSlider";
import ListBooks from "../../component/base/ListBooks";
import Grid from '@mui/material/Grid';
import { listBook } from "../../utils/data";

const BooksContainer = styled("div")`
  // display: flex;
  margin-top: 20px;
`;
const Books = () => {
  return (
    <BooksContainer>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={5}>
          <CenterMode listBook={listBook} />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <ListBooks />
        </Grid>
      </Grid>
    </BooksContainer>
  );
};

export default Books;
